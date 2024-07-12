// Jeu de devinette

// Générer un nombre aléatoire entre 1 et 100.
// Demander à l'utilisateur de deviner le nombre.
// Comparer la devinette de l'utilisateur avec le nombre généré.
// Afficher si la devinette est trop haute, trop basse ou correcte.
// Répéter jusqu'à ce que l'utilisateur devine correctement.

let min = 0;
let max = 100;
let randomNb = Math.floor(Math.random() * (max - min + 1)) + min;

let recherche = parseInt(prompt("trouve le nombre aléatoire entre 0 et 100"));

// while (recherche > 100 || recherche < 0) {
//   alert(" tu sort des clous la...");
//   recherche = parseInt(prompt("trouve le nombre entre 0 et 100"));
// }
while (recherche != randomNb) {
  if (recherche < randomNb) {
    recherche = parseInt(prompt("c'est un peu plus haut réessaie"));
  } else if (recherche > randomNb) {
    recherche = parseInt(prompt("c'est un peu plus bas, réessaie"));
  } 
}
 alert(" tu l'as trouvé !! felicitations ♥");
  