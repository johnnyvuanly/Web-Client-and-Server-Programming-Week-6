// Latitude Longitude
let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 // 1 is a view of the whole world, 20 is city blocks for zoom

// L comes from script src in hello_map.html with a method of .map
// arguement is the div id where we'll draw the map in
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)