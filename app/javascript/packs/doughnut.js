document.addEventListener('turbolinks:load', () => {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: JSON.parse(ctx.dataset.labels),
            datasets: [{
                data: JSON.parse(ctx.dataset.data),
                backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
                borderWidth: 0.5,
                borderColor: '#ddd'
            }]
        }
    });
});