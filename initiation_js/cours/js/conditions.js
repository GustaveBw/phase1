// var nom = "Gustave";

// // alert(nom);



// // var result = prompt("quel est ton nom, animal?");

// // document.write("<h1>"+result+"</h1>") ;


// Variable type boolen : true or false

// var unBooleenTrue = true; 
// var unBooleenFalse = false;
// var num1 = 50; 
// var num2 = 5;
// var num3 = 10;
// var num4 = 12.50; 
// var num5 = num1 / num3; 


// if (unBooleenTrue) {
//     document.write(nom + "<br>");
// }

// if (unBooleenFalse) {
//     document.write("c'est faux gros");
// }
// if ((num1 / num3) != num4) {
//     document.write("le résultat de la division " + num1 + " par " + num3 + " est de " + num2);
// }
// else {
//     document.write("la valeur de la variable num4 est egale a " + num4 + " :)");
// }

// var nom = prompt("Quel est ton nom ?");
// alert("hello " + nom + "!");


// var age = prompt("Quel âge as-tu ?");
// if (age >= 18) {
//     alert("Bienvenue !!");
//     document.write("Welcome to Jurassic Park, "+ nom);
// } else {
//   alert("Oulah, trop jeune !! Va sur ce site plutôt : http://www.darty.com/");
//   window.open("http://www.darty.com/");
// }






// var nom = prompt("Quel est ton nom ?");
// alert("Hello " + nom + "!");

// var essais = 0;

// while (essais < 5) {
//   var age = prompt("Quel âge as-tu ?");

//   if (age >= 18) {
//     alert("Bienvenue !!");
//     document.write("Welcome to Jurassic Park, " + nom);
//     break; // Sortir de la boucle si l'âge est supérieur ou égal à 18
//   } else {
//     alert("Oulah, trop jeune !! Va sur ce site plutôt : http://www.darty.com/");
//     window.open("http://www.darty.com/", "_blank"); // Ouvre le lien dans un nouvel onglet
//     essais++; // Incrémenter le nombre d'essais infructueux
//   }
// }

// if (essais === 5) {
//     alert("Nombre maximum d'essais atteint. Veuillez réessayer plus tard.");
//     document.write("Nombre maximum d'essais atteint. Veuillez réessayer plus tard.");
// }


var prenom = 'Michel'; 

prenomlogin = prompt('quel est ton nom?'); 


if (prenomlogin = prenom) {

    alert('bonjour !'+ prenom +);

} else {
    alert('ta mere, frere, reesaye');
    
} 
