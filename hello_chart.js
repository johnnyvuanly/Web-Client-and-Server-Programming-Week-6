let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Either', 'Neither'],
        datasets: [ {
            label: 'Number of votes', 
            data: [18, 14, 7, 10],
            // Gives color to each of the bars 
            backgroundColor: ['red', 'blue', 'green', 'yellow']
        } ]
    // Comma after the data attribute
    },
    options: {
        scales: {
           yAxes: [ {
               ticks: {
                   beginAtZero: true
               }
           } ]
        }
    }
})