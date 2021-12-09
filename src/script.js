const main = document.querySelector("main")
let names = ["😃 ", "😄 ", "😁 ", "😆 ", "😅 ", "😂 ", "🤣  ", "😊 ", "😇 ", "🙂 ", "🙃 ", "😉 ", "😍 ", "🥰 ", "😘 ", "😗 ", "😙 ", "😝 "]
let countOnclick = 0
let countSucsess = 0
let isRunning=false

const resetCard = (element) => {
    countOnclick = 0
    element.classList.remove("cardOnclick")
}


const validateValues = (event) => {
    //*Fluxo de validação dos valores
    if (countOnclick == 2 && event.target.classList.contains("cardOnclick")) {
        let elementsActive = document.querySelectorAll(".cardOnclick")
        let notSucsess = []

        elementsActive.forEach(card => {
            if (!card.classList.contains("sucess")) {
                notSucsess.push(card)
            }
        })
        //?verificar se os valores sao iguais
setTimeout(()=>{  
    if (notSucsess[0].innerHTML === notSucsess[1].innerHTML) {
        elementsActive.forEach(e => { e.classList.add("sucess") })
        countSucsess++

    }
    notSucsess.forEach(element => resetCard(element))
    isRunning=false 
},600)
    }
    if(countOnclick<2){
        setTimeout(()=>{
            isRunning=false 
        },200)
    }
}


const handleCard = (event) => {
    //*Adicionando a classe de card ativo 
    if (!event.target.classList.contains("cardOnclick")) {
        event.target.classList.add("cardOnclick")
        countOnclick++
    }
    validateValues(event)
    //*Fluxo de sucesso
    if (countSucsess == 18 && countOnclick == 0) {
        alert("parabens")
    }
 
}
// *criando cards

for (let i = 0; i < 36; i++) {
    let index = i < 18 ? i : i - 18
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = names[index]
    card.style.order = Math.floor(Math.random() * i)

    card.addEventListener("click", e => {
        if (!e.target.classList.contains("sucess") && !isRunning) {
            isRunning=true
            handleCard(e)
        }
    })

    main.appendChild(card)
}

