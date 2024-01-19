const Osoba = {
  first_name: "niko",
  last_name: "Nikolic",
  phone: "+381",
  getNameAndPhone: function () {
    console.log(`${this.first_name} - ${this.phone}`);
  },
};

const Osoba2 = {
  first_name: "ivan",
  last_name: "ivanovic",
  phone: "+381",
  getNameAndPhone: function () {
    console.log(`${this.first_name} - ${this.phone}`);
  },
};

Osoba.getNameAndPhone();
Osoba2.getNameAndPhone();
