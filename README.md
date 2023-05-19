# Save A Can

## Table of Content

[Introduction](#introduction)

[Guide](#guide)

[Documentation](#documentation)

[Known Issues](#known-issues)

## Introduction

Save A Can is a cutting-edge Web App developed using ReactJS, a popular JavaScript library for building user interfaces. The primary goal of Save-A-Can is to promote environmental sustainability by making recycling more accessible and profitable for its users. The app achieves this by employing a custom TensorFlow model to accurately identify recyclable objects and providing users with the nearest recycling centers where they can turn in these items for a profit.

Key features of Save-A-Can include:

1. Full Sign-Up System: Save-A-Can offers a comprehensive registration process, enabling users to create their accounts and securely store their personal information.
2. Custom CNN Model: Save-A-Can utilizes a state-of-the-art Convolutional Neural Network (CNN) model to accurately identify various recyclable materials. The model has been meticulously trained on a vast dataset of images, allowing it to recognize different types of plastics, metals, glass, and paper products. This feature makes it easier for users to determine which items can be recycled, ultimately reducing waste and promoting sustainability.
3. Interactive Map: Save-A-Can incorporates an intuitive, user-friendly map that highlights the recycling facilities within the user's vicinity. By providing real-time information on the nearest recycling centers, the app encourages users to recycle more frequently and conveniently. This feature also includes essential details about each facility, such as hours of operation, accepted materials, and potential financial incentives for recycling.

## Guide

### Save-A-Can

Save-A-Can is a web application designed to help users identify recyclable materials and locate the nearest recycling centers. By using a machine learning model, the app predicts the type of recyclable material based on an uploaded image and displays nearby recycling centers on a map.

#### Getting Started

Visit the Save-A-Can website at https://saveacan.netlify.app/ to access the application.

#### Features

- User authentication with email and password
- Image upload and processing for recyclable material identification
- Machine learning model for recyclable material prediction
- Interactive map displaying nearby recycling centers accepting the identified material
- Directions to selected recycling centers from the user's current location

#### Usage

1. **Create an account**: Click on the "Sign Up" button and provide your email address and a password to create an account. If you already have an account, click "Log In" to sign in with your email and password.

2. **Upload an image**: Once you are logged in, you will see an input field to upload an image. Click on the input field or drag and drop an image of the item you want to identify. The app accepts images in common formats like JPEG, PNG, and GIF.

3. **Predict the recyclable material**: After uploading the image, click the "Predict" button. The app will process the image and display the predicted recyclable material (e.g., aerosol, battery, cardboard, food can, etc.).

4. **View nearby recycling centers**: Once the prediction is complete, the app will display a map with markers for nearby recycling centers that accept the identified material. You can interact with the map to zoom in and out or click on individual markers to see more information about the recycling center, such as its name and address.

5. **Get directions**: By clicking on a recycling center marker, you can also access directions from your current location to the recycling center. Follow these directions to reach the recycling center and responsibly dispose of your recyclable item.

6. **Log out**: When you're done using the app, click the "Log Out" button to log out of your account.

#### Contributing

Feel free to submit issues or pull requests to improve the Save-A-Can application.

#### License

This project is open-source and available under the [MIT License](LICENSE).

#### Acknowledgements

- Machine learning model provided by [hexbacon](https://github.com/hexbacon/Model)
- Google Maps API for map integration and location services
- Firebase for user authentication and backend services

#### Support

Share the Save-A-Can application with friends and family to promote responsible waste disposal and contribute to a cleaner, greener environment.

## Documentation

### Save-A-Can Map Component

This React component renders an interactive map with recyclable object locations and directions to the nearest recycling centers. The component utilizes the @react-google-maps/api library for Google Maps integration and relies on React hooks to manage component state and side effects.

#### Usage

```jsx
import Map from './path-to-component/Map';

function App() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
```

#### Component Features

1. Display a Google Map with custom container size and options.
2. Locate the user's current position and mark it on the map.
3. Create circles around the user's position to represent different search radiuses.
4. Search for recycling centers for different materials (plastic, glass, and metal) using the Google Places API.
5. Display markers for the recycling centers on the map with custom icons based on the type of material.
6. Show an InfoWindow with the name and address of the recycling center when the user clicks on a marker.
7. Display directions to the recycling center when the InfoWindow is open.
8. Close the InfoWindow when the user clicks on the close button.

#### Code Structure

1. Import necessary dependencies and declare the container size for the Google Map.
2. Define the Map component as a functional component.
3. Load the Google Maps API using the useJsApiLoader hook and manage the state for the map instance, office location, found locations, and directions result.
4. Define callback functions onLoad and onUnmount for handling the map instance and removing markers/circles when the component unmounts.
5. Define the getDirections function to obtain driving directions between the user's location and the selected recycling center.
6. Define the getCurrentLocation function to get the user's current position using the Geolocation API.
7. Define the makeServiceRequest function to perform text search requests for recycling centers using the Google Places API.
8. Define the getMarkerIcon function to return a custom marker icon based on the type of material.
9. Define the onInfoWindowOpen and onInfoWindowClose functions to handle opening and closing InfoWindows.
10. Render the Google Map component with markers, circles, and directions (if available).

#### Enviroment Variable

```text
REACT_APP_MAP_API_KEY=your_google_maps_api_key
```

Replace your_google_maps_api_key with your actual Google Maps API key.

#### Dependecies

* `@react-google-maps/api`: For Google Maps integration.
* `react`: For creating the React component.
* `react-dom`: For rendering the component in the DOM.

### Save-A-Can MapPredict Component

This React component renders an interactive map with recyclable object locations and directions to the nearest recycling centers. The component utilizes the @react-google-maps/api library for Google Maps integration and relies on React hooks to manage component state and side effects.

#### Usage (MP)

```jsx
import MapPredict from './path-to-component/MapPredict';

function App() {
  return (
    <div>
      <MapPredict item="Plastic" />
    </div>
  );
}

export default App;
```

#### Component Features (MP)

1. Display a Google Map with custom container size and options.
2. Locate the user's current position and mark it on the map.
3. Create circles around the user's position to represent different search radiuses.
4. Search for recycling centers for a given item type using the Google Places API.
5. Display markers for the recycling centers on the map with custom icons based on the type of material.
6. Show an InfoWindow with the name and address of the recycling center when the user clicks on a marker.
7. Display directions to the recycling center when the InfoWindow is open.
8. Close the InfoWindow when the user clicks on the close button.

#### Code Structure (MP)

1. Import necessary dependencies and declare the container size for the Google Map.
2. Define the MapPredict component as a functional component.
3. Load the Google Maps API using the useJsApiLoader hook and manage the state for the map instance, office location, found locations, and directions result.
4. Define callback functions onLoad and onUnmount for handling the map instance and removing markers/circles when the component unmounts.
5. Define the getDirections function to obtain driving directions between the user's location and the selected recycling center.
6. Define the getCurrentLocation function to get the user's current position using the Geolocation API.
7. Define the makeServiceRequest function to perform text search requests for recycling centers using the Google Places API.
8. Define the getMarkerIcon function to return a custom marker icon based on the type of material.
9. Define the onInfoWindowOpen and onInfoWindowClose functions to handle opening and closing InfoWindows.
10. Render the Google Map component with markers, circles, and directions (if available).

#### Enviroment Variable (MP)

```text
REACT_APP_MAP_API_KEY=your_google_maps_api_key
```

Replace your_google_maps_api_key with your actual Google Maps API key.

#### Dependecies (MP)

* `@react-google-maps/api`: For Google Maps integration.
* `react`: For creating the React component.
* `react-dom`: For rendering the component in the DOM.

### Save-A-Can Prediction Component

This React component allows users to upload an image of a recyclable item, performs a prediction using a TensorFlow.js model to determine the type of item, and displays the nearest recycling centers based on the predicted item type. It utilizes the previously created MapPredict component.

#### Usage (Predict)

```jsx
import Prediction from './path-to-component/Prediction';

function App() {
  return (
    <div>
      <Prediction />
    </div>
  );
}

export default App;
```

#### Component Features (Predict)

1. Allow users to upload an image of a recyclable item.
2. Use TensorFlow.js and a pre-trained model to perform a prediction on the uploaded image.
3. Display the uploaded image and prediction result.
4. Utilize the MapPredict component to display nearby recycling centers for the predicted item type.
5. Provide a logout button for users to log out.

#### Code Structure (Predict)

1. Import necessary dependencies, such as TensorFlow.js, MapPredict, and authentication-related components.
2. Define the Prediction component as a functional component.
3. Load the TensorFlow.js model and manage the component state, such as the prediction result.
4. Define the loadModel function to load the TensorFlow.js model.
5. Define the handleLogOut function to log out the user and navigate to the home page.
6. Define the PerformPrediction function to process the uploaded image and perform a prediction using the TensorFlow.js model.
7. Define the ImageHandler function to handle the image upload and display it in the component.
8. Render the component with input fields for image selection and a button to perform the prediction. Display the uploaded image, prediction result, and the MapPredict component if the prediction is complete.

#### Dependecies (Predict)

* `@tensorflow/tfjs`: For TensorFlow.js integration and model predictions.
* `@tensorflow/tfjs-converter`: For loading the pre-trained TensorFlow.js model.
* `react`: For creating the React component.
* `react-dom`: For rendering the component in the DOM.
* `react-router-dom`: For navigation-related functionality.


### Save-A-Can Authentication Context (Auth)

This React context component provides authentication-related functionality for the Save-A-Can application. It utilizes Firebase Authentication for user management, including creating users, signing in, and logging out.

#### Usage (Auth)

Wrap the root component of your application with the `AuthContextProvider`:

```jsx
import { AuthContextProvider } from './path-to-context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      {/* Other components */}
    </AuthContextProvider>
  );
}

export default App;
```

Use the `UserAuth` hook within components that require authentication functionality:

```jsx
import { UserAuth } from './path-to-context/AuthContext';

function ExampleComponent() {
  const { user, signIn, logout } = UserAuth();

  // Use user, signIn, and logout as needed within the component
}

export default ExampleComponent;
```

#### Component Features (Auth)

1. Create a new user with an email and password using Firebase Authentication.
2. Sign in an existing user with an email and password using Firebase Authentication.
3. Log out the current user using Firebase Authentication.
4. Keep track of the current user's state (logged in or logged out).

#### Code Structure (Auth)

1. Import necessary dependencies, such as Firebase Authentication methods and React hooks.
2. Define the `UserContext` using `createContext`.
3. Define the `AuthContextProvider` component that provides authentication functionality to its children components.
4. Implement the `createUser`, `signIn`, and `logout` functions that interact with Firebase Authentication.
5. Use the `useEffect` hook to subscribe to the `onAuthStateChanged` event from Firebase Authentication and update the `user` state accordingly.
6. Export the `UserAuth` hook, which returns the current user and authentication-related functions.

#### Dependencies (Auth)

* `firebase/auth`: For Firebase Authentication integration and user management.
* `react`: For creating the React context component and hooks.
* `react-dom`: For rendering the component in the DOM.

### Save-A-Can AuthContext and withRouter Higher-Order Component

This module exports two React components: the `AuthContext` provider and the `withRouter` higher-order component (HOC). The `AuthContext` component provides authentication state management, while the `withRouter` HOC wraps a component with router-related props.

#### Usage (Context)

Wrap the root component of your application with the `AuthProvider`:

```jsx
import { AuthProvider } from './path-to-context/AuthContext';

function App() {
  return (
    <AuthProvider>
      {/* Other components */}
    </AuthProvider>
  );
}

export default App;
```

Use the `withRouter` HOC to inject router-related props into a component:

```jsx
import { withRouter } from './path-to-context/AuthContext';

function ExampleComponent(props) {
  const { router } = props;

  // Use router.location, router.navigate, and router.params as needed within the component
}

export default withRouter(ExampleComponent);
```

#### Component Features (Context)

1. Manage the current user's authentication state using Firebase Authentication.
2. Provide the current user object to children components via the `AuthContext` provider.
3. Inject router-related props into a component using the `withRouter` higher-order component.

#### Code Structure (Context)

1. Import necessary dependencies, such as Firebase, React, and React Router hooks.
2. Define the `AuthContext` using `createContext`.
3. Define the `AuthProvider` component that provides the current user's authentication state to its children components.
4. Use the `useEffect` hook to subscribe to the `onAuthStateChanged` event from Firebase Authentication and update the `currentUser` state accordingly.
5. Define the `withRouter` higher-order component that injects router-related props (location, navigate, and params) into a wrapped component.
6. Export the `AuthProvider` and `withRouter` components.

#### Dependencies (Context)

* `firebase`: For Firebase Authentication integration and user management.
* `react`: For creating the React context component, hooks, and higher-order component.
* `react-dom`: For rendering the component in the DOM.
* `react-router-dom`: For injecting router-related props into a component.

### Save-A-Can PrivateRoute Component

The `PrivateRoute` component is a wrapper for child components that require user authentication. If the user is not authenticated, the user is redirected to the root page.

#### Usage (Private)

Wrap the components that require user authentication with the `PrivateRoute` component:

```jsx
import PrivateRoute from './path-to-component/PrivateRoute';

function App() {
  return (
    <Router>
      {/* Public routes */}
      <PrivateRoute>
        {/* Components that require user authentication */}
      </PrivateRoute>
    </Router>
  );
}

export default App;
```

#### Component Features (Private)

1. Check if the user is authenticated by accessing the `user` object from the `UserAuth` context.
2. Redirect unauthenticated users to the root page.
3. Render the child components if the user is authenticated.

#### Code Structure (Private)

1. Import necessary dependencies, such as React and the `UserAuth` context.
2. Define the `PrivateRoute` component as a functional component.
3. Get the `user` object from the `UserAuth` context.
4. If the user is not authenticated, redirect to the root page using the `Navigate` component from `react-router-dom`.
5. If the user is authenticated, render the child components.

#### Dependencies (Private)

* `react`: For creating the React component.
* `react-router-dom`: For navigating to the root page if the user is not authenticated.
* `UserAuth` context: For accessing the `user` object to check if the user is authenticated.


## Known Issues

1. App may stopped rendering after interacting with the map.