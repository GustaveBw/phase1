// Générateur de nombres aléatoires

// Initialiser les variables pour les limites min et max.
// Prendre l'entrée de l'utilisateur pour les valeurs min et max.
// Générer un nombre aléatoire entre min et max.
// Afficher le nombre aléatoire.

alert("nombres aleatoires");
let min = parseInt(prompt("veuillez entrer une valeur minimale (jusqu'a 0"));
let max = parseInt(
  prompt("veuillez entrer une valeur maximale ( jusqu'a 2000")
);

while (max > 2000 || min < 0 || min >= max) {
  alert(" trop haut par rapport aux demandes ");
  min = parseInt(prompt("veuillez entrer une valeur minimale"));
  max = parseInt(prompt("veuillez entrer une valeur maximale"));
}

let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("le nombre aleatoire est " + randomInt);
