const coins = document.querySelector(".coins");
const tapBtn = document.querySelector(".tap-btn");
let n = 10000;
let S = 0
for(let i=1;i<=1;i++){
    S++
    tapBtn.addEventListener("click",()=>{ 
        coins.innerHTML=`${S++}`
    });
}

tapBtn.addEventListener("mousedown",()=>{ 
    tapBtn.style.scale=`${1.05}`
});
tapBtn.addEventListener("mouseup",()=>{ 
    tapBtn.style.scale=`${1}`
});
