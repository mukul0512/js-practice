/*

* Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.

*/

let toggleBtn = document.querySelector("#toggleBtn");
let body = document.querySelector("body");

let currentMode = "light";

const toggleHandler = () => {
    if (currentMode === "light") {
        currentMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        // document.querySelector("body").classList.add("dark");
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currentMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        // document.querySelector("body").classList.add("light");
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
}

toggleBtn.addEventListener("click", toggleHandler);