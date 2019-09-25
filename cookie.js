var score = 0;
var multiplicateur = 1;
var prixMultiplicateur = 10;
var prixMultiplicateur2 = 50;
document.getElementById("txtBoost").innerHTML = "cost:" + prixMultiplicateur;
document.getElementById("txtAuto").innerHTML = "cost:" + "500";
document.getElementById("txtBonus").innerHTML = "cost:" + "50"

function cliker() {
  var audio = new Audio("Crunch.mp3");
  audio.play();
  
  score += multiplicateur;
  document.getElementById("score").innerHTML = score;
}
//Bonus 30secondes

var bonus = document.getElementById("Imagebonus"); // recuperation de l'id Imagebonus dans la variable bonus 
var time = 6;
var conteur = document.getElementById("conteur") // recuperer l'id conteur pour le mettre dans la variable conteur
bonus.addEventListener("click", function () { // ajout de l'event click a la variable "bonus" ()
  
  if (score >= prixMultiplicateur2) {
    multiplicateur = multiplicateur * 2;
    score = score - prixMultiplicateur2;
    document.getElementById("score").innerHTML = score;
    let interval = setInterval(function () { // initialiser l'intervale
      // clic vaut 2
      conteur.innerHTML = "Temps restant :" + (time - 1); // ecriture du texte dans l'id conteur en html grace a inner
      time -= 1; // decrementation du temps par 1
      if (time == 0) {
        clearInterval(interval); // annule l'intervale une fois le timer terminer 
        multiplicateur = 1; // time terminer le clic vaut 1
        conteur.innerHTML = ""; // remplace le conteur par rien ("")
        time = 6;
      }
    }, 1000); // 1000 miliseconde = 1 seconde
    
  } else {
    score = score - 0
  }
})

function multiplierpar2() {
  if (score >= prixMultiplicateur2) { // verifie que le score est plus grand ou egale au prix
    multiplicateur = multiplicateur * 2; // alors multiplicateur x2
    score -= prixMultiplicateur2; // soustrait le prix par rapport au score 
    document.getElementById("score").innerHTML = score; // affiche nouveau score 
    document.getElementById("txtBoost").innerHTML = "cost:" + prixMultiplicateur2;
  }

}

var autoclic = 0;
function autoclicker() {
  if (score < 500) {
    score - 0;
  } else {
    scoreclic = score - 500;
    score = scoreclic + window.setInterval(caclicdur, 1000);
  }

  document.getElementById("score").innerHTML = score;

}
function caclicdur() {
  score += 1;
  document.getElementById("score").innerHTML = score;
}
