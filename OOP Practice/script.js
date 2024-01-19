class Osoba {
  constructor(first_name, last_name, phone) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
  }

  getNameAndPhone() {
    console.log(`${this.first_name} - ${this.phone}`);
  }
}
let osoba1 = new Osoba("Nik0", "Nikolic", "321312");
let osoba2 = new Osoba("Nikaaaa", "Nikaaaalaaa", "3212");

osoba1.getNameAndPhone();
osoba2.getNameAndPhone();
