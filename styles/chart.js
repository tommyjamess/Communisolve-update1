var xValues = ["Italy",];
    var yValues = [50, 50];
    var barColors = [
    "#700CB3",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
    ];

    new Chart("mysession", {
    type: "pie",
    data: {
        // labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
});


var xValues = [];
    var yValues = [55, 40];
    var barColors = [
    "#700CB3",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
    ];

    new Chart("mysolution", {
    type: "pie",
    data: {
        // labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    
});

var xValues = [];
    var yValues = [55, 40];
    var barColors = [
    "#700CB3",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
    ];

    new Chart("othersolution", {
    type: "pie",
    data: {
        // labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    
});



