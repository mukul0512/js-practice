// Fetch API
const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.breeds[0].description);
    factPara.innerText = data.breeds[0].description;
}
// getFacts();
btn.addEventListener("click", getFacts);

// --------------------------------------------------------------------------------

// using promise chaining
// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factPara.innerText = data.breeds[0].description;
//         });
// }
// btn.addEventListener("click", getFacts);

// -------------------------------------------------------------------------------------------
// Request and response 
