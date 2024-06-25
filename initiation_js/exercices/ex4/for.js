var nombres = [3, 5, 7, 2, 8, -1, 4, 10, 12];
var max = nombres[0]; // Initialisation du plus grand nombre

for (var nb = 0; nb < nombres.length; nb++) {
  // Correction de la condition de boucle
  console.log(nombres[nb] + "<br>"); // Affichage des éléments du tableau

  // Mise à jour du plus grand nombre
  if (nombres[nb] > max) {
    max = nombres[nb];
  }
}

console.log("Le plus grand nombre est : " + max); // Affichage du plus grand nombre
