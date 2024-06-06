// for (var i = 1; i <= 10; i += 2 ){
//     document.write("<p> Instruction executée:" + i + "</p>");
// }

// for (var j = 2; j <= 20; j++){
//     document.write("resultats de l'incrémentation: " + j + " ." +"<br>");
// }

// for (var e = 69; e >= 11; e--) {
//     document.write("resultats de l'action: " + e + ";" + "<br>");

//     for(var done =document.write("resultats de l'action: " + e + ";" + "<br>"); done )
// }

// var tps = 0;

// for (var ajout = 1000; ajout <= 2000; ajout += 50) {
//   document.write(
//     "vous avez sur votre compte epargne: " + ajout + " ." + "<br>"
//   );
//   tps++;
// }
// document.write("nombres de mois appliquées : " + tps + ".");

/*
    EXERCICE
    On utilise le IF pour vérifier l'âge de l'internaute.
    => tant que l'utilisateur ne rentre pas un nombre entre 3 et 120 lui redemander son age
        => s'il est majeur je lui souhaite la bienvenue
        => s'il est mineur je [1]lui signale : Bienvenue, vous êtes majeur et [2]le renvoie vers un autre site : document.location.href = "http://nom de domaine d'un site"

*/

// Je demande à l'utilisateur de saisir son âge et le convertit en entier
var age = parseInt(window.prompt("veuillez saisir votre age"));

// Boucle qui continue de demander l'âge tant que l'âge saisi est inférieur ou égal à 3 ou supérieur ou égal à 120
while (age <= 3 || age >= 120) {
  // Si l'âge saisi est incorrect, redemande à l'utilisateur de saisir un âge valide
  age = parseInt(prompt("age incorrect, veuillez saisir votre age"));
}

// Vérifie si l'âge est compris entre 4 et 17 inclus
if (age >= 4 && age <= 17) {
  // Si l'utilisateur est mineur, affiche une alerte et redirige vers un autre site
  alert("Désolé, tu est mineur !!");
  document.location.href = "https://www.ratatype.com/";
  // Si l'âge est supérieur ou égal à 18
} else {
  // Si l'utilisateur est majeur, affiche une alerte de bienvenue
  alert("Welcome to Jurassic Park");
  document.location.href = "https://www.jurassicworld.com/";
}

// en Algoritmique
// 1- Je déclare la majorité légale "majoriteFR" avec la valeur 18
// 2- Je demande l'age de l'utilisateur
// 3- Je déclare une variable "age" et j'affecte le la réponse de l'utilisateur à cette variable
// 4- Je convertie la réponse de l'utilisateur, qui est en chaîne de caractère en type "number", en utilisant la fonction "parseInt" par défaut de JS, car la boîte de dialogue du formulaire nous retourne toujours un type de chaîne de caractère, même si la valeur saisie est un chiffre
// 6- J'utilise la boucle "while" et j'affecte une condition afin de vérifier si la valeur de la réponse et (inférieur ou égale à 3) ou bien (suppérieur ou égale à 120). Tant que l'utilisateur ne saisie pas une valeur entre 4 et 119, la boîte de dialogue s'affichera
// 7- Dans le cas contraire et en dehors de la boucle, je vérifie si l'age est suppérieur ou égale à 18 et inférieur à 120 : dans ce cas j'aurai le message :  "Bienvenue, vous êtes majeur" sinon : j'affiche une boîte de dialogue "Allez voir un autre super site..." et la redirection vers mon site préféré : "https://fr.boohoo.com/"
