let boxes=document.querySelectorAll(".box");
let head=document.querySelector(".TTT");
let item=document.querySelector(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newbtn");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame=()=>{
    
    turnO=true;
    enableBoxes();
    msgCont.classList.add("hide");
    count=0;
    
}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        count++;
        if(turnO){
            box.style.color="green";
            //box.style.backgroundColor="lightgreen";
            //box.style.opacity="0.5";
            box.classList.add("green");
            box.innerText="O";
            turnO=false;
        }
        else{
            box.style.color="red";
            //box.style.backgroundColor="lightcoral";
            //box.style.opacity="0.5";
            box.classList.add('red');
            box.innerText="X";
            turnO=true;            
        }
        box.classList.add('remHover');
        box.disabled=true;
        checkWinner();
        return count;
    })
})


const draw=()=>{
    msg.innerText="It's a draw!"
    msgCont.classList.remove("hide");
    disableBoxes();
    count=0;
}


const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for (let box of boxes){
        box.classList.remove('remHover');
        box.classList.remove('green');
        box.classList.remove('red');
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is "${winner}"`;
    msgCont.classList.remove("hide");
    disableBoxes();
    count=0;
}



const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                console.log(typeof(pos1Val));
                //console.log(count);
                showWinner(pos1Val);
            }

        }
        
    }
    console.log(count);
    if(count===9){
        draw();
    }
    
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);