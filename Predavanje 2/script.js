// Indexi =             0           1      2
var proizvodi = ["Maticna ploca", "RAM", "SSD"];

console.log(proizvodi[1]);

proizvodi[3] = "HDD";
console.log(proizvodi);

proizvodi.push("GPU", "Floppy disk", "Disketa", "CPU");
console.log(proizvodi);

// Tezi nacin da se zameni vrednost u nizu
var index = proizvodi.indexOf(proizvodi[1]);
proizvodi.splice(index, 1, "DVD");
console.log(proizvodi);
// Laksi nacin
proizvodi[0] = "Tastatura";
console.log(proizvodi);
