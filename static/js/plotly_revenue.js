Plotly.d3.json('/country_revenue_2019', function (err, values) {
    console.log("data", values)

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: values.country,
        z: values.revenue_2019,
        text: values.country,
        autocolorscale: true
    }];

    var layout = {
        title: 'Revenues In 2019',
        geo: {
            projection: {
                type: 'Robinson '
            }
        }
    };

    Plotly.newPlot("myDiv", data, layout, { showLink: false });

});
Plotly.d3.json('/country_revenue_2009', function (err, values) {
    console.log("data", values)

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: values.country,
        z: values.revenue_2009,
        text: values.country,
        autocolorscale: true
    }];
 
    var layout = {
        title: 'Revenues In 2009',
        geo: {
            projection: {
                type: 'Robinson '
            }
        }
    };

    Plotly.newPlot("myDiv2", data, layout, { showLink: false });

});


