let btn: HTMLButtonElement = document.querySelector(".btn") as HTMLButtonElement;

function somar(){
    let input1:HTMLInputElement = document.getElementById("numero1") as HTMLInputElement
    let n1:number = Number(input1.value)

    let input2:HTMLInputElement = document.getElementById("numero2") as HTMLInputElement;
    let n2:number = Number(input2.value);
    
    let p:HTMLParagraphElement = document.querySelector(".resultado") as HTMLParagraphElement

    p.innerText = `${n1+n2}`
}
btn.addEventListener("click", somar)

