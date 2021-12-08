const main= document.querySelector("main")
let names=[ "😃 ","😄 ","😁 ","😆 ","😅 ","😂 ","🤣  ","😊 ","😇 ","🙂 ","🙃 ","😉 ","😍 ","🥰 ","😘 ","😗 ","😙 ","😝 " ]
let countOnclick=0
let countSucsess=0

const resetCard=(element)=>{
        countOnclick=0
        element.classList.remove("cardOnclick")
}

const handleCard=(event)=>{
    
    //*Fluxo de validação dos valores
    if(countOnclick==2   && !event.target.classList.contains("cardOnclick")){
        let elementsActive =   document.querySelectorAll(".cardOnclick")
        let notSucsess=[]

         elementsActive.forEach(card=>{
            if(!card.classList.contains("sucess")){
                notSucsess.push(card)
            }
        })

        const elementObj={
            element1:notSucsess[0].innerHTML,
            element2:notSucsess[1].innerHTML
         }
         console.log(elementsActive)
             if(elementObj.element1===elementObj.element2){
                 elementsActive.forEach(e=>{e.classList.add("sucess")})
                 countSucsess++
             }
             notSucsess.forEach(element=>resetCard(element))
    }

    //*Adicionando a classe de card ativo 
    if(!event.target.classList.contains("cardOnclick")){
        event.target.classList.add("cardOnclick")
        countOnclick++
    }
    if(countSucsess==18){
        alert("parabens")
    }
}

// *criando cards

for(let i=0;i<36;i++){
    let index=i<18 ? i: i-18
    const card= document.createElement("div")
    card.className="card"
    card.innerHTML=names[index]
    card.style.order=Math.floor(Math.random()*i)

    card.addEventListener("click",e=>handleCard(e ))
    
    main.appendChild(card)
}

