document.addEventListener('turbolinks:load', () => {
    var ctx =  document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: JSON.parse(ctx.dataset.labels),
            datasets: [{
                data: JSON.parse(ctx.dataset.data),
                backgroundColor: ['#000', '#00e676', '#575757', '#1e88e5', '#757575','#FF80AB',
                    '#FF4081', '#49c5d5', '#C51162', '#9C27B0','#4E342E', '#3E2723', '#e91e63',
                    '#ffdb00', '#003088', '#F50057', '#ce6300', '#ff5722', '#ffd600', '#616161',],
                borderWidth: 0.5,
                borderColor: '#ddd'
            }]
        }
    });

    window.chart = myChart
});