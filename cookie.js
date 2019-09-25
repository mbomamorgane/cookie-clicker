let multibutton = document.getElementById("multiplier");
let score = 0;
let price = 50;
let multiplicateur = 1;
let multiplierCost = 20;


function cliker(){
    score+=1;
    document.getElementById("barrescore").innerHTML=score;
}

function displayMultiplier(multiplicateur) {
    for (var i= 1; i <= multiplicateur; i++) {
      score++;
    }
    document.getElementById("barrescore").innerHTML=score+displayMultiplier;
  }

