const form = document.querySelector("form"); 
const input = document.querySelector("input[name='nombre']"); 
const affichage = document.querySelector("#affichage"); 
let nbTentatives = 0; 

let proposition; 
let nbAtrouver = aleatoire(1, 10); 
console.log(nbAtrouver, ); 

form.addEventListener("submit", function (event) {
    /*event.preventDefault() annule le comportement par défaut prevue par le navigateur pour l'évenement event: 
    -par exemple le comportement par defaut de l'evenement submit est d'evoyer les données du formulaire. 
    -pour l'evenement clic d'une balise a, le comportement par defaut est la redirection vers l'url dans href. */ 
    event.preventDefault; 
    proposition = input.value;
    if (isNaN(proposition)|| (proposition < min || proposition > max )) {
        affichage.innerHTML = "❗ tu dois taper un nombre ❗"; 
    } else {
        nbTentatives++;
        if (proposition == nbAtrouver) {
            affichage.innerHTML = " tu as trouvé le nombre <strong>" + nbAtrouver + "</strong> ! ✅";
            affichage.innerHTML += " apres " + nbTentatives + "tentatives";
            
            document.querySelector("#rejouer").addEventListener("click", function (e) {
            location.reload();
}





        } else {
            affichage.innerHTML = " tu as tapé+ " proposition + "raté, essaye encore...";
            
        }
    }; 

    input.value = "";
});







// let min = 0;
// let max = 10;
// let randomNb = Math.floor(Math.random() * (max - min + 1)) + min;
// let recherche = document.addEventListener("#recherche").value;
// console.log(recherche);

// while (recherche !== randomNb) {
//   if (recherche < min || recherche > max || isNaN(recherche)) {
//     recherche = parseInt(
//       prompt(
//         "C'est en dehors de la demande. Réessaie en entrant un nombre entre 0 et 10: "
//       )
//     );
//   } else if (recherche < randomNb) {
//     recherche = parseInt(prompt("C'est un peu plus haut, réessaie:"));
//   } else if (recherche > randomNb) {
//     recherche = parseInt(prompt("C'est un peu plus bas, réessaie:"));
//   }
// }

// alert(" tu l'as trouvé !! bravo");
