let ctx = document.querySelector("#myChart");

new Chart(ctx, {
    type: "pie",
    data : {
        labels : ['Paris', 'New-York', 'Madrid', 'Moscou', 'Berlin', 'Douala'],
        datasets: [{
            label: "Nombre d'habitants",
            data: [12, 19, 7, 5, 2, 3],
            backgroundColor: ['red', 'bleu', 'yellow', 'green', 'purple', 'orange']
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Mon premier graphique avec Chart JS'
            },

        },

        legend: {
            position: 'bottom'
        }
    }
});