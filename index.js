"use strict"

const btn = document.querySelector("button")

window.addEventListener("load", animationStart);

function animationStart(){
console.log(animationStart)
    btn.classList.add("shrink")
document.addEventListener("mousemove", endAnimation);
}

function endAnimation(){
    document.removeEventListener("mousemove", endAnimation)
    btn.classList.remove("shrink")
    console.log(endAnimation)
btn.addEventListener("click", animationStart)
}