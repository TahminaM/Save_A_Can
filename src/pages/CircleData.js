export const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true
};

export const closeOption = {
    ...defaultOptions,
    zIndex : 3,
    fillOpacity: 0.05,
    strokeColor: "#8BC34A",
    fillColor: "#8BC34A"
}

export const middelOption = {
    ...defaultOptions,
    zIndex : 2,
    fillOpacity: 0.05,
    strokeColor: "#FBC02D",
    fillColor: "#FBC02D"
}

export const farOption = {
    ...defaultOptions,
    zIndex : 1,
    fillOpacity: 0.05,
    strokeColor: "#FF5252",
    fillColor: "#FF5252"
}