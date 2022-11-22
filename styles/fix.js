
let sessionFilter = document.querySelector(".filter")
let profileFilter = document.querySelector(".profile-filter")
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





window.onscroll = function() {scrollFunction()};


let fixSessionFilter = sessionFilter.offsetTop;
let sideCardFixer = sideCardFixed.offsetTop;
let rightCardFixer = rightCardFixed.offsetTop;
let sideCardTwoFixer = sideCardTwoFixed.offsetTop;
let rightCardTwoFixer = rightCardTwoFixed.offsetTop;



function scrollFunction(){

    if(sessionFilter.classList.contains("profile-filter")){
        if (window.pageYOffset >= (fixSessionFilter + 142)){
            sessionFilter.classList.add("profile-filter-stick")
            sessionFilterOuter.classList.add("card-profileFilter-fix")
        }else{
            sessionFilter.classList.remove("profile-filter-stick")
            sessionFilterOuter.classList.remove("card-profileFilter-fix")
        }
    }else if(sessionFilter.classList.contains("no-creation")){
        if (window.pageYOffset >= (fixSessionFilter - 38)){
            sessionFilter.classList.add("no-creation-stick")
            sessionFilterOuter.classList.add("card-noCreation-fix")
        }else{
            sessionFilter.classList.remove("no-creation-stick")
            sessionFilterOuter.classList.remove("card-noCreation-fix")
        }
    }else{
        if (window.pageYOffset >= (fixSessionFilter + 28)){
            sessionFilter.classList.add("card-filter-stick")
            sessionFilterOuter.classList.add("card-filterfix")
        }else{
            sessionFilter.classList.remove("card-filter-stick")
            sessionFilterOuter.classList.remove("card-filterfix")
        }
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
