let ctx = document.querySelector("#myChart");

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['production de vin %', 'Production tire-bouchons personnalisés en %', 'Production de fromage en %'],
        datasets: [{
            data: [60, 10, 30],
            backgrounColor: ['red', 'bleu', 'green']
        }],
    },
    hoverOffset: 4
})