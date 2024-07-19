/*
JSON : JavaScript Object Notation
*/ 

const films = [
  {
    "id": 1,
    "titre": "Inception",
    "réalisateur": "Christopher Nolan",
    "année": "2010",
  },
    {
        "id": 2,
        "titre" : "Eternal Sunshine of the Spotless Mind",
        "réalisateur" : "Youssef Kahlo",
        "année" : "2004",
    },{
        "id": 3,
        "titre" : "Eternal Sunshine of the Spotless Mind",
        "réalisateur" : "Youssef Kahlo",
        "année" : "2004",
    },
 
 
];

let $ = document.createElement.bind(document); 


function actualiserFilms() {
    const tbody = document.querySelector("table>tbody"); 
    let html = ""; 
    films.forEach(function (film) {
       html += "<tr>"; 
       html += "<td>"+film.id+"</td>";
       html += "<td>"+ film.titre+"</td>"; 
        html += "<td>" + film.réalisateur + "</td>";  
         html += "<td>" + film.année+ "</td>"; 
       html += "<tr>"; 
    });

    tbody.innerHTML = html;
}

document
  .querySelector("#btActualiser")
  .addEventListener("click", actualiserFilms); 