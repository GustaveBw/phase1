window.addEventListener("load", function () {
    document.getElementById("resultats").innerHTML = "formulaire de connexion";
    let inputs = document.getElementsByTagName("input"); 
    for (let i = 0; i < inputs.length; i++){
        inputs[i].style.backgroundColor = " #bf80ff"; 
    }
    this.document.querySelectorAll("input").forEach(function (elementInput) {
        elementInput.style.border = "4px solid green"
    })
})