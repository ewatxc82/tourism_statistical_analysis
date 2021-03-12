mapboxgl.accessToken = 'pk.eyJ1IjoiZXdhdHhjIiwiYSI6ImNrbGxpbGp6bzAwZzgycGxrNjFyNTc5eXAifQ.NgdJ1jamht2ouPfqBbpe6Q';

var map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-2.3522, 48.8566], // initial map center in [lon, lat]
  zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

var link = "/tourism_arr";

d3.json(link, function(data) {

    // Creating a new choropleth layer
    geojson = L.choropleth(data).addTo(map);
  
    console.log(geojson);
  
  });