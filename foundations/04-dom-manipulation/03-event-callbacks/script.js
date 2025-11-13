// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);

/*
 * Accessing information about the event by passing 
 * a parameter to the function that we are calling
 */

// The e parameter contains an object that references the event itself
btn.addEventListener("click", function(e) {
    console.log(e);
});

// Different properties and methods of the event object in callbacks
btn.addEventListener("click", function(e) {
    console.log(e.target);
}); 

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

/* 
 * Get a NodeList of all of the items matching a specific selector
 * with querySelectorAll('selector')
 */

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
