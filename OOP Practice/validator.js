class Validator {
  constructor(config) {
    this.elementsConfig = config;
    this.errors = {};

    this.generateErrorObject();
  }

  generalErrorObject() {
    for (let field in this.elementsConfig) {
      this.errors[field] = [];
    }
  }
}
