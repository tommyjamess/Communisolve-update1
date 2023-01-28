// interest or industry  variables
let choices = document.querySelectorAll(".choices")
let choiceValue  = document.querySelector(".choicesOutput")
let industryChoiceValue = document.querySelectorAll(".industryChoiceValue")
let interestChoiceValue = document.querySelectorAll(".interestChoiceValue")

// create ask session variables
let ask = document.querySelector(".Ask")
let createAskUi = document.querySelector(".displayAsk")
let exitCreateAsk = document.querySelectorAll(".exitCreateAsk")

// create brainstorm session variables
let brainstorm = document.querySelector(".Brainstorm")
let createBrainstormUi = document.querySelector(".displayBrainstorm")
let exitCreateBrainstorm = document.querySelectorAll(".exitCreateBrainstorm")

// create Poll session varialbles 
let poll = document.querySelector(".Poll")
let createPollUi = document.querySelector(".displayPoll")
let exitCreatePoll = document.querySelectorAll(".exitCreatePoll")


// form next buttons 
let bNextBtns = document.querySelectorAll(".next-btn")
let bBackBtns = document.querySelectorAll(".back-btn")
let pNextBtn = document.querySelectorAll(".pnext-btn")
let pBackBtn = document.querySelectorAll(".pback-btn")
let aNextBtn = document.querySelectorAll(".anext-btn")
let aBackBtn = document.querySelectorAll(".aback-btn")



// Ask starts here...

// display ask session 
ask.addEventListener("click", ()=>{
    createAskUi.style.display = "flex"
})

exitCreateAsk.forEach((item) => {
    item.addEventListener("click", ()=>{
        createAskUi.style.display = "none"
    })
})

// getting all Ask forms
AskForm = document.querySelectorAll(".Aform")

// displays default form when ask opens
AskForm.forEach((form) => {
    if (form.classList.contains("defaultAskForm")){
        form.style.display = "block"
    }
})

// displays next form element
aNextBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if( btn.parentElement.parentElement.nextElementSibling){
            btn.parentElement.parentElement.style.display = "none";
            btn.parentElement.parentElement.nextElementSibling.style.display = "block"
        }
        
    })
})

// displays previous form element
aBackBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if( btn.parentElement.parentElement.previousElementSibling){
            btn.parentElement.parentElement.style.display = "none";
            btn.parentElement.parentElement.previousElementSibling.style.display = "block"
        }
        
    })
})

// Ask ends here...



// poll starts here..

// display poll session 
poll.addEventListener("click", ()=>{
    createPollUi.style.display = "flex"
})


exitCreatePoll.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        createPollUi.style.display = "none"
    })
    
})

// pNextBtn == Poll Next btn

// displays next form element
pNextBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if( btn.parentElement.parentElement.nextElementSibling){
            btn.parentElement.parentElement.style.display = "none";
            btn.parentElement.parentElement.nextElementSibling.style.display = "block"
        }
        
    })
})

// displays previous form element
pBackBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if( btn.parentElement.parentElement.previousElementSibling){
            btn.parentElement.parentElement.style.display = "none";
            btn.parentElement.parentElement.previousElementSibling.style.display = "block"
        }
        
    })
})

// poll ends here..




// brainstorm starts here

let = bform1 = createBrainstormUi.children[0]
let = bform2 = createBrainstormUi.children[1]
let = bform3 = createBrainstormUi.children[2]
let = bform4 = createBrainstormUi.children[3]
let = bform5 = createBrainstormUi.children[4]
let = bform6 = createBrainstormUi.children[5]


// display brainstorm session 
brainstorm.addEventListener("click", ()=>{
    createBrainstormUi.style.display = "flex"
})


exitCreateBrainstorm.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        createBrainstormUi.style.display = "none"
    }) 
})


bNextBtns.forEach((btn, index) => {

    simpleComplex = document.getElementById("simpleComp")
    standardCustom = document.getElementById("standardCustom")
    
    btn.addEventListener("click", (e)=>{
        if(index == 0){
            bform1.style.display = "none";
            bform2.style.display = "block"
            bform3.style.display = "none";
            bform4.style.display = "none";
            bform5.style.display = "none";
            bform6.style.display = "none";
        }
        if(index == 1){
            
            if ((simpleComplex.value=="Simple") && (standardCustom.value=="Standard" )){
                bform1.style.display = "none";
                bform2.style.display = "none";
                bform4.style.display = "none";
                bform5.style.display = "none";
                bform6.style.display = "none";
                bform3.style.display = "block";
            }else if ((simpleComplex.value=="Comprehensive") && (standardCustom.value=="Standard" )) {
                bform1.style.display = "none";
                bform2.style.display = "none";
                bform6.style.display = "none";
                bform3.style.display = "block";
            }
            
            if (((simpleComplex.value=="Simple") && (standardCustom.value=="Custom" ))  ){
                bform1.style.display = "none";
                bform2.style.display = "none";
                bform3.style.display = "none";
                bform4.style.display = "block";
                bform5.style.display = "none";
                bform6.style.display = "none";

            }
            if (((simpleComplex.value=="Comprehensive") && (standardCustom.value=="Custom" ))  ){
                bform1.style.display = "none";
                bform2.style.display = "none";
                bform3.style.display = "none";
                bform4.style.display = "none";
                bform5.style.display = "block";
                bform6.style.display = "none";

            }
        }
        if((index == 2) || (index == 3) || (index == 4)){
            bform1.style.display = "none";
            bform2.style.display = "none";
            bform3.style.display = "none";
            bform4.style.display = "none";
            bform5.style.display = "none";
            bform6.style.display = "block";

        }
    })
})

