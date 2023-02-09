// Hamburgaer 
let menu = document.querySelector(".hiddenMenuOuter")
let menuIcon = document.querySelectorAll(".menuIcon")
let container = document.querySelector(".page")
let headContainer = document.querySelector(".header-page")



function openMenu(){
    menu.style.transform = "translateX(0%)"
}


container.addEventListener("click", ()=>{
    menu.style.transform = "translateX(250px)"
})


// card menu 
let card = document.querySelectorAll(".card")
let cardMenu = document.querySelectorAll(".cardMenu")
let cardMenuIcon = document.querySelectorAll(".card-menu--icon")
let closeCardMenu = document.querySelectorAll(".close-card-menu")



cardMenuIcon.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        icon.nextElementSibling.style.display = "block";
    })
})

closeCardMenu.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.parentElement.parentElement.style.display = "none";
    })
})



// action menu
let headerAvater = document.querySelector(".headerAvater")
let userActionMenu = document.querySelector(".userActionMenu")

headerAvater.addEventListener("click", ()=>{
    if(!(userActionMenu.classList.contains("displayUserAction"))){
        userActionMenu.classList.add("displayUserAction")
        userActionMenu.classList.remove("hideUserAction")
    }else{
        userActionMenu.classList.remove("displayUserAction")
        userActionMenu.classList.add("hideUserAction")
    }
})