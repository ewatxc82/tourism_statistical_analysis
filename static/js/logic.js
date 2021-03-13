var map = L.map("map", {
    center: [54.5260 , 15.2551],
    zoom: 3
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
  
  
  



// url="/tourism_arr"
// d3.json(url,function(data){
//     console.log("data arrival",data)
// })

// url2="/tourism_revenue"
// d3.json(url2,function(data){
//     console.log("data revenue",data)
//     var revenues = data.features
//     for (var i = 0; i < revenues.length; i++) {
//       var earth = revenues[i].properties.toString(1995)
//     } 
//      console.log("string",earth)

// })


