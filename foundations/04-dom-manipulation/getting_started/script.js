// Reference to the container div that already exists in HTML
const container = document.querySelector("#container");

// Create a new div and store it to the variable content
const content = document.createElement("div");
// Add a class and some text to the content
content.classList.add("content");
content.textContent = "This is the glorious text-content";

// Append that div to the container
container.appendChild(content);