bBackBtns.forEach((btn,index)=>{
    btn.addEventListener("click", ()=>{
        if (index == 0){
            console.log(index)
            bform1.style.display = "block";
            bform2.style.display = "none"
            bform3.style.display = "none";
            bform4.style.display = "none";
            bform5.style.display = "none";
        }
        if(index == 1){
            console.log(index)
            if (((simpleComplex.value=="Simple") && (standardCustom.value=="Standard" )) || ((simpleComplex.value=="Comprehensive") && (standardCustom.value=="Standard" )) ){
                bform1.style.display = "none";
                bform2.style.display = "block";
                bform4.style.display = "none";
                bform5.style.display = "none";
                bform6.style.display = "none";
                bform3.style.display = "none";
            }
        }
        if(index == 2){
            if ((simpleComplex.value=="Simple") && (standardCustom.value=="Custom" )){
                bform1.style.display = "none";
                bform2.style.display = "block";
                bform3.style.display = "none";
                bform4.style.display = "none";
                bform5.style.display = "none";
                bform6.style.display = "none";
            }
        }
        if(index == 3){
            if ((simpleComplex.value=="Comprehensive") && (standardCustom.value=="Custom" )){
                bform1.style.display = "none";
                bform2.style.display = "block";
                bform3.style.display = "none";
                bform4.style.display = "none";
                bform5.style.display = "none";
                bform6.style.display = "none";
            }
        }
        if(index == 4){
            if (((simpleComplex.value=="Simple") && (standardCustom.value=="Standard" )) || ((simpleComplex.value=="Comprehensive") && (standardCustom.value=="Standard" ))){
                bform1.style.display = "none";
                bform2.style.display = "none";
                bform3.style.display = "block";
                bform4.style.display = "none";
                bform5.style.display = "none";
                bform6.style.display = "none";
            }
            if (((simpleComplex.value=="Simple") && (standardCustom.value=="Custom" ))){
                bform1.style.display = "none";
                bform2.style.display = "none";
                bform3.style.display = "none";
                bform4.style.display = "block";
                bform5.style.display = "none";
                bform6.style.display = "none";
            }
            if (((simpleComplex.value=="Comprehensive") && (standardCustom.value=="Custom" ))){
                bform1.style.display = "none";
                bform2.style.display = "none";
                bform3.style.display = "none";
                bform4.style.display = "none";
                bform5.style.display = "block";
                bform6.style.display = "none";
            }
            
        }
            
    })
})
// brainstorm ends here







// chained drop down for interest and industry
choices.forEach(function(choice){
    choice.addEventListener("click", (e)=>{
        if (choice.classList.contains("interest")){
            industryChoiceValue.forEach((industryChoiceList) => {
                industryChoiceList.style.display = "none"
            })
            interestChoiceValue.forEach((interestChoiceList) => {
                interestChoiceList.style.display = "block"
            })
        } else {
            industryChoiceValue.forEach((industryChoiceList) => {
                industryChoiceList.style.display = "block"
            })
            interestChoiceValue.forEach((interestChoiceList) => {
                interestChoiceList.style.display = "none"
            })
        }
    })
})

let defaultInterest = document.querySelectorAll("#interest")
let defaultIndustr = document.querySelectorAll("#industry")


defaultIndustr.forEach((item) =>{
    item.checked = true;
    item.addEventListener("click", ()=>{
        defaultInterest.forEach((iterestItem) => {
            iterestItem.checked = false
        })
    })
})
defaultInterest.forEach((item) =>{
    item.addEventListener("click", ()=>{
        defaultIndustr.forEach((industryItem) => {
            industryItem.checked = false
        })
    })
})





let subCategories = document.querySelector(".subCat")
let subThought = document.querySelector(".thought-sub")
let subEmotion = document.querySelector(".emotion-sub")
let subIdea = document.querySelector(".idea-sub")

function Category(){
    if (document.getElementById('category').value == 'thought') { 
        subThought.style.display = "block"
        subEmotion.style.display = "none"
        subIdea.style.display = "none"
    }
    if (document.getElementById('category').value == 'emotion') {
        subEmotion.style.display = "block"
        subThought.style.display = "none"
        subIdea.style.display = "none"
    }
    if (document.getElementById('category').value == 'idea') {
        subEmotion.style.display = "none"
        subThought.style.display = "none"
        subIdea.style.display = "block"
    }
}





