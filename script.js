$(document).ready(function() {
    $("#salesForm").submit(function(event) {
        event.preventDefault();
        var salesData = $("#salesData").val().split(",").map(Number);
        generateChart(salesData);
    });

    // Un gráfico de Chart.js
    function generateChart(data) {
        var ctx = document.getElementById('salesChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5',
                 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10'],
                datasets: [{
                    label: 'Ventas de Dispositivos Moviles por Mes',
                    data: data,
                    backgroundColor: 'rgba(0, 199, 255, 0.5)',
                    borderColor: 'rgba(0, 199, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});