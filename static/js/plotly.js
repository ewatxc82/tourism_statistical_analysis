Plotly.d3.json('/country_arrival_2019', function(err, values){
      console.log("data",values)

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: values.country,
        z: values.arrival_2019,
        text:  values.country,
        autocolorscale: true
    }];

    var layout = {
      title: 'arrivals in 2019',
      geo: {
          projection: {
              type: 'Robinson '
          }
      }
    };

    Plotly.newPlot("myDiv", data, layout, {showLink: false});

});
