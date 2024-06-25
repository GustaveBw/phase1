var mdp = prompt("Veuillez saisir votre mot de passe");
var real = "javascript";

while (mdp !== real) {
  alert("Et non, veuillez réessayer");
  mdp = prompt("Veuillez ressaisir votre mot de passe");
}

// Message de confirmation
alert("Mot de passe correct!");
