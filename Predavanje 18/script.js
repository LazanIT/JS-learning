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
 */
// Imena klasa se uvek pisu velikim slovima
class Osoba {
  ime;
  prezime;
  tezina;
  visina;
}

let Petar = new Osoba();
Petar.ime = "Petar";
Petar.prezime = "Petric";
Petar.tezina = 70;
Petar.visina = 189;

console.log(Petar);
