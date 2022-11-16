// session  and feedback 

let displaySession = document.querySelector(".displaySession")
let questionPage = document.querySelector(".questionAnswerOuter")

// questions and answers 
let questionItem = document.querySelectorAll(".questionItem")
let answersContainer = document.querySelector(".answersContainer")
let answers = document.querySelectorAll(".answerList")
let questionList = document.querySelector(".questionsList")
let exitAnswer = document.querySelectorAll(".exitAnswer")
let ansTOQuestion = document.querySelector(".answersToQuestions")
let questionListInner = document.querySelectorAll(".questionListInner")



questionItem.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        answers.forEach((answerItem, answerIndex) => {
            if(index == answerIndex){
                questionList.style.display = "none"
                answerItem.style.display = "block"
                answersContainer.style.display = "flex";
            }
        })
    })
})



exitAnswer.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        answers.forEach((ans)=>{
            ans.style.display = "none";
            questionList.style.display = "block";
            answersContainer.style.display = "none";
        }) 
    })
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
}
