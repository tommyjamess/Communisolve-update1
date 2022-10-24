// interest or industry  variables
let choices = document.querySelectorAll(".choices")
let choiceValue  = document.querySelector(".choicesOutput")

// create ask session variables
let ask = document.querySelector(".Ask")
let createAskUi = document.querySelector(".displayAsk")
let eixtCreateAsk = document.querySelector(".exitCreateAsk")

// create ask session variables
let brainstorm = document.querySelector(".Brainstorm")
let createBrainstormUi = document.querySelector(".displayBrainstorm")
let exitCreateBrainstorm = document.querySelectorAll(".exitCreateBrainstorm")

// create Poll session varialbles 
let poll = document.querySelector(".Poll")
let createPollUi = document.querySelector(".displayPoll")
let exitCreatePoll = document.querySelectorAll(".exitCreatePoll")


// brainstorm form next buttons 
let bNextBtns = document.querySelectorAll(".next-btn")
let bBackBtns = document.querySelectorAll(".back-btn")
let pNextBtn = document.querySelectorAll(".pnext-btn")
let pBackBtn = document.querySelectorAll(".pback-btn")



// bform1 = document.querySelector(".Bform1")
// bform2 = document.querySelector(".Bform2")

choices.forEach(function(choice){
    choice.addEventListener("click", (e)=>{
        let interest  =  choiceValue.children[1]
        let industry  =  choiceValue.children[0]
        if (choice.classList.contains("interest")){
            interest.style.display = "block"
            industry.style.display = "none"

        } else {
            industry.style.display = "block"
            interest.style.display = "none"
        }
    })
})




// display ask session 
ask.addEventListener("click", ()=>{
    createAskUi.style.display = "flex"
})

eixtCreateAsk.addEventListener("click", ()=>{
    createAskUi.style.display = "none"
})




// display brainstorm session 
brainstorm.addEventListener("click", ()=>{
    createBrainstormUi.style.display = "flex"
})


exitCreateBrainstorm.forEach((btn) =>{

    btn.addEventListener("click", ()=>{
        createBrainstormUi.style.display = "none"
    })
    
})


// display poll session 
poll.addEventListener("click", ()=>{
    createPollUi.style.display = "flex"
})


exitCreatePoll.forEach((btn) =>{

    btn.addEventListener("click", ()=>{
        createPollUi.style.display = "none"
    })
    
})


let = bform1 = createBrainstormUi.children[0]
let = bform2 = createBrainstormUi.children[1]
let = bform3 = createBrainstormUi.children[2]
let = bform4 = createBrainstormUi.children[3]
let = bform5 = createBrainstormUi.children[4]
let = bform6 = createBrainstormUi.children[5]

bNextBtns.forEach(function(btn, index){

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



let = pform1 = createPollUi.children[0]
let = pform2 = createPollUi.children[1]
let = pform3 = createPollUi.children[2]


pNextBtn.forEach( (btn, index)=>{
    btn.addEventListener("click", ()=>{
        if (index == 0){
            pform1.style.display = "none"
            pform2.style.display = "block"
            pform3.style.display = "none"
        }
        if(index == 1){
            pform1.style.display = "none"
            pform2.style.display = "none"
            pform3.style.display = "block"
        }
    })
})

pBackBtn.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        if(index == 0){
            pform1.style.display = "block"
            pform2.style.display = "none"
            pform3.style.display = "none"
        }
        if(index == 1){
            pform1.style.display = "none"
            pform2.style.display = "block"
            pform3.style.display = "none"
        }
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