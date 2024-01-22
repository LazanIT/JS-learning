// class Osoba {
//   constructor(first_name, last_name, phone) {
//     this.first_name = first_name;
//     this.last_name = last_name;
//     this.phone = phone;
//   }

//   getNameAndPhone() {
//     console.log(`${this.first_name} - ${this.phone}`);
//   }
// }
// let osoba1 = new Osoba("Nik0", "Nikolic", "321312");
// let osoba2 = new Osoba("Nikaaaa", "Nikaaaalaaa", "3212");

// osoba1.getNameAndPhone();
// osoba2.getNameAndPhone();

let config = {
  ime_prezime: {
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  korisnicko_ime: {
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },
  broj_telefona: {
    minlength: 9,
    maxlength: 13,
  },
  lozinka: {
    required: true,
    minlength: 7,
    maxlength: 30,
    matching: "ponovi_lozinku",
  },
  ponovi_lozinku: {
    required: true,
    minlength: 7,
    maxlength: 30,
    matching: "lozinka",
  },
};

let validator = new Validator();
