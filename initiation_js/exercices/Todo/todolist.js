// To-do List

// Initialiser un tableau pour stocker les tâches.
// Prendre l'entrée de l'utilisateur pour ajouter une tâche.
// Ajouter la tâche au tableau.
// Afficher la liste des tâches.
// Permettre de marquer les tâches comme terminées.


// let tabl = [nettoyer, balayer, astiquer, epousetter];

// let tachePlus = prompt("quelles taches sont a ajouter ?");


 let prixProduit = parseInt(prompt(" quel est le prix du produit ?"));

function tva() {
    let tva = prixProduit * .2; 
    return document.write("La taxe du produit est de" + tva +" euros."); 
}
tva(); 
