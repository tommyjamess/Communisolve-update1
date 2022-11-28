let openMainCardMenu = document.querySelectorAll(".openMainCardMenu")
let mainCardMenuOuter = document.querySelectorAll(".mainCardMenuOuter")
let closeMenuCard = document.querySelectorAll(".closeMenuCard")
let mainCardContainer = document.querySelectorAll(".card")


openMainCardMenu.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.nextElementSibling.style.display = "block"
    })
    
})

closeMenuCard.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.parentElement.parentElement.parentElement.style.display = "none"
    })
})

// float button 
let hiddenFloatMenu = document.querySelector(".hiddenFloatMenu")
let floatingButton = document.querySelector(".floatingButton")


floatingButton.addEventListener("click", ()=> {
    if(hiddenFloatMenu.classList.contains("displayFloatingButton")){
        hiddenFloatMenu.classList.remove("displayFloatingButton")
    }else{
        hiddenFloatMenu.classList.add("displayFloatingButton")
    }
    
});