// Reference to the container div that already exists in HTML
const container = document.querySelector("#container");

// Create a new div and store it to the variable content
const content = document.createElement("div");
// Add a class and some text to the content
content.classList.add("content");
content.textContent = "This is the glorious text-content";

// Append that div to the container
container.appendChild(content);

/* EXERCISE 
 * Add the following elements to the container using ONLY JavaScript
 * and the DOM methods shown above
 * 
 * 1) a <p> with red text that says “Hey I’m red!”
 * 2) an <h3> with blue text that says “I’m a blue h3!”
 * 3) a <div> with a black border and pink background color with the following elements inside of it:
 *    - another <h1> that says “I’m in a div”
 *    - a <p> that says “ME TOO!”
 *    - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
 */

// 1) 
const redParagraph = document.createElement("p");
redParagraph.classList.add("redP");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

// 2)
const blueHeader3 = document.createElement("h3");
blueHeader3.classList.add("blueH3");
blueHeader3.style.color = "blue";
blueHeader3.textContent = "I'm a blue h3!";
container.appendChild(blueHeader3);

// 3) 
// black border and pink background color
const blackBorderDiv = document.createElement("div");
blackBorderDiv.classList.add("blackBorder");
blackBorderDiv.setAttribute("style", "background: pink; border: 2px solid black;");
container.appendChild(blackBorderDiv);

// <h1> inside blackBorderDiv container
const childHeader1 = document.createElement("h1");
childHeader1.classList.add("childH1");
childHeader1.textContent = "I'm in a div";
blackBorderDiv.appendChild(childHeader1);

// <p> inside blackBorderDiv container
const childParagraph = document.createElement("p");
childParagraph.classList.add("childP");
childParagraph.textContent = "ME TOO!";
blackBorderDiv.appendChild(childParagraph);