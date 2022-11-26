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

// mainCardContainer.forEach((item) =>{
//     item.addEventListener("click", ()=> {
//         mainCardMenuOuter.forEach((thisItem) => {
//             if(thisItem.style.display == "block"){
//                 thisItem.style.display ="none"
//             }
//         })
//     })
// })

// function closeMainCardMenu() {
//     mainCardMenuOuter.forEach((item) => {
//         if(item.style.display == "block"){
//             item.style.display ="none"
//         }
//     })
// }
