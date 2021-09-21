'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
let niveau = 0;
do {
    niveau =parseInt(prompt("Dragon slayer : Choisissez le niveau : 1 - facile  2 - normal  3 - difficile"));
}while(niveau < 1 || niveau >4 || isNaN(niveau));
    console.log(niveau);
const mode = ['Indefini', 'Facile', 'Normal', 'Difficile'];
let pVieDragon = 0;
let pVieJoueur = 0;


/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
function getRandomArbitrary(min,max)
{                                      //Fonction nb arbitraire lancer des dés.
    return Math.floor(Math.random()*((max+1)-min)+min);
}

function lancerDes($nombreDes,$nombreFaces)
{
    let lancer = 0;
    for (let $i=1; $i <= $nombreDes; $i++){
        lancer = getRandomArbitrary(1,$nombreFaces) + lancer;
    }
    return lancer;
}




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
switch (niveau){
    case 1 :  // niveau facile dragon 5D10 - player 10D10
    pVieDragon = lancerDes(5,10);
    pVieJoueur = lancerDes(10,10);
    break;
    case 2 :  // niveau normal 
    pVieDragon = lancerDes(10,10) +100;
    pVieJoueur = lancerDes(10,10) + 100;
    break;
    case 3 :  // niveau difficile
    pVieDragon = lancerDes(10,10) +100;
    pVieJoueur = lancerDes(7,10) + 100;
}
let pointstartDragon = pVieDragon.toString();
let pointstartJoueur = pVieJoueur.toString();
document.write("..................................Mode : " + mode[niveau]);
    
    let startDragon = document.getElementById('pointsDragon');
    let startJoueur = document.getElementById('pointsJoueur');
    startDragon.innerHTML = pointstartDragon + " PV";
    startJoueur.innerHTML = pointstartJoueur + " PV";

    // startDragon.textContent =
    console.log(pointstartDragon);