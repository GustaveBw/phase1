var jour = prompt("quel jour est it ?"); 
var result = false; 
do {
    if (jour === "lundi" || jour === "Lundi") {
        alert("I hate mondays");
        result = true; 
    } else if (jour === "mardi" || jour === "Mardi") {
        alert("le jour ou c'est vraiment dur");
    } else if (jour === "mercredi" || jour === "Mercredi") {
        alert("allleezz christina Ricci !!");
    } else if (jour === "jeudi" || jour === "Jeudi") {
        alert(" on y est presque !!!!");
    } else if (jour === "vendredi" || jour === "Vendredi") {
        alert("it's friday, stop working..." + "Start drinking.");
    } else if (jour === "samedi" || jour === "Samedi") {
        alert("nooon, c'est presque la fin  = =°°°");
    } else if (jour === "Dimanche" || jour === "dimanche") {
        alert("Le jour du Seigneur");
    } else {
        jour = window.prompt("je ne comprend pas cela, recommencons... on est quel jour ?");
    }
} while (result == false) {
    jour = prompt("quel jour est it ?");
}
    



