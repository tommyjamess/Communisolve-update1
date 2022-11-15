// session  and feedback 

let displaySession = document.querySelector(".displaySession")

let questionPage = document.querySelector(".questionAnswerOuter")


// questions and answers 
let questions = document.querySelectorAll(".questionItem")
let answerContainer = document.querySelector(".answersContainer")
let answers = document.querySelectorAll(".answerList")
let questionList = document.querySelector(".questionsList")
let exitAnswer = document.querySelectorAll(".exitAnswer")
let ansTOQuestion = document.querySelector(".answersToQuestions")
let questionListInner = document.querySelectorAll(".questionListInner")



questions.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        answerContainer.style.display = "flex";
        if (index == 0){
            answers.forEach((ans, number)=>{
                if (number == 0){
                    ans.style.display = "block";
                }
            })
        }

        if (index == 1){
            answers.forEach((ans, number)=>{
                if (number == 1){
                    ans.style.display = "block";
                }
            })
        }

        if (index == 2){
            answers.forEach((ans, number)=>{
                if (number == 2){
                    ans.style.display = "block";
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
            answerContainer.style.display = "none";
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


