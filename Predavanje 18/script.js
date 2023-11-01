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

  sayHello = () => {
    if (this.pol === "Musko") {
      console.log(
        `Pozdrav ja se zovem ${this.ime} i prezivam ${this.prezime} i visok sam ${this.visina}`
      );
    } else {
      console.log(
        `Pozdrav ja se zovem ${this.ime} i prezivam ${this.prezime} i visoka sam ${this.visina}`
      );
    }
  };
}

let Petar = new Osoba();
Petar.ime = "Petar";
Petar.prezime = "Petric";
Petar.tezina = 70;
Petar.visina = 189;
Petar.bojaOciju = "plava";
Petar.pol = "Musko";
Petar.sayHello();

let Dunja = new Osoba();
Dunja.ime = "Dunja";
Dunja.prezime = "Mirosavljevic";
Dunja.visina = 170;
Dunja.tezina = 60;
Dunja.bojaOciju = "braon";
Dunja.sayHello();
