"use strict";
let btn = document.querySelector(".btn");
function somar() {
    let input1 = document.getElementById("numero1");
    let n1 = Number(input1.value);
    let input2 = document.getElementById("numero2");
    let n2 = Number(input2.value);
    let p = document.querySelector(".resultado");
    p.innerText = `${n1 + n2}`;
}
btn.addEventListener("click", somar);
