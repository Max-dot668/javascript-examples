// Method 2
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World");   // () => its an arrow function

// Method 3: Event listeners are preferred method
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("Hello World");
});