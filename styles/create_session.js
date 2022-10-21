let choices = document.querySelectorAll(".choices")
let choiceValue  = document.querySelector(".choicesOutput")

let ask = document.querySelector(".Ask")
let createUi = document.querySelector(".create-session")
let eixtCreate = document.querySelector(".exitCreate")


choices.forEach(function(choice){
    choice.addEventListener("click", (e)=>{
        let interest  =  choiceValue.children[1]
        let industry  =  choiceValue.children[0]
        if (choice.classList.contains("interest")){
            interest.style.display = "block"
            industry.style.display = "none"

        } else {
            industry.style.display = "block"
            interest.style.display = "none"
        }
    })
})



ask.addEventListener("click", ()=>{
    createUi.style.display = "flex"
})
eixtCreate.addEventListener("click", ()=>{
    createUi.style.display = "none"
})