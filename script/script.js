const btn = document.getElementById("botao")
const resultado = document.getElementById("div-result")
const gif = document.createElement("img")
const acertou = document.createElement("img")
const errou = document.createElement("img")

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


function mostrarResultado() {

    gerarResultado()
        .then(() => {
            acertou.src = "./img/acertou.gif"
            resultado.appendChild(acertou)
            console.log('acertou')
        })
        .catch(() => {
            errou.src = "./img/errou.gif"
            resultado.appendChild(errou)
        })

        .finally(() => {
            setTimeout(() => {
                resultado.removeChild(acertou)
                resultado.removeChild(errou)
            }, 3000)
        })



}

btn.addEventListener("click", mostrarResultado)

