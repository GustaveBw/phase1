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
