// let nombreEntiers = [];
// let max = 100;
// for (let i = 0; i < max; i++) {
//     nombreEntiers.push(i);
//     }
//     console.log(nombreEntiers);







// const carresNbEntiers = [];
// for(let i = 2; i <= 100; i += 2){
// 	carresNbEntiers.push( [ i, i*i ] );
// }




let pp = t[0]; 
let t = [4, 15, 1, -6, 89]; 
for (i = 1; i < t.length; i++){

    if(t[i]>pp)
}




















let a = parseInt(prompt("ecrit le premier nb"));  
let b = parseInt(prompt("ecrit le deuxieme nb"));  

function superieur(a, b) {
    return a > b; 
}

console.log(superieur(a, b)); 

let nb1=15, nb2 =7;
if (superieur(nb1, nb2)) {
    
}
console.log(superieur(nb1, nb2));


let couples = [
    [15, 7], 
    [22, 9], 
    [5, 56],
    [-33, 8]
]


for (let i = 0; i < couples.length; i++){
    nb1 = couples[i][0]; 
    nb2 = couples[i][1]; 
    if (superieur(nb1, nb2)) {
        document.write(nb1 + "est superieur a " + nb2);
    } else {
        document.write(nb1 + "est inferieur a " + nb2);
    }
    document.write("<br>"); 
    
}

function plusGrand(a, b) {
    if (a > b) {
        return a; 
    }
    return b; 
}

