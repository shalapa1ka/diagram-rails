var ctx_live = $('#myCanvas');
var myChart = new Chart(ctx_live, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    }
});

var updateData = function (item) {
    $.ajax({
        url: '/',
        success: function (data) {
            // process your data to pull out what you plan to use to update the chart
            // e.g. new label and a new data point

            // add new label and data point to chart's underlying data structures
            myChart.data.labels.push(item.name);
            myChart.data.datasets[0].data.push(item.percent);

            // re-render the chart
            myChart.update();
        }
    });
};