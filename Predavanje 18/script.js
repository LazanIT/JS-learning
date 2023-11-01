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
}

let Petar = new Osoba();
Petar.ime = "Petar";
Petar.prezime = "Petric";
Petar.tezina = 70;
Petar.visina = 189;
bojaOciju = "plava";
pol = "Musko";

console.log(`Pozdrav ja se zovem ${Petar.ime} i prezivam ${Petar.prezime}`);
