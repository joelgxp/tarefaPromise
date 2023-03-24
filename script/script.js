const btn = document.getElementById("botao")
const resultado = document.getElementById("div-result")
const gif = document.createElement("img")

function gerarResultado() {
    return new Promise((resolve, reject) => {
        const getRandom = Math.random().toPrecision(1)
        if (getRandom <= 0.5) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

btn.addEventListener("click", () => {
    gerarResultado().then()
.catch
    gif.src = "./img/confused.gif"
    resultado.appendChild(gif)


    setTimeout(() => {
        resultado.removeChild(gif)
        if (result == true) {
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
