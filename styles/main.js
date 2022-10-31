

let filters = document.querySelectorAll(".filterTwo");
let allfilter = document.querySelectorAll(".allfilter")
let activefilter = document.querySelectorAll(".activefilter")
let startingfilter = document.querySelectorAll(".startingfilter")

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

let filteredContainer = document.querySelector(".filteredContentContainer")
let filteredContent = document.querySelectorAll(".filteredContent")


filteredContainer.children[0].style.display = "block"
// session filters highlights
allfilter.forEach((filter, index)=>{
    filter.addEventListener("click", ()=>{
        removeFIlterHighlight()
        filter.classList.add("clicked")
        filter.classList.add("selected-filter")
        filter.children[0].classList.add("selected")

        if (index == 0){
            closeOtherFilteredContent()
            filteredContainer.children[0].style.display = "block"
            filteredContainer.children[0].classList.add("on-display")
        }
        if (index == 1){
            closeOtherFilteredContent()
            filteredContainer.children[1].style.display = "block"
            filteredContainer.children[1].classList.add("on-display")
        }
        if (index == 2){
            closeOtherFilteredContent()
            filteredContainer.children[2].style.display = "block"
            filteredContainer.children[2].classList.add("on-display")
        }
    })
})

function closeOtherFilteredContent(){
    filteredContent.forEach((container)=>{
        if(container.classList.contains("on-display")){
            container.classList.remove("on-display")
            container.style.display = "none"
            
        }
    })
}



function removeFIlterHighlight(){
    allfilter.forEach((filter)=>{
        if((filter.classList.contains("clicked")) || (filter.classList.contains("selected-filter")) ){
            filter.classList.remove("clicked")
            filter.classList.remove("selected-filter")
            filter.children[0].classList.remove("selected")
        }
    })
}





window.onscroll = function() {scrollFunction()};

let fixSessionFilter = sessionFilter.offsetTop;
let sideCardFixer = sideCardFixed.offsetTop;
let rightCardFixer = rightCardFixed.offsetTop;
let sideCardTwoFixer = sideCardTwoFixed.offsetTop;
let rightCardTwoFixer = rightCardTwoFixed.offsetTop;

// console.log(typeof fixProfileFilter)

function scrollFunction(){

    if(sessionFilter.classList.contains("profile-filter")){
        if (window.pageYOffset >= (fixSessionFilter + 142)){
            sessionFilter.classList.add("profile-filter-stick")
            sessionFilterOuter.classList.add("card-profileFilter-fix")
        }else{
            sessionFilter.classList.remove("profile-filter-stick")
            sessionFilterOuter.classList.remove("card-profileFilter-fix")
        }
    }else{
        if (window.pageYOffset >= (fixSessionFilter + 19)){
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


// cardMenu.forEach((menu)=>{
//     menu.style.height = "270px"
//     menu.style.width = "270px"
// })


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



// session image toggle 

let imageCheckbox = document.querySelector(".imageCheckbox")
let activeSessionImg = document.querySelector(".activeSessionImg")
let activeImg = document.querySelector(".activeImg")


if (imageCheckbox.value = "off"){
    activeImg.style.display = "none";
}

imageCheckbox.addEventListener("click", ()=>{
    if(imageCheckbox.value=="off"){
        activeImg.style.display = "block";
        imageCheckbox.value = "on"
        
    }else if(imageCheckbox.value=="on"){
        imageCheckbox.value = "off"
        activeImg.style.display = "none";
    }
})


// session  and feedback 

let displaySession = document.querySelector(".displaySession")
let displayFeedback = document.querySelector(".displayFeedback")

let questionPage = document.querySelector(".questionAnswerOuter")
let feedbackPage = document.querySelector(".feedbackOuter")

displayFeedback.addEventListener("click", ()=>{
    questionPage.style.display = "none";
    feedbackPage.style.display = "block";
})

displaySession.addEventListener("click", ()=>{
    questionPage.style.display = "block";
    feedbackPage.style.display = "none";
})


// questions and answers 
let questions = document.querySelectorAll(".questionItem")
let answers = document.querySelectorAll(".answerList")
let questionList = document.querySelector(".questionsList")
let exitAnswer = document.querySelectorAll(".exitAnswer")
let ansTOQuestion = document.querySelector(".answersToQuestions")
let questionListInner = document.querySelectorAll(".questionListInner")





questions.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        if (index == 0){
            answers.forEach((ans, number)=>{
                if (number == 0){
                    ans.style.display = "block";
                    questionList.style.display = "none";

                }
            })
        }

        if (index == 1){
            answers.forEach((ans, number)=>{
                if (number == 1){
                    ans.style.display = "block";
                    questionList.style.display = "none";
                }
            })
        }

        if (index == 2){
            answers.forEach((ans, number)=>{
                if (number == 2){
                    ans.style.display = "block";
                    questionList.style.display = "none";
                }
            })
        }
    })
})



exitAnswer.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        answers.forEach((ans)=>{
            ans.style.display = "none";
            questionList.style.display = "block";
            questionList.childNodes[1].style.marginTop = "230px";
        }) 
    })
})


// reduce chatbox on keyboard use

let chatInput = document.querySelector(".answerInput")
let chatBox = document.querySelector(".questionAnswer")



chatInput.addEventListener("focus", ()=>{
    chatBox.style.maxHeight = "200px"
    chatBox.style.transition = "0.5s"
})
chatInput.addEventListener("focusout", (e)=>{
    chatBox.style.maxHeight = "480px"

    e.preventDefault()
})





// pick answers chosen 
let answerItem = document.querySelectorAll(".answers")

answerItem.forEach((item, index)=>{
    item.addEventListener("click", (e)=>{
        removeOtherBackground()
        e.currentTarget.classList.add("answerStyle")
        item.classList.add("clicked")
    })
})

function removeOtherBackground(){
    answerItem.forEach((thisItem)=>{
        if(thisItem.classList.contains("clicked")){
            thisItem.classList.remove("answerStyle")
            thisItem.classList.remove("clicked")
        }
    })
    console.log("i have been reached")
}