var moyenne = parseInt(prompt("saississez la moyenne du candidat")); 

if (moyenne < 0 || moyenne>20){
    document.write("invalid error");
} else if (moyenne <10 ) {
    document.write("le candidat est recalé"); 
} else if (moyenne >= 10 && moyenne < 12) {
    document.write("Le candidat est bien recu"); 
} else if (moyenne >= 12) {
    document.write("le candidat est recu avec les honneurs");
}