let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgco=document.querySelector(".msgco");
msgco.classList.add("hide");
let turnx=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnx=true;
    count=0;
    enableboxes();
    msgco.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnx){
            box.innerText="X";
            turnx=false;
        }
        else{
            box.innerText="O";
            turnx=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9&&!iswinner){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msg.innerText='game draw';
    msgco.classList.remove("hide");
    disableboxes();
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }};
    const enableboxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }};
        const showwin=()=>{
            msg.innerText='congratulations winner is X';
            msgco.classList.remove("hide");
            disableboxes();
        };
        const show=()=>{
            msg.innerText='congratulations winner is O';
            msgco.classList.remove("hide");
            disableboxes();
        };
        const checkwinner=()=>{
            for(let pattern of winpatterns){
                let p1=boxes[pattern[0]].innerText;
                let p2=boxes[pattern[1]].innerText;
                let p3=boxes[pattern[2]].innerText;
                    if(p1!=""&&p2!=""&&p3!=""){
                        if(p1===p2 && p2===p3){
                            if(p1==="X"){
                                showwin();
                            }
                            else{
                                show();
                            }
                            return true;
                     }
                    }
        }};
        resetb.addEventListener("click",resetgame);
