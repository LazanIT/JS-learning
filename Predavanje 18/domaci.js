/**
 * Domaci :
 *  Napravite klasu " Vozilo "
 *     - Boja
 *     - Vrsta (Vrsta moze biti samo : "automobil", "letelica" ili "plovilo")
 *
 *  Napravite klasu " Automobil "
 *     - Marka
 *     - Model
 *     - Broj vrata ( Broj vrata moze biti samo 3 ili 5)
 *     - Gorivo (Dizel, Benzin, Metan)
 *
 *  BONUS DOMACI : Marka moze biti Audi, BMW, Mercedes
 *  Model moze biti:
 *      - Ako je AUDI: A4, A6
 *      - Ako je Mercedes: S-class, SLS, G-class
 *      - Ako je BMW :  M5, M3, X1
 */

class Vozilo {
  boja;
  vrsta;

  // Staticne varijable
  // Za razliku od obicnih varijabli one mogu da se pozivaju bez da se napravi objekat i pisu se uvek VELIKIM slovima
  // Primer :

  static VRSTA_VOZILA = ["automobil", "plovilo", "letelica "];

  constructor(vrsta, boja) {
    if (typeof vrsta === "undefined" || typeof boja === "undefined") {
      alert("Podaci moraju biti prosledjeni");
    }

    // Optimizacija koda i provera, da li postoji da vrsta vozila u statickoj varijabli
    if (!Vozilo.VRSTA_VOZILA.includes(vrsta)) {
      throw new Error("Vozilo mora biti automobil, letelica ili plovilo");
    }
    this.vrsta = vrsta;
    this.boja = boja;
  }
}

class Automobil {
  marka;
  model;
  brojVrata;
  gorivo;

  static VRSTA_GORIVA = ["benzin", "dizel", "metan", "gas"];
  static BROJ_VRATA = [3, 5];

  constructor(marka, model, brojVrata, gorivo) {
    if (!Automobil.BROJ_VRATA.includes(brojVrata)) {
      throw new Error("Broj vrata moze biti samo 3 ili 5");
    }

    if (!Automobil.VRSTA_GORIVA.includes(gorivo)) {
      throw new Error("Gorivo moze biti benzin, dizel ili metan");
    }

    this.gorivo = gorivo;
    this.brojVrata = brojVrata;
    this.marka = marka;
    this.model = model;
  }
}

let audi = new Vozilo("automobil", "zuta");
let auto = new Automobil("Audi", "A4", 3, "benzin");

console.log(Vozilo.VRSTA_VOZILA); // Iz klase VOZILO izvuci mi vrste vozila
