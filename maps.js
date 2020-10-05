// Latitude Longitude
let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 // 1 is a view of the whole world, 20 is city blocks for zoom

// L comes from script src in hello_map.html with a method of .map
// arguement is the div id where we'll draw the map in
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adds circle around the city 
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.2 // This is from mapbox but if opacity is = to 1 then it is solid
}).bindPopup('Twin Cities Metro Area').addTo(map)

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function(campus) {
    // Name and website from the array 
    let popupText = `<b>${campus.name}<br><a href="${campus.website}">Website</a></b>`
    // for each coordinates from the array of objects
    let marker = L.marker(campus.coordinates)
    // Adds the template string to each of the markers
    .bindPopup(popupText)
    // Adds markers to the map
    .addTo(map)
})

// The individual way to input each college

// let mctcCoordinates = [44.972, -93.2844]
// // Make a marker and add it to the map
// let mctcMarker = L.marker(mctcCoordinates) // This can all be on one line
//     .bindPopup('<b>Minneapolis College<br> <a href="https://minneapolis.edu/">Website</a></b>')
//     .addTo(map)

// let stPaulCoordinates = [44.94839, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup('<b>Saint Paul College<br><a href="https://www.saintpaul.edu/">Website</a></b>')
//     .addTo(map)

// let normandaleCooridnates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCooridnates)
//     .bindPopup('<b>Normandale Community College<br><a href="https://www.normandale.edu/">Website</a></b>')
//     .addTo(map)



