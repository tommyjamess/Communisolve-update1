let solutionLink = document.querySelector(".solutionLink")
let resourceLink = document.querySelector(".resourceLink")
let solutions = document.querySelector(".solutions")
let resources = document.querySelector(".resources")
let menuList = document.querySelectorAll(".menu-list li")
let menu = document.querySelector(".menu-list")
let menuIcon = document.querySelector(".hamburger")


solutionLink.addEventListener("click", () => {
    closeOtherSubmenu()
    if(solutions.classList.contains("displaySubmenu")){
        solutions.classList.remove("displaySubmenu")
    }else{
        solutions.classList.add("displaySubmenu")
    }
})

resourceLink.addEventListener("click", () => {
    if(resources.classList.contains("displaySubmenu")){
        resources.classList.remove("displaySubmenu")
    }else{
        resources.classList.add("displaySubmenu")
    }
})

function closeOtherSubmenu(){
    menuList.forEach((item) => {
        if(item.classList.contains("displaySubmenu")){
            item.classList.remove("displaySubmenu")
        }
    })
}

menuIcon.addEventListener("click", ()=> {
    
    if(!(menu.classList.contains("displayMenuList"))){
        menu.classList.add("displayMenuList")
        menuIcon.style.background = "white"
        menuIcon.style.color = "black"
    }else{
        menu.classList.remove("displayMenuList")
        menuIcon.style.background = "none"
        menuIcon.style.color = "white"
    }
})

// testimonial carousel 

let cardItems = document.querySelectorAll(".cardItem")
let nextBtn = document.querySelector(".nextBtn")
let prevBtn = document.querySelector(".prevBtn")
// let testimonyCard = document.querySelectorAll(".testimony-card")




// let cardItem = document.querySelectorAll(".cardItem")


nextBtn.addEventListener("click", () => {
    cardItems.forEach((cardItem, index) =>{
        if(cardItem.classList.contains("testimonyOnDisplay"))
            cardItem.nextElementSibling.classList.add("testimonyOnDisplay")
            cardItem.classList.remove("testimonyOnDisplay")
    }) 
})

prevBtn.addEventListener("click", () => {
    cardItems.forEach((cardItem, index) =>{
        if(cardItem.classList.contains("testimonyOnDisplay"))
            cardItem.previousElementSibling.classList.add("testimonyOnDisplay")
            cardItem.classList.remove("testimonyOnDisplay")
   })
})







