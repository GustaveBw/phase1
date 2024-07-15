window.addEventListener("load", function () {
  document.getElementById("resultats").innerHTML = "formulaire de connexion";
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.backgroundColor = " #bf80ff";
  }
  this.document.querySelectorAll("input").forEach(function (elementInput) {
    elementInput.style.border = "4px solid green";
  });

  document
    .querySelector("form")
    .addEventListener("submit", function (eventSubmit) {
      /* La méthode preventDefault() qui existe pour tout les objets de type evenements, permet d'annuler le comportement par defaut d'un evenement.
        Par exemple le comportement par défaut de l'évènement "submit" d'une balise <form> est d'envoyer le formulaire vers l'URL defini  dans 'action' . Donc si aucun URL n'est défini dans action, la page est rechargée. 
        
        autre exemple: le comportement par défait de l'evenement "click" sur une balise <a> est de rediriger vers la page définie dans 'href'*/

      eventSubmit.preventDefault();
      let texte = "";
      document.querySelectorAll("input").forEach(function (inputElement) {
        texte += inputElement.name + " = " + inputElement.value + "<br>";
      });
        
        console.log(texte); 
        document.querySelector("#resultats").innerHTML = texte; 
    });
});
