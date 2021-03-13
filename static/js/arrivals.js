
//Code
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 520,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
})
//  });


var satelite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "satellite-streets-v11",
    accessToken: API_KEY
});

var baseMaps = {

    "Satelite": satelite,
    "Outdoors": streetmap
}


var cities;
var map = L.map("map", {
    center: [46.2276, 2.2137],
    layers: [satelite],
    zoom: 4
})


L.control.layers(null, baseMaps, {
    collapsed: false
}).addTo(map);




$.getJSON("/tourism_arr")
    .done(function (data) {
        var info = processData(data);
        console.log(info)
    })
    .fail(function () { alert('There has been a problem loading the data.') });


function processData(data) {
    var timestamps = [];
    var min = Infinity;
    var max = -Infinity;
    // console.log(timestamps)

    for (var feature in data.features) {

        var properties = data.features[feature].properties;
        // console.log(properties)

        for (var attribute in properties) {


            if (attribute != 'country' &&
                attribute != 'continent_name' &&
                attribute != 'country_code') {

                if ($.inArray(attribute, timestamps) === -1) {
                    timestamps.push(attribute);
                    // console.log(timestamps)
                }

                if (properties[attribute] < min) {
                    min = properties[attribute];
                    console.log(min)
                }

                if (properties[attribute] > max) {
                    max = properties[attribute];
                    // console.log(max)
                }
            }

        }
    }

    return {
        timestamps: timestamps,
        min: min,
        max: max

    }
}

$.getJSON("/tourism_arr")
    .done(function (data) {
        var info = processData(data);
        console.log(info);
        createPropSymbols(info.timestamps, data);

    })
    .fail(function () { alert('There has been a problem loading the data.') });



function createPropSymbols(timestamps, data) {

    cities = L.geoJson(data, {

        pointToLayer: function (feature, latlng) {

            return L.circleMarker(latlng, {
                fillColor: 'blue',
                color: '#537898',
                weight: 1,
                fillOpacity: 0.6
            }).on({

                mouseover: function (e) {
                    this.openPopup();
                    this.setStyle({ fillColor: 'red' });
                },
                mouseout: function (e) {
                    this.closePopup();
                    this.setStyle({ fillColor: 'blue' });

                }
            });
        }
    }).addTo(map);
    updatePropSymbols(timestamps[0]);
}


function updatePropSymbols(timestamp) {

    cities.eachLayer(function (layer) {

        var props = layer.feature.properties;
        var radius = calcPropRadius(props[timestamp]) / 10000;
        var popupContent = '<b>' + 'M' + String(props[timestamp]) +
            '</b><br>' +
            '<i>' + props.country +
            '</i> in </i>' +
            timestamp + '</i>';

        layer.setRadius(radius);
        layer.bindPopup(popupContent, { offset: new L.Point(0, -radius) });
    })
}

function calcPropRadius(attributeValue) {

    var scaleFactor = 5000;
    var area = attributeValue * scaleFactor;
    return Math.sqrt(area / Math.PI) * 2;
}


$.getJSON("/tourism_arr")
    .done(function (data) {
        var info = processData(data);
        createPropSymbols(info.timestamps, data);
        // createLegend(info.min, info.max);
        createSliderUI(info.timestamps);
    })
    .fail(function () { alert('There has been a problem loading the data.') })


function createLegend(min, max) {

    if (min < 12000) {
        min = 12000;
    }

    function roundNumber(inNumber) {

        return (Math.round(inNumber / 10) * 10);
    }

    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function (map) {

        var legendContainer = L.DomUtil.create('div', "legend");
        var symbolsContainer = L.DomUtil.create('div', 'symbolsContainer');
        var classes = [roundNumber(min), roundNumber((max - min) / 2), roundNumber(max)];
        var legendCircle;
        var lastRadius = 0;
        var currentRadius;
        var margin;

        L.DomEvent.addListener(legendContainer, 'mousedown', function (e) {
            L.DomEvent.stopPropagation(e);
        });

        $(legendContainer).append("<h2 id='legendTitle'>Arrivals</h2>");

        for (var i = 0; i <= classes.length - 1; i++) {

            legendCircle = L.DomUtil.create('div', 'legendCircle');

            currentRadius = calcPropRadius(classes[i]);

            margin = -currentRadius - lastRadius - 2;

            $(legendCircle).attr('style', 'width: ' + currentRadius * 2 +
                'px; height: ' + currentRadius * 2 +
                'px; margin-left: ' + margin + 'px');
            $(legendCircle).append("<span class='legendValue'>" + classes[i] + "</span>");

            $(symbolsContainer).append(legendCircle);

            lastRadius = currentRadius;

        }

        $(legendContainer).append(symbolsContainer);

        return legendContainer;

    };

    legend.addTo(map);

} // end createLegend()



function createSliderUI(timestamps) {

    var sliderControl = L.control({ position: 'bottomleft' });

    sliderControl.onAdd = function (map) {

        var slider = L.DomUtil.create('input', 'range-slider');
        console.log(slider)

        L.DomEvent.addListener(slider, 'mousedown', function (e) {
            L.DomEvent.stopPropagation(e);
        });

        $(slider)
            .attr({
                'type': 'range',
                'max': timestamps[timestamps.length - 1],
                'min': timestamps[0],
                'step': 1,
                'value': String(timestamps[0])
            })
            .on('input change', function () {
                updatePropSymbols($(this).val().toString());
                $('.temporal-legend').text(this.value);
            });
        return slider;

    }

    sliderControl.addTo(map)
    createTemporalLegend(timestamps[0]);

}




function createTemporalLegend(startTimestamp) {

    var temporalLegend = L.control({ position: 'bottomleft' });

    temporalLegend.onAdd = function (map) {
        var output = L.DomUtil.create('output', 'temporal-legend');
        $(output).text(startTimestamp)
        return output;
    }

    temporalLegend.addTo(map);
}




