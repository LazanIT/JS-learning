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
  }
}
