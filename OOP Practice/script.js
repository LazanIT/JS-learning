function Osoba(first_name, last_name, phone) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.phone = phone;

  this.getNameAndPhone = function () {
    console.log(`${first_name} - ${phone}`);
  };
}

let osoba1 = new Osoba("Niko", "Nikolic", "+381");
let osoba2 = new Osoba("Ivan", "Ivanovic", "+387");

osoba1.getNameAndPhone();
osoba2.getNameAndPhone();

// Treci nacin

const Osoba5 = {
  first_name: "Niko",
  getNameAndPhone: function () {
    console.log(`${this.first_name} - ${this.phone}`);
  },
};

let niko = Object.create(Osoba5);
niko.phone = "1234421";
niko.getNameAndPhone();

let ivan = Object.create(Osoba5);
ivan.phone = "321321321";
ivan.first_name = "Ivan";
ivan.getNameAndPhone();


// Best way

class