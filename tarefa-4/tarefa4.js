const texto = document.getElementById("text");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function gerarCorAleatoria() {
    const codigoCor = "0123456789ABCDEF";
    let cor = "#";
    for (let x = 0 ; x < 6; x++){
        cor += codigoCor[Math.floor(Math.random()*16)];
    }
    return cor;
}

btn1.addEventListener("click", () => {
    const corAleatoria =  gerarCorAleatoria();
    texto.style.backgroundColor = corAleatoria;
});

btn2.addEventListener("click", () => {
    const corAleatoria =  gerarCorAleatoria();
    texto.style.color = corAleatoria;
});

btn3.addEventListener("click", () => {
    texto.style.backgroundColor = "transparent";
    texto.style.color = "black";
})