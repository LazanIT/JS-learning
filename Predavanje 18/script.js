// Klasa - CLASS
// Definicija necega :
/**
 * class -
 *  - Visina
 *  - Tezina
 *  - Ime
 *  - Prezime
 *
 *
 * object -
 *    - Svako od nas :
 *      - ime : Aleksa
 *      - prezime : Lazanski
 *
 *
 *  Klasa je definicija jedne osobe
 *  Svaka osoba ima osobine(karakteristike): ime, prezime, tezina, visina
 *
 *  Objekat je ta klasa, koja sadrzi karakteristike te osobe
 *
 *  Kada mi napravimo new Osoba, mi samim ti pravimo novi objekat
 */
// Imena klasa se uvek pisu velikim slovima
class Osoba {
  ime;
  prezime;
  tezina;
  visina;
  bojaOciju;
  pol;

  constructor(ime, prezime, pol) {
    // Kako bi sprecili da se neki podatak ne bude unesem, postavljamo jedan IF u kome proveravamo da li je neka od osobina undefined
    // Primer :
    if (
      typeof ime === "undefined" ||
      typeof prezime === "undefined" ||
      typeof pol === "undefined"
    ) {
      throw new Error("Svaka osobina jedne osobe mora biti unesena");
    }
    this.ime = ime;
    this.prezime = prezime;
    this.pol = pol;
  }

  sayHello = () => {
    if (this.pol === "Musko") {
      console.log(
        `Pozdrav ja se zovem ${this.ime} a prezivam ${this.prezime} i visok sam ${this.visina}`
      );
    } else {
      console.log(
        `Pozdrav ja se zovem ${this.ime} a prezivam ${this.prezime} i visoka sam ${this.visina}`
      );
    }
  };
}

let Petar = new Osoba("Petar", "Petric", "M");
Petar.tezina = 70;
Petar.visina = 189;
Petar.bojaOciju = "plava";
Petar.sayHello();

let Dunja = new Osoba("Dunja", "Mirosavljevic", "Z");
Dunja.visina = 170;
Dunja.tezina = 60;
Dunja.bojaOciju = "braon";
Dunja.sayHello();
