let payer = document.querySelector("#submit")
let billet10 = 0;
let billet5 = 0;
let piece1 = 0;



payer.addEventListener('click', event => {
    let payment = document.querySelector("#paiement").value;
    let total = document.querySelector("#total").value;
    //on calcule la somme à rendre
    let somme = payment - total;
    document.querySelector('#rendu').textContent = `Votre monnaie est de : ${somme} euros `;
    //on calcule le nombre de billet de 10
    let sommeTemporaire = somme % 10;

    billet10 = Math.floor(somme / 10);

    if (sommeTemporaire >= 5) {
        billet5 = Math.floor(sommeTemporaire / 5);
        sommeTemporaire = sommeTemporaire % 5;
        piece1 = sommeTemporaire;
    } else if (sommeTemporaire < 5) {
        piece1 = sommeTemporaire
    }

    billet10 != 0 ? document.getElementById("billets10").textContent = `Nombre de billets de 10 € :  ${billet10}` + " " + "billets" : ' ';
    billet5 != 0 ? document.querySelector("#billets5").textContent = `Nombre de billets de 5 € :  ${billet5}` + " " + "billets" : ' ';
    piece1 != 0 ? document.querySelector("#pieces").textContent = `Nombre de pièces de 1 € :  ${piece1}` + " " + "pièces" : ' ';


})