// function tournezManeges() {
    
//     var nbTours = parseInt(window.prompt(" veuillez saisir le nb de tours, de 1 a 10."))
//     while (isnan(nbTours) || nbTours >= 10 || nbTours <=  0) {
//         nbTours = parseInt(window.prompt("ce n'est pas un nombre, veuillez en saisir un valide"));
//     }
    
    
// for (var manege = 1; manege <= question ; manege++){
//     document.write("C'est le tour de manege n°" + manege + "<br>");
// }

// }

// tournezManeges();

// // var question = parseInt(prompt("combien de tours le manege doit il appliquer ? "));

// // for (var manege = 1; manege <= question ; manege++){
// //     document.write("C'est le tour de manege n°" + manege + "<br>");
// // }


var nbTours = parseInt(window.prompt(" veuillez saisir le nb de tours, de 1 a 10."))
while (isnan(nbTours) || nbTours >= 10 || nbTours <= 0) {
    nbTours = parseInt(window.prompt("ce n'est pas un nombre, veuillez en saisir un valide"))
}


function tournezManegesm(param) {

    compteur = 1; 
    while (compteur <= param) {
        document.write(" c'est le tour de manege n " + compteur + "<br>"); 
        compteur++; 
    }

}
tournezManegesm(); 



