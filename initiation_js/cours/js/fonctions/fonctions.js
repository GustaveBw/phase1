// Fonctions;
// Pour profiter de la fonctionnalitée d'un fonction dans n'importe quel langage de programmation, il est indispensable de suivre les étapes suivantes:  
// 1 - implanter ou declarer une fonction 
// 2 - Executer la fonction 

// Types de fonction; 
// Nou avoNs 4 types de fonctions:
// 1-une fonction qui ne prend pas de parametres et n'a pas de valeur de retour; 
// 1-une fonction qui prend des parametres et n'a pas de valeur de retour; 
// 1-une fonction qui prend des parametres et  n'a pas de valeur de retour; 
// 1-une fonction qui prend des parametres et a des valeurs de retour; 



affichernbmois();
//  Une fonction sans parametres et sans valeur de retour
function affichernbmois() {
    var nbmois = Number(prompt("veuillez saisir un nombre entre 1 et 12... "));

while (isNaN(nbmois) || nbmois > 12 || nbmois < 1) {
  alert("error");
  nbmois = Number(prompt("veuillez ressaisir une valeur correcte..."));
}

if (
  nbmois == 1 ||
  nbmois == 3 ||
  nbmois == 5 ||
  nbmois == 7 ||
  nbmois == 8 ||
  nbmois == 10 ||
  nbmois == 12
) {
  document.write("le mois numero " + nbmois + " fait 31 jours.");
} else if (nbmois == 2) {
  document.write("le mois numero " + nbmois + " fait 28 jours.");
} else {
  document.write("le mois numero " + nbmois + " fait 30 jours.");
    }
    

// Le moy clé pour la valeur de retour d'une fonction est 'return ': 
//     return nbmois; 
}