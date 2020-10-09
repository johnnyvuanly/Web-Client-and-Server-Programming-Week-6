// TODO Use the dataset below to draw a Chart.js bar chart of the bridge names and their span 
// lengths. You can draw the chart on the same page as the map, or you can make a new page.

let canvas = document.querySelector('#college-map')
let context = canvas.getContext('2d')

let bridgeData = [
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: 1298.4, location: [40.6066, -74.0447] },
    {name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA	', span: 1280.2, location: [37.8199, -122.4783] },
    {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: 1158.0, location: [45.8174, -84.7278] },
    {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span: 1067.0, location: [40.8517, -73.9527] },
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span: 853.44, location: [47.2690, -122.5517]}
]

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [ 
            {
                label: 'Bridge spans in meters',
                data: [],
                backgroundColor: ['red', 'blue', 'yellow', 'purple', 'green']
            } 
        ]
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

// Previous attempts below

// ['Verrazano-Narrows Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],
// [1298.4, 1280.2, 1158.0, 1067.0, 853.44],

// bridgeData.forEach(function(bridge) {
//     let bridgeName = []
//     bridgeName.push(bridge.name)
//     console.log(bridgeName)
// }),

// bridgeData.forEach(function(bridge) {
//     let bridgeSpan = []
//     bridgeSpan.push(bridge.span)
//     console.log(bridgeSpan)
// })

// for (choice in sodaData) {
//     let votes = sodaData[choice]

//     chart.data.labels.push(choice)
//     chart.datasets[0].data.push(votes)
// }

bridgeData.forEach(function(bridge) {
    let bridgeName = bridge.name
    // console.log(bridgeName)
    let bridgeSpan = bridge.span
    // console.log(bridgeSpan)
    chart.data.labels.push(bridgeName)
    //console.log(chart.data.datasets[0].data)
    chart.data.datasets[0].data.push(bridgeSpan)
    
    // Without this the bars will not show even if you put the data in
    // Remember to update 
    chart.update()
})