// Calculatrice

// Initialiser les variables pour stocker les nombres et l'opérateur.
// Prendre l'entrée de l'utilisateur pour le premier nombre.
// Prendre l'entrée de l'utilisateur pour l'opérateur (+, -, *, /).
// Prendre l'entrée de l'utilisateur pour le second nombre.
// Selon l'opérateur, effectuer l'opération mathématique appropriée.
// Afficher le résultat.


// var nombre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let x = parseInt(prompt(" premier nombre :")); 
let y = prompt(" operateurs (* - + /) :"); 
let z = parseInt(prompt(" deuxieme nombre :")); 


if (y == "+") {
    console.log(x+ " + " + z +" est egal a "+(x + z));  
}else if (y == "-") {
    console.log(x+ " - " + z  +" est egal a " +(x - z));   
}else
if (y == "*") {
    console.log(x+" * "+ z  + " est egal a " + (x * z));   
    
} else if (y == "/") {
    
    if (z !== 0) {
        console.log(x + " / " + z + " est egal a " + (x / z));
    } else {
        alert("on ne peut diviser par 0"); 
    }    
}else{
    alert("ca n'est pas comforme aux opérateurs"); 
}
