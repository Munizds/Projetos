//DOM

const uni1 = document.querySelector("#u1")
const uni2 = document.querySelector("#u2")
const uni3 = document.querySelector("#u3")
const corte = document.querySelector("#min")
const btn = document.querySelector("#btn")
const media = document.querySelector("#media")

//Eventos

btn.addEventListener('click',calcular)


//funções


function calcular(){
    let b7 = corte.value
    let total = (Number(uni1.value) + Number(uni2.value) + Number(uni3.value)) / 3;
    if(total >= b7){
        media.textContent = "Sua Média foi " + total.toFixed(2) + " você foi aprovado";
        media.style.color = "blue"
    }
    if(total < b7){
        media.textContent = "Sua Média foi " + total.toFixed(2) + " você foi reprovado";
        media.style.color = "red"
    }
}
