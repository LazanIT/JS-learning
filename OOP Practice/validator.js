class Validator {
  constructor(config) {
    this.elementsConfig = config;
    this.errors = {};

    this.generateErrorObject();

    this.inputListener();
  }

  generalErrorObject() {
    for (let field in this.elementsConfig) {
      this.errors[field] = [];
    }
  }

  inputListener() {
    let inputSelector = this.elementsConfig;

    for (let field in inputSelector) {
      let selector = `input[name=${field}]`;
      let element = document.querySelector(selector);

      element.addEventListener("input", this.validate.bind(this));
    }
  }

  validate(e) {
    let elementFields = this.elementsConfig;

    let field = e.target;

    let fieldName = field.getAttribute("name");

    let fieldValue = field.value;

    this.errors[fieldName] = [];

    if (elementFields[fieldName].required) {
      if (fieldValue === "") {
        this.errors[fieldName].push("Polje je prazno");
      }
    }
    if (elementFields.email) {
      if (!this.validateEmail(fieldValue)) {
        this.errors[fieldName].push("Neispravna email adresa");
      }
    }

    if (
      fieldValue.length < elementFields[fieldName].minlength ||
      fieldValue.length > elementFields[fieldName].maxlength
    ) {
      this.errors[fieldName].push(
        `Polje mora imati minimalno ${elementFields[fieldName].minlength} i maksimalno ${elementFields[fieldName].maxlength}`
      );
    }
  }

  validateEmail(email) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        myForm.emailAddr.value
      )
    ) {
      return true;
    }
    return false;
  }
}
