// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let purchaseError = document.getElementById("error")
let message = "Something went wrong, please try again"

function purchaseShoes() {
purchaseError.innerText = message
}

