let tester = document.querySelector("#tester");

// Déclaration des données 
let data = [{
    type: 'bar',
    x: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    y: [98, 87, 93, 83, 78, 69, 95, 91, 95, 93, 57, 92, 89],
    marker: {
        color: '#C8A2C8',
        line: {
            with: 1.5
        }
    }
}]

// Déclaration du titre
let layout = {
    title: 'Pourcentage du chiffre d\'affaire',
    font: {size: 15}
}

// Appel de la méthode PLOTLY
Plotly.newPlot(tester, data, layout);
