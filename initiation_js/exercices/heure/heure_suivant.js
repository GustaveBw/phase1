var heures = parseInt(prompt("donne moi l'heure"));
while (heures > 23 || heures < 0 || isNaN(heures)) {
  heures = parseInt(prompt("ceci n'est pas pas un message valide"));
}

var minutes = parseInt(prompt("donne moi la minute"));
while (minutes > 59 || minutes < 0 || isNaN(minutes)) {
  minutes = parseInt(prompt("ceci n'est pas pas une minute"));
}

var secondes = parseInt(prompt("donne moi la seconde"));
while (secondes > 59 || secondes < 0 || isNaN(secondes)) {
  secondes = parseInt(prompt("ceci n'est pas pas une seconde"));
}

document.write("Il est " + heures + ":" + minutes + ":" + secondes + ". <br>");

secondes++;

if (secondes == 60) {
  secondes = 0;
    minutes++;
    if (minutes == 60) {
        minutes = 0; 
        heures++; 
        if (heures == 24) {
            heures = 0;
        }
    }
}

document.write(
  "Il sera " + heures + ":" + minutes + ":" + secondes + " dans une seconde."
);

// function result(x, y, z) {
//     x = heures;
//     y = minutes;
//     z = secondes;

//     for (x = 0; x = 23; x )

//     return ();
// }
