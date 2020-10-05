/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')

// Hide chart until data has been added
chartCanvas.style.display = 'none'

// TODO create chart object 
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // List of datasets
        datasets: [
            {
                // No data has been entered so it'll be an empty array
                data: [], 
                backgroundColor: []
            }
        ],
        labels: []
    },
    options: {}
})


// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like 
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

// Name added to the labels, amount added to the data
function addExpenseToChart(name, amount) {
    
    // Ensure chart is visible
    chartCanvas.style.display = "block"

    // TODO add expense to chart 
    // Refering to expenses chart .data .labels and then push the data onto labels array
    expenseChart.data.labels.push(name)
    // Looking for the data array that is within the dataSets array object 
    expenseChart.data.datasets[0].data.push(amount)
    // Ask the chart to update with the new data we call expense chart dot update

    // Represents how many colors we've used so far starting at 0 
    let colorCount = expenseChart.data.datasets[0].backgroundColor.length
    // Works fine with just the 6 colors with only colorCount won't cycle back around
    // Need to use modular operater which is % chartColors. This means chart colors divided by the length of chart colors
    // Modular operaters are like division but only give you the remainder back
    let color = chartColors[colorCount % chartColors.length]

    // Push our new color to the end of the of the background colors array
    expenseChart.data.datasets[0].backgroundColor.push(color)
    
    expenseChart.update()

}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value 
    let expenseAmount = expenseAmountInput.value 

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart 
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // TODO call function to update chart
    addExpenseToChart(expenseName, expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// TODO add event listener to click the Add Expense button when the enter key is pressed 
window.addEventListener('keyup', function() {
    if (event.keyCode == 13) {
        let inputElements = [expenseNameInput, expenseAmountInput, addExpenseButton]
        // If you have the focus on one of those elements
        if ( inputElements.includes(document.activeElement) ) {
            addExpenseButton.click() // click button
            expenseNameInput.focus() // move focus to expense name input, for convience of entering new expense
        }
    }
})

// Solved bug where dataSet was being called which autofilled btw and changed each instance of dataSet to datset. This calls the array we create