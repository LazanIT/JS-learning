// console.log("test 123");

let inputs = document.querySelectorAll("input");
let errors = {
  ime_prezime: [],
  korisnicko_ime: [],
  email: [],
  lozinka: [],
  ponovi_lozinku: [],
};

inputs.forEach((element) => {
  //   console.log(element);
  element.addEventListener("change", (e) => {
    let currentInput = e.target;
    let inputValue = currentInput.value;
    let inputName = currentInput.getAttribute("name");

    if (inputValue.lenght > 4) {
      console.log("top");
    } else {
      console.log("notop");
    }
  });
});
