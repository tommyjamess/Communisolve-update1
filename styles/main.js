
let filters = document.querySelectorAll(".filterTwo");
let allfilter = document.querySelector(".allfilter");
let activefilter = document.querySelector(".activefilter");
let startingfilter = document.querySelector(".startingfilter")

let sessionFilter = document.querySelector(".filter")
let sessionFilterOuter = document.querySelector(".filter-outer")
let cardcorrection = document.querySelector("column")

let sideCardFixed = document.querySelector(".sideCardFixed")
let rightCardFixed = document.querySelector(".rightCardFixed")
let rightCardOuter = document.querySelector(".right-card--outer")
let sideCardTwoFixed = document.querySelector(".sideCardTwoFixed")
let rightCardTwoFixed = document.querySelector(".rightCardTwoFixed")
let sideCardOuter = document.querySelector(".side-card--outer")
let sideCardTwoOuter = document.querySelector(".side-card-two--outer")
let rightCardTwoOuter = document.querySelector(".right-card-two--outer")
let nextSideCardFix = document.querySelector(".nextSideCardFix")
let sideMenuFixed = document.querySelector(".sideMenuFixed")
let sideMenuOuter = document.querySelector("sideMenuOuter")
// let headerContainerOuter = document.querySelector(".header-container-outer")


// let page = document.querySelector(".page")


// session filters highlights

// all filter 
allfilter.addEventListener("click", (e)=>{
    allfilter.classList.add("selected-filter")
    allfilter.firstElementChild.classList.add("selected")

    activefilter.classList.remove("selected-filter")
    activefilter.firstElementChild.classList.remove("selected")

    startingfilter.classList.remove("selected-filter")
    startingfilter.firstElementChild.classList.remove("selected")
})

// active filter
activefilter.addEventListener("click", (e)=>{
    activefilter.classList.add("selected-filter")
    activefilter.firstElementChild.classList.add("selected")

    allfilter.classList.remove("selected-filter")
    allfilter.firstElementChild.classList.remove("selected")

    startingfilter.classList.remove("selected-filter")
    startingfilter.firstElementChild.classList.remove("selected")
})


// starting session filter 
startingfilter.addEventListener("click", (e)=>{
    startingfilter.classList.add("selected-filter")
    startingfilter.firstElementChild.classList.add("selected")

    activefilter.classList.remove("selected-filter")
    activefilter.firstElementChild.classList.remove("selected")

    allfilter.classList.remove("selected-filter")
    allfilter.firstElementChild.classList.remove("selected")
})





window.onscroll = function() {scrollFunction()};

let fixSessionFilter = sessionFilter.offsetTop;
let sideCardFixer = sideCardFixed.offsetTop
let rightCardFixer = rightCardFixed.offsetTop
let sideCardTwoFixer = sideCardTwoFixed.offsetTop
let rightCardTwoFixer = rightCardTwoFixed.offsetTop



function scrollFunction(){

    // fixed session filter position div onscroll 
    if (window.pageYOffset >= (fixSessionFilter + 19)){
        sessionFilter.classList.add("card-filter-stick")
        sessionFilterOuter.classList.add("card-filterfix")
    }else{
        sessionFilter.classList.remove("card-filter-stick")
        sessionFilterOuter.classList.remove("card-filterfix")
    }


    // fixed second column  card position onscroll 
    if (window.pageYOffset >= (sideCardFixer - 60)){
        sideCardFixed.classList.add("side-card-stick")
        sideCardOuter.classList.add("side-card-stick-height")
        nextSideCardFix.classList.add("next-side-card-fixer")
    } else {
        sideCardFixed.classList.remove("side-card-stick")
        sideCardOuter.classList.remove("side-card-stick-height")
        nextSideCardFix.classList.remove("next-side-card-fixer")
    }


    if (window.pageYOffset >= (sideCardTwoFixer -355)){
        sideCardTwoFixed.classList.add("side-card-stick")
        sideCardTwoOuter.classList.add("side-card-stick-height")
        nextSideCardFix.classList.add("next-side-card-fixer")
    } else {
        sideCardTwoFixed.classList.remove("side-card-stick")
        sideCardOuter.classList.remove("side-card-stick-height")
        nextSideCardFix.classList.remove("next-side-card-fixer")
    }

    // fixed fourth column card position onscroll
    if (window.pageYOffset >= (rightCardFixer - 60)){
        rightCardFixed.classList.add("right-card-stick")
        rightCardOuter.classList.add("right-card-stick-height")
        nextSideCardFix.classList.add("next-side-card-fixer")
    } else {
        rightCardFixed.classList.remove("right-card-stick")
        rightCardOuter.classList.remove("right-card-stick-height")
        nextSideCardFix.classList.remove("next-side-card-fixer")
    }

    if (window.pageYOffset >= (rightCardTwoFixer - 355)){
        rightCardTwoFixed.classList.add("right-card-stick")
        rightCardTwoOuter.classList.add("right-card-stick-height")
        nextSideCardFix.classList.add("next-side-card-fixer")
    } else {
        rightCardTwoFixed.classList.remove("right-card-stick")
        rightCardOuter.classList.remove("right-card-stick-height")
        nextSideCardFix.classList.remove("next-side-card-fixer")
    }
    

}


// Hamburgaer 
let menu = document.querySelector(".hiddenMenuOuter")
let menuIcon = document.querySelectorAll(".menuIcon")
let container = document.querySelector(".page")
let headContainer = document.querySelector(".header-page")



// function menuIcon(){
//     console.log("i have been clicked")
//     menu.style.transform = "translateX(0%) translateY(8%)"
// }

menuIcon.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        console.log(icon)
        menu.style.transform = "translateX(0%) translateY(8%)"
    })
})

container.addEventListener("click", ()=>{
    menu.style.transform = "translateX(250px) translateY(8%)"
})


