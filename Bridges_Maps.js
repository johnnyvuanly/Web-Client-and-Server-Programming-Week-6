// Latitude Longitude
let metroAreaCenterCoordinates = [37.96, -98.2]
let zoomLevel = 4 // 1 is a view of the whole world, 20 is city blocks for zoom

// L comes from script src in Longest_US_Bridges_Map.html with a method of .map
// the arguement is the div id where we'll draw the map in
// Create the map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// Basically gives us the map background
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// let bridgeIcon = new LeafIcon({iconURL: 'bridge.png'})

let bridgeData = [
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: 1298.4, location: [40.6066, -74.0447] },
    {name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA	', span: 1280.2, location: [37.8199, -122.4783] },
    {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: 1158.0, location: [45.8174, -84.7278] },
    {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span: 1067.0, location: [40.8517, -73.9527] },
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span: 853.44, location: [47.2690, -122.5517]}
]

bridgeData.forEach(function(bridge) {
    let popupText = `${bridge.name} has a span of ${bridge.span} meters`
    let marker = L.marker(bridge.location).bindPopup(popupText).addTo(map)
    // let marker = L.marker(bridge.location, {icon: bridgeIcon}).addTo(map).bindPopup(popupText)
})

