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
      errors[inputName] = ["Polje ne moze imati manje od 5 karaktera"];
    }

    populateErrors(errors);
  });
});

const populateErrors = (errors) => {
  for (let element of document.querySelectorAll("ul")) {
    element.remove();
  }

  for (let key of Object.keys(errors)) {
    let input = document.querySelector(`input[name="${key}"]`);
    let parentElement = input.parentElement;
    let errorsElement = document.createElement("ul");
    parentElement.appendChild(errorsElement);

    errors[key].forEach((error) => {
      let li = document.createElement("li");
      li.style.color = "black";
      li.style.fontWeight = "600";
      li.innerText = error;
      errorsElement.appendChild(li);
    });
  }
};
