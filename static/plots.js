// Define the unemployment API endpoint URL
var unemployment_url = "http://127.0.0.1:5000/api/unemployment";

// Define the percapincome API endpoint URL
var percapincome_url = "http://127.0.0.1:5000/api/percapincome";

// Define the minimum_wage API endpoint URL
var minimum_wage_url = "http://127.0.0.1:5000/api/minimum_wage";

var myMap = L.map('map').setView([37.8, -96], 4);

// Initially plot the unemployment data
function plot_unemployment(data) {
    myMap.remove();
    d3.json(unemployment_url).then(function (response) {

        region = [];
        unemployment = [];
        for (var i = 0; i < 50; i++) {

            region.push(response[60]['data']['2020-01-01'][i]['region'])
            unemployment.push(response[60]['data']['2020-01-01'][i]['value'])
        }

        // Combine region and unemployment data into a single object
        var data = [];
        for (var i = 0; i < region.length; i++) {
            data.push({
                region: region[i],
                unemployment: unemployment[i]
            });
        }
        console.log(data);



        // Define the map variable
        var myMap = L.map('map').setView([37.8, -96], 4);

        // Adding a tile layer (the background map image) to our map:
        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(myMap);

        L.geoJson(unemploymentStatesData).addTo(myMap);

        function getColor(d) {
            return d > 5 ? '#800026' :
            d > 4.5 ? '#BD0026' :
            d > 4 ? '#E31A1C' :
            d > 3.5 ? '#FC4E2A' :
            d > 3 ? '#FD8D3C' :
            d > 2.5 ? '#FEB24C' :
            d > 2 ? '#FED976' :
                    '#FFEDA0';
        }


        function style(feature) {
            return {
                fillColor: getColor(feature.properties.density),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

        L.geoJson(unemploymentStatesData, { style: style }).addTo(myMap);

    });

    }


// Initially plot the percapincome data
function plot_percapincome(data) {
    myMap.remove();
    d3.json(percapincome_url).then(function (response) {

        region = [];
        percapincome = [];
        for (var i = 0; i < 50; i++) {

            region.push(response[60]['data']['2020-01-01'][i]['region'])
            percapincome.push(response[60]['data']['2020-01-01'][i]['value'])
        }

        // Combine region and unemployment data into a single object
        var data = [];
        for (var i = 0; i < region.length; i++) {
            data.push({
                region: region[i],
                percapincome: percapincome[i]
            });
        }
        console.log(data);



        // Define the map variable
        var myMap = L.map('map').setView([37.8, -96], 4);

        // Adding a tile layer (the background map image) to our map:
        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(myMap);

        L.geoJson(percapincomeStatesData).addTo(myMap);

        function getColor(d) {
            return d > 82500 ? '#800026' :
                d > 80000 ? '#BD0026' :
                d > 70000 ? '#E31A1C' :
                d > 65000 ? '#FC4E2A' :
                d > 60000 ? '#FD8D3C' :
                d > 50000 ? '#FEB24C' :
                d > 47500 ? '#FED976' :
                '#FFEDA0';
        }


        function style(feature) {
            return {
                fillColor: getColor(feature.properties.density),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

        L.geoJson(percapincomeStatesData, { style: style }).addTo(myMap);

    });

}

// Initially plot the minimum_wage data
function plot_minimum_wage(data) {
    myMap.remove();

    d3.json(percapincome_url).then(function (response) {



        // Define the map variable
        var myMap = L.map('map').setView([37.8, -96], 4);

        // Adding a tile layer (the background map image) to our map:
        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(myMap);

        L.geoJson(minimum_wageStatesData).addTo(myMap);

        function getColor(d) {
            return d > 12 ? '#800026' :
                d > 11.5 ? '#BD0026' :
                d > 10.5 ? '#E31A1C' :
                d > 9.5 ? '#FC4E2A' :
                d > 8.5 ? '#FD8D3C' :
                d > 8 ? '#FEB24C' :
                d > 7.25 ? '#FED976' :
                            '#FFEDA0';
        }


        function style(feature) {
            return {
                fillColor: getColor(feature.properties.density),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

        L.geoJson(minimum_wageStatesData, { style: style }).addTo(myMap);


    });


}

plot_unemployment();

// Change the plot when the collection dropdown is changed
d3.select("#dropdown").on("change", function () {
    
    console.log('hello');
     var selectedOption = d3.select(this).property("value");
     if (selectedOption == "Unemployment") {
         plot_unemployment();
     }
     else if (selectedOption == "Per Capita Income") {
         plot_percapincome();
     }
     else if (selectedOption == "Minimum Wage") {
         plot_minimum_wage();
     }
}
);

