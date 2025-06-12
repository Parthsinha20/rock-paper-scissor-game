let score=0;
let compscore=0;

let btn = document.querySelectorAll(".choice");
console.log(btn);

const win=document.querySelector(".head");
console.log(win);

const clr=document.querySelector(".heading2");

let comput=()=>{
    let comp=["rock","scissor","paper"];
    const random=Math.floor(Math.random()*3);
    return comp[random];

}

const scores=document.querySelector(".score");
console.log(scores);
const score1=document.querySelector(".score1");
console.log(score1);

let showwin=(userwin ,choice,computerchoice)=>{
    if(userwin==true){
        score++;
        console.log("userwin");
        scores.innerText=score;
        win.innerText=`you won! ${choice} beats ${computerchoice}`;
        clr.style.background=" green";
    }
    else{
        compscore++;
        win.innerText=`computer win! ${computerchoice} beats ${choice}`;
        score1.innerText=compscore;
        clr.style.background=" red";
        }
}



btn.forEach((el) => {
    el.addEventListener("click", () => {
        const choice=el.getAttribute("id");
        console.log(choice);
        let computerchoice=comput();
        console.log(computerchoice);



        if(choice===computerchoice){
            console.log("draw")
            win.innerText="match is draw";
            clr.style.background=" yellow";
        }
        else{
            let userwin=true;
            if(choice==="rock"){
                userwin=computerchoice==="paper"? false :true;
            }
            else if(choice==="paper"){
                userwin=computerchoice==="scissor"? false:true;
            }
            else{
                userwin=computerchoice==="rock"?false:true;
            }
            showwin(userwin , choice,computerchoice);
        }
    });
});

let reset=document.querySelector("#Reset");
console.log(reset);

reset.addEventListener("click",()=>{
    console.log("hii");
    score=0;
    compscore=0;
    scores.innerText=0;
    score1.innerText=0;
    win.innerText="let play the game!!";
    clr.style.background=" rgb(14, 95, 14)";
})