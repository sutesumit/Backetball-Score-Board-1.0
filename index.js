let homeScore = 0;
let guestScore = 0;

function homeScore1(){
    homeScore++
    document.getElementById("home_score").textContent = homeScore
}

function homeScore2(){
    homeScore+=2
    document.getElementById("home_score").textContent = homeScore
}

function homeScore3(){
    homeScore+=3
    document.getElementById("home_score").textContent = homeScore
}

function guestScore1(){
    guestScore++
    document.getElementById("guest_score").textContent = guestScore
}

function guestScore2(){
    guestScore+=2
    document.getElementById("guest_score").textContent = guestScore
}

function guestScore3(){
    guestScore+=3
    document.getElementById("guest_score").textContent = guestScore
}

function homePenalty(){
    homeScore-=1
    document.getElementById("home_score").textContent = homeScore
}

function guestPenalty(){
    guestScore-=1
    document.getElementById("guest_score").textContent = guestScore
}

function resetGame(){
    guestScore=0;
    document.getElementById("guest_score").textContent = guestScore
    homeScore=0;
    document.getElementById("home_score").textContent = homeScore
}