function bonjour() {
    document.write("hello world!<br>"); 

}

document.write("<h1> Lest Fonctions</h1>"); 
// appel de la fonction bonjour
bonjour(); 
bonjour(); 

// declaration d'une fonction avec des arguments

function salut(prenom) {
    document.write("<p>Salut " + prenom + ", bienvenue."); 
}
salut(); 

// declaration d'un fonction avec plusieurs arguments 
// document.write(mot1 + " " + mot2 + " " + mot3);


function phrase(mot1, mot2, mot3) {
  document.write(mot1 + " " + mot2 + " " + mot3);
}



//EXO: utiliser la fonction phrase et les variable pour afficher "il est l'heure d'aller manger"

let fin = "d'aller manger";
let debut = " Il est";
let milieu = "l'heure";

phrase(debut, milieu, fin);


//EXO: appeler la fonction phrase pour afficher "on a faim",

 fin = "on ";
 debut = "a ";
 milieu = "faim!";


 
document.write(phrase(fin, debut, milieu)); 

function phrase2(mot1, mot2, mot3) {
    let str = mot1; 
    if (mot2 != undefined) {
        str = str + " " + mot2;
    } 
    if (mot3 != undefined) {
        // str = str + " " + mot3;  c'est similaire
     str += " " + mot3;
   } 
    document.write(str + "<br>");
}


//  Fonction qui retourne une valeur
 
function nombreAuCarre(nb) {
  return nb nb;
}
/*
    ● Pour qu'une fonction  retourne une valeur on utilise le mot-clé 'return'
    ● Après 'return' on peut mettre n'importe quelle expression 
    ● aucune instruction ne opeu être exécuté après l'instruction 'return'
    */

let resultat = nombreAuCarre(5);
document.write(" le carré de 7 est égal à " + nombreAuCarre(7)) + "<br>";

document.write("<p> Théorème de pythagore : </p>");
document.write(
  "Un triangle rectangle dont les côtés ont pour largeur, 2 et 5."
);
document.write("Le carré de l'hypothenuse de ce rectangle vaut");
document.write(nombreAuCarre(2) + nombreAuCarre(5));
document.write("<b>");
//EXO : 1- Afichez la liste des carrés des nombres de 1 à 100
//2-Dans la fonction nombreAuCarre, il faut vérifier que l'argument est bien un nombre.


































