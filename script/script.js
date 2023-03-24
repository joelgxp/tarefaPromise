const btn = document.getElementById("#botao")
const resultado = document.getElementById("#div-result")
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

btn.addEventListener("click", () => {

    setTimeout(() => {

        gif.src = "./img/confused.gif"
        resultado.appendChild(gif)

        gerarResultado()
            .then(() => {
                acertou.src = "./img/acertou.gif"
                resultado.appendChild(acertou)
            })
            .catch(() => {
                errou.src = "./img/errou.gif"
                resultado.appendChild(errou)
            })


        resultado.removeChild(gif)

    }, 3000)
})
