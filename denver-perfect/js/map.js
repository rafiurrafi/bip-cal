// Initialize the map
var map = L.map("map"); // Don't set the initial view

// Add an OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Define an array of locations with names and coordinates
var locations = [
  { name: "Location A", coordinates: [51.5, -0.09] },
  { name: "Location B", coordinates: [51.55, -0.1] },
  { name: "Location C", coordinates: [51.52, -0.08] },
  // Add more locations as needed
];

// Create custom markers for each location
var bounds = L.latLngBounds(
  locations.map(function (location) {
    var marker = L.marker(location.coordinates).addTo(map);
    marker
      .bindTooltip(location.name, { permanent: true, opacity: 0.7 })
      .openTooltip();
    return location.coordinates;
  })
);

// Set the map view to fit all markers
map.fitBounds(bounds);
