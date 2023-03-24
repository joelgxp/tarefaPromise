const btn = document.getElementById("botao")
const resultado = document.getElementById("div-result")
const gif = document.createElement("img")

function restultado() {
    const getRandom = Math.random().toPrecision(1)

if (getRandom) {
    if (getRandom < 0.5) {        
        result = "acertou"
    } else {
        result = "errou"
    }
}
}
    
    btn.addEventListener("click", () => {
        restultado()
        gif.src = "./img/confused.gif"
        resultado.appendChild(gif)

        
        setTimeout(() => {
            resultado.removeChild(gif)
            if(result == 'acertou') {
                acertou.src = "./img/acertou.gif"
                restultado.appendChild(acertou)
                console.log("voce ganhou")
            } else {
                errou.src = "./img/errou.gif"
                restultado.appendChild(errou)
                console.log("voce perdeu")
            }
            
        }, 3000)
    })
