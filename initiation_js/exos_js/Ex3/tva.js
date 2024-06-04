var ht = parseInt(window.prompt("veuillez saisir le prix HT")); 

var tva = 0.2;
var ttc = ht + ht * tva; 
console.log(ttc); 

document.write(" Le prix TTC est de " + ttc); 