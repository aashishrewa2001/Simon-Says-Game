
let gameSeq=[];
let userSeq=[];
let highestScrore=[];

let started = false;
let level = 0;
let btns=["yellow","red","blue","green"];

let h2 =document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started==false){
        started=true;

        levelUp();
    }
   
});

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250) 
}

function levelUp(){
    userSeq=[];
    level++;  
    h2.innerText=`Level ${level}`;
    let randomIndex = Math.floor(Math.random()*4);
    let randColor = btns[randomIndex];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    btnflash(randBtn);   
}

function checkAns(indx){
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML=`Game over! Your score was ${level} </br> Press any key to start`;
        highestScrore.unshift(level)
        let hs=0;
        for(h of highestScrore){
            if(h>hs){
                hs=h
            }
        }
        h3.innerText=`Highest score of this game is : ${hs}`;
        reset();
    }
} 
  

function btnClick(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    
    checkAns(userSeq.length - 1);  
}    

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener("click",btnClick)
}

function reset(){
    started =false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}
