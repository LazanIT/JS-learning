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

  constructor(vrsta, boja) {
    if (typeof vrsta === "undefined" || typeof boja === "undefined") {
      alert("Podaci moraju biti prosledjeni");
    }

    if (vrsta === "automobil" || vrsta === "letelica" || vrsta === "plovilo") {
      this.vrsta = vrsta;
    } else {
      throw new Error("Vozilo mora biti automobil, letelica ili plovilo");
    }

    this.boja = boja;
  }
}

class Automobil {
  marka;
  model;
  brojVrata;
  gorivo;

  constructor(brojVrata, gorivo) {
    if (brojVrata === 3 || 5) {
      this.brojVrata = brojVrata;
    } else {
      throw new Error("Broj vrata moze biti samo 3 ili 5");
    }
  }
}

let audi = new Vozilo("automobil", "zuta");
