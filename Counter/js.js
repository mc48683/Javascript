const decrease = document.getElementById("btn")
const reset = document.getElementById("btn1")
const increase = document.getElementById("btn2")
const counter=document.querySelector(".number")

let num=0
decrease.addEventListener("click",function(){
    num-=1;
    counter.textContent=num;
    changeColor(num);
});

increase.addEventListener("click",function(){
    num+=1;
    counter.textContent=num;
    changeColor(num)
});

reset.addEventListener("click",function(){
    num=0;
    counter.textContent=num;
    changeColor(num)
});

function changeColor(num){
    if (num<0){
        counter.style.color="red";
    }
    else if (num>0){
        counter.style.color="green";
    }
    else{
        counter.style.color="white";
    }
}