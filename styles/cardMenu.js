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
let hiddenFloatMenu = document.querySelectorAll(".hiddenFloatMenu")
let floatingButton = document.querySelectorAll(".floatingButton")


floatingButton.forEach((item, index)=>{
    item.addEventListener("click", ()=> {
        showFloatMenu(index) 
    });
})

function showFloatMenu(index){
    hiddenFloatMenu.forEach((item, floatIndex) => {
        if(index == floatIndex){
            if(item.classList.contains("displayFloatingButton")){
                item.classList.remove("displayFloatingButton")
            }else{
                item.classList.add("displayFloatingButton")
            }
        }
    })
}
