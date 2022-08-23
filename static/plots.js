// Define the map variable
var myMap = L.map("map", {
    center: [39, 98],
    zoom: 5
});

// Adding a tile layer (the background map image) to our map:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define the unemployment API endpoint URL
var unemployment_url = "http://127.0.0.1:5000/api/unemployment";

// Define the initalization function
function init() {
    d3.json(unemployment_url).then(function (response) {

        //console.log(response);

        var heatArray = [];

        for (var i = 0; i < response.data; i++) {

            var year = response[i].data;

    //         if (location) {
    //             heatArray.push([location.coordinates[1], location.coordinates[0]]);
    //         }
        }

    // var heat = L.heatLayer(heatArray, {
    //     radius: 20,
    //     blur: 35
    // }).addTo(myMap);
}

init();