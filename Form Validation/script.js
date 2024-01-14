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

    console.log(currentInput);
  });
});
