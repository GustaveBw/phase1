var boucle = parseInt(
  window.prompt(" veuillez inserer un nombre.")
);
while (isnan(boucle) || boucle >= 10 || boucle <= 0) {
  boucle = parseInt(
    window.prompt("ce n'est pas un nombre, veuillez en saisir un valide")
  );
}

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " est pair");
  } else {
    console.log(i + " est impair");
  }
}
