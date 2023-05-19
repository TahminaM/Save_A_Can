import React, { useMemo, useRef } from 'react';
import { useState, useCallback, useEffect, memo } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';
import { closeOption, middelOption, farOption } from './CircleData';

// Define container size for Google Map
const containerStyle = {
  width: '80%',
  height: '400px'
};

const MapPredict = ({item}) => {
  // Load Google Maps API with specified options and libraries
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries: ['places'],
  });

  // Set center coordinates for the map
  const center = useMemo(() => ({ lat: 40.7678, lng: -73.9645 }), []);

  // Set options for the map
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    mapId: "a15b2059c20005a5",
  }), []);

  // Set state for the current office location and found locations
  const [office, setOffice] = useState({});
  const [locations, setLocation] = useState({});
  const [directionsResult, setDirectionsResult] = useState(null);

  // Reference to the Google Map instance
  const mapRef = useRef();

  // Set state for the Google Map instance and PlacesService instance
  const [map, setMap] = useState(null);
  const [service, setService] = useState(null);

  // Callback function to be executed when the Google Map instance is loaded
  const onLoad = useCallback(
    function callback(map) {
      // Set the bounds for the map to be the center location
      const bounds = new window.google.maps.LatLngBounds(center);

      // Create a PlacesService instance for the map
      const service = new window.google.maps.places.PlacesService(map);

      // Fit the map to the bounds and set the map reference and service state
      map.fitBounds(bounds);
      mapRef.current = map;
      getCurrentLocation();
      setMap(map);
      setService(service);
    },
    [center]
  );

  // Callback function to be executed when the Google Map instance is unmounted
  const onUnmount = useCallback(function callback(map) {
    // Remove all markers from the map
    const markers = mapRef.current?.getMarkers();
    markers && markers.forEach((marker) => marker.setMap(null));
  
    // Remove all circles from the map
    const circles = mapRef.current?.getOverlays();
    circles && circles.forEach((circle) => circle.setMap(null));
  
    // Reset the office state to an empty object
    setOffice({});
  
    setMap(null)
  }, []);

  const getDirections = (destination) => {
    if (!office) {
      console.error('User location not available');
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: office,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResult(result);
        } else {
          console.error(`Directions request failed due to ${status}`);
        }
      }
    );
  };

  // Function to get the user's current location
  const getCurrentLocation =() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        setOffice(pos);
      })
    }
  };
  

  const makeServiceRequest = useCallback(() => {
    const request = {
      location: office,
      radius: 7500,
      query: `Recycling Center ${item}`,
    };
  
    const tempLocations = [];
    // Make Request
    service.textSearch(request, (result, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < result.length; i++) {
          const name = result[i].name;
          const address = result[i].formatted_address;
          const place = {
            lat: result[i].geometry.location.lat(),
            lng: result[i].geometry.location.lng(),
            name,
            address,
            isOpen: false,
            type: request.query.type,
            icon: result[i].icon,
          };
          console.log(place.icon);
          tempLocations.push(place);
        }
        setLocation(tempLocations);
      }
      map.setCenter(office);
      map.setZoom(15);
    });
  }, [office, service, item, map]);


  useEffect(() => {
    if (office && service) {
      // Clear locations and directions before making a new request
      setLocation([]);
      setDirectionsResult(null);
  
      makeServiceRequest();
    }
  }, [office, service, item, makeServiceRequest]);
  
  
  const getMarkerIcon = (type) => {
    let color;
    switch (type) {
      case 'Plastic':
        color = 'red';
        break;
      case 'Glass':
        color = 'blue';
        break;
      case 'Metal':
        color = 'green';
        break;
      default:
        color = 'red';
        break;
    }
    return {
      url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
    };
  };

  const onInfoWindowOpen = (index) => {
    // Get directions to the clicked marker
    getDirections(locations[index]);
    setLocation((prevLocations) =>
      prevLocations.map((location, i) => {
        if (i === index) {
          return { ...location, isOpen: true };
        } else {
          return { ...location, isOpen: false };
        }
      })
    );
  };
  

  const onInfoWindowClose = (index) => {
    const updatedLocations = [...locations];
    updatedLocations[index].isOpen = false;
    setLocation(updatedLocations);
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      defaultCenter={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {office && (
        <>
          <Marker position={office} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
          <Circle onLoad={makeServiceRequest} center={office} radius={2500} options={closeOption} />
          <Circle center={office} radius={5000} options={middelOption} />
          <Circle center={office} radius={7500} options={farOption} />
        </>
      )}
      {Array.isArray(locations) &&
        locations.map((location, index) => (
          <Marker
            key={index}
            position={location}
            onClick={() => onInfoWindowOpen(index)}
            icon={getMarkerIcon(location.type)}
          >
            {location.isOpen && (
              <InfoWindow onCloseClick={() => onInfoWindowClose(index)}>
                <div>
                  <h4>{location.name}</h4>
                  <p>
                    <b>Located at: </b>
                    {location.address}
                  </p>
                  <p>Additional content goes here</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      {/* Display directions */}
      {directionsResult && (
        <DirectionsRenderer
          directions={directionsResult}
          options={{ preserveViewport: true }}
        />
      )}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default memo(MapPredict);