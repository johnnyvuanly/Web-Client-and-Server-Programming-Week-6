// Tip Clara uses the line below to see if this page is connected to HTML before typing in a lot of code
// alert("Is this working?")

let canvas = document.querySelector('#canvas')
// Then we create a context
let context = canvas.getContext('2d')

// Reference to the inputs
// Make sure to grab the id done forget the #
let input = document.querySelector('#image-text')
// Make sure the image is loaded before user can add text
input.disable = true
// First time gave an error because we can't set to null because input
// didnt have a #
// input.disable = true

// Now begin drawing the image
let image = new Image()
image.src='leaf edited.jpg'

// Image has to load with 'load' then draw it to the canvas 
image.addEventListener('load', function() {
    context.drawImage(image, 0, 0)
    // Turns off users ability to NOT edit because image has loaded
    input.disable = false
})

// Add event listener, listen for the input
input.addEventListener('input', function() {
    // this means the thing that made the event
    let text = this.value
    context.fillStyle = 'white'
    context.font = '40px Courier'
    // redraw the same image because when you delete in the input text doesn't go away
    // This redraws the image over where the old text would've been 
    context.drawImage(image, 0, 0)
    context.fillText(text, 30, 100)
})
