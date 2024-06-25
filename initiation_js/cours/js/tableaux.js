// var fruits;
// fruits = ["Apple", "Banana", "orange"];
// var tailletab = fruits.length;

// console.log(tailletab);
// console.log(fruits[0]);
// console.log(fruits[tailletab - 1]);

// var couleurs;
// couleurs = ["bleu", "blanc", "rouge"];
// var essais = couleurs.length;

// console.log(couleurs[essais - 1]);
// console.log(couleurs[0]);


// for (var yo = 0; yo < essais.length; yo++){
//     console.log(couleurs[yo]);
// }

// for (var i = 10; i >= 0; i--){
//     document.write(i + "<br>");
// }

var couleurs = ["rouge", "jaune", "bleu", "vert", "orange"];
for (var i = couleurs.lenght; i >= 0; --i) {
  console.log(couleurs[i]);
}

// 1- A partir d'une boucle "for", afficher les chiffres de 10 à 0 sur la page du navigateur
// 2- Les chiffres doivent aller à la ligne à chaque exécution de la boucle "utilisation de la bvalise <br>"

for (var i = 10; i >= 0; i--) {
  document.write(i + "<br>");
}


fruits = ["Apple", "Banana"];
//Ajouter à la fin du tableau
var newLength = fruits.push("Orange");

console.log(fruits);
console.log(newLength);


//Ajouter à la fin du tableau
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

console.log(fruits);
console.log(newLength);
//Supprimer le dernier élément du tableau
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
console.log(fruits);
console.log(newLength);

//Supprimer le premier élément du tableau
var first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];
console.log(fruits);
console.log(newLength);

//Ajouter au début du tableau
var newLength = fruits.unshift("Strawberry"); // ajoute au début
// ["Strawberry", "Banana"];
console.log(fruits);
console.log(newLength);


