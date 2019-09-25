var score = 0;
var multiplicateur = 1;
var prixMultiplicateur=10;
var prixMultiplicateur2=15;
function cliker() {
    var audio = new Audio("rire.mp3");
    audio.play();
    score += multiplicateur;
    document.getElementById("barrescore").innerHTML = score;
}
//Bonus 30secondes

var bonus = document.getElementById("Imagebonus"); // recuperation de l'id Imagebonus dans la variable bonus 
var time = 6;
var conteur = document.getElementById("conteur") // recuperer l'id conteur pour le mettre dans la variable conteur
bonus.addEventListener("click",function(){ // ajout de l'event click a la variable "bonus" ()
multiplicateur=multiplicateur*2;
if (score >= prixMultiplicateur){
    score=score-prixMultiplicateur;
    document.getElementById("barrescore").innerHTML = score;
    let interval= setInterval(function() { // initialiser l'intervale
     // clic vaut 2
    conteur.innerHTML="Temps restant :"+(time-1); // ecriture du texte dans l'id conteur en html grace a inner
    time-=1; // decrementation du temps par 1
    if(time==0){
        clearInterval(interval); // annule l'intervale une fois le timer terminer 
        multiplicateur=1; // time terminer le clic vaut 1
        conteur.innerHTML=""; // remplace le conteur par rien ("")
        time=6;
    }
},1000); // 1000 miliseconde = 1 seconde

}})

function multiplierpar2(){
    if (score >= prixMultiplicateur2){ // verifie que le score est plus grand ou egale au prix
        multiplicateur=multiplicateur*2; // alors multiplicateur x2
        score-= prixMultiplicateur2; // soustrait le prix par rapport au score 
        document.getElementById("barrescore").innerHTML = score; // affiche nouveau score 
    }
    
}





