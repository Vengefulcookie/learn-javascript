let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
let emoji = "👋"
welcomeEl.innerText = welcomeEl.innerText + emoji // or you can write it like this welcomeEl.innerText += emoji
