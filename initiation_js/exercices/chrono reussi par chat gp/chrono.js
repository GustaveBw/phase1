// Chronomètre

// Initialiser les variables pour stocker le temps écoulé.
// Commencer le chronomètre au clic d'un bouton.
// Arrêter le chronomètre au clic d'un autre bouton.
// Afficher le temps écoulé en secondes.




  // Initialisation des variables pour le temps de départ, le temps écoulé, et l'intervalle de temps.
    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    // Fonction pour convertir le temps en millisecondes en une chaîne de caractères au format HH:MM:SS.
    function timeToString(time) {
        let diffInHrs = time / 3600000; // Convertir le temps de millisecondes en heures.
        let hh = Math.floor(diffInHrs); // Extraire les heures entières.

        let diffInMin = (diffInHrs - hh) * 60; // Convertir le reste en minutes.
        let mm = Math.floor(diffInMin); // Extraire les minutes entières.

        let diffInSec = (diffInMin - mm) * 60; // Convertir le reste en secondes.
        let ss = Math.floor(diffInSec); // Extraire les secondes entières.

        // Formater les heures, minutes, et secondes pour avoir toujours deux chiffres.
        let formattedHH = hh.toString().padStart(2, "0");
        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");

        return `${formattedHH}:${formattedMM}:${formattedSS}`; // Renvoyer la chaîne de caractères formattée.
    }

    // Fonction pour démarrer le chronomètre.
    function start() {
        startTime = Date.now() - elapsedTime; // Définir l'heure de début en tenant compte du temps déjà écoulé.
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime; // Mettre à jour le temps écoulé.
            document.getElementById("display").innerHTML = timeToString(elapsedTime); // Afficher le temps écoulé.
        }, 1000); // Mettre à jour l'affichage chaque seconde.
        showButton("PAUSE"); // Afficher le bouton pause.
    }

    // Fonction pour arrêter le chronomètre.
    function stop() {
        clearInterval(timerInterval); // Arrêter l'intervalle de temps.
        showButton("START"); // Afficher le bouton démarrer.
    }

    // Fonction pour réinitialiser le chronomètre.
    function reset() {
        clearInterval(timerInterval); // Arrêter l'intervalle de temps.
        document.getElementById("display").innerHTML = "00:00:00"; // Remettre l'affichage à zéro.
        elapsedTime = 0; // Remettre le temps écoulé à zéro.
        showButton("START"); // Afficher le bouton démarrer.
    }

    // Fonction pour afficher le bon bouton (Démarrer ou Pause)
    function showButton(buttonKey) {
        const buttonToShow = buttonKey === "START" ? startBtn : stopBtn; // Choisir quel bouton montrer.
        const buttonToHide = buttonKey === "START" ? stopBtn : startBtn; // Choisir quel bouton cacher.
        buttonToShow.style.display = "block"; // Montrer le bouton choisi.
        buttonToHide.style.display = "none"; // Cacher l'autre bouton.
    }

    // Ajout des écouteurs d'événements aux boutons pour gérer les clics.
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");

    startBtn.addEventListener("click", start); // Écouteur pour démarrer le chronomètre.
    stopBtn.addEventListener("click", stop); // Écouteur pour arrêter le chronomètre.
    resetBtn.addEventListener("click", reset); // Écouteur pour réinitialiser le chronomètre.