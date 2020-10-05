// TODO Use the dataset below to draw a Chart.js bar chart of the bridge names and their span 
// lengths. You can draw the chart on the same page as the map, or you can make a new page.

let canvas = document.querySelector('#college-map')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Verrazano-Narrows Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],
        datasets: [ {
            label: 'Bridge spans in meters',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'purple', 'green']
        } ]
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