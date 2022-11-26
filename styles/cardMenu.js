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

window.onscroll = function() {scrollFunctionInnerCard()};

let itemTop = mainCardMenuOuter.offsetTop;

function scrollFunctionInnerCard() {
    mainCardMenuOuter.forEach((item)=> {
        item.style.display = "none";
    })
}