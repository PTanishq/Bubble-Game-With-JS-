var userInput = prompt("hey, Tanishq this side. Please Enter your name")
console.log(alert("hello " + userInput + "Let's Begin. Please click on 'OK'"))
function makeBubble(){
    var clutter = "";

for(i = 1; i<=140 ;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;

}

var timer = 60;
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
    
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`YOO! Great ${userInput}<h1> GAME OVER</h1> Please Check Your Score. Thank You`;
        }
    }, 1000);
}

var rnom = 0;
function getNewHit(){
    rnom = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rnom;

}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// jispe click kroge woh element par event raise hoga aur evnt listner na milne par event elemenrt ke parent par listener dundega, wha bhi na milne pe parent ke p[arent pe listner dhundega, just like a tree
//its event bubbling

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === rnom){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
makeBubble();
runtimer();
getNewHit();