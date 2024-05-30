// Déclarer deux variables n1: 10 et n2: 5;
// utiliser les 4 opérateurs arithmetiques(+ - * /) et verifier les rulstas a partir de la console
// afficher le type de chaque resultat sur la console (terminal)


var n1 = 10; 
var n2 = 5; 

var result = n1 + n2; 
console.log(result);
console.log( typeof result);

var result = n1 - n2;
console.log(result);
console.log(typeof result);

var result = n1 * n2;
console.log(result);
console.log(typeof result);

var result = n1 / n2;
console.log(result);
console.log(typeof result);

// // modulo
// le modulo retourne le reste d'une Division
// modulo de nb1 % nb2 avec l'operateur %
result = n1 % n2; 
console.log(result);

var n3 = 100; 
var n4 = 17;
var resModulo = n3 % n4; 
console.log(resModulo);

// afficher le tecte suivant sur la page du navigateur:

var text1 = "Le reste de la division de "; 
var text2 = " par "; 
var text3 = " est egal a : ";

var ecrit = text1 + n3 + text2 + n4 + text3 + resModulo;
document.write(ecrit);