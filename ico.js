// let dolor = 1; // 83.268
let pft = 0.03;


let inputDolor = document.querySelector("#dolor");
let inputPFT = document.querySelector("#PFT");

let dolorValue;
let PFTValue;

inputDolor.addEventListener("input", () => {

      dolorValue = inputDolor.value;

    inputPFT.value = dolorValue / pft;
      PFTValue = inputPFT.value
    inputPFT.innerHTML = PFTValue;
})



const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    console.log("Pay with Dolor: " + dolorValue);
    console.log("You will get PFT: " + PFTValue);
})