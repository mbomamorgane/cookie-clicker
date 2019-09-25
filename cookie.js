var score=0;
function cliker(){
    score+=1;
    document.getElementById("score").innerHTML=score;
}


var autoclic = 0;
function autoclicker(){
    if(score<500){
        score - 0;
    } else{
        scoreclic = score - 500;
        score = scoreclic + window.setInterval(caclicdur,1);
    }
    
    document.getElementById("barrescore").innerHTML=score;
    
}
function caclicdur(){
    score+=1;
    document.getElementById("barrescore").innerHTML=score;
}
