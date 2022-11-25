let commentBtn = document.querySelectorAll("#commentBtn")
let commentPage = document.querySelectorAll(".comment-page")
let closeThread = document.querySelectorAll(".close-thread")

// thread.forEach((item)=>{
//     item.style.display = "none";
// })


commentBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        if(btn.parentElement.nextElementSibling.style.display == "none"){
            btn.parentElement.nextElementSibling.style.display = "flex"
        }else{
            btn.parentElement.nextElementSibling.style.display = "none"
        }
    })
})




// open sub comments 
let openSubComment = document.querySelectorAll(".openSubComment")
let subCommentContent = document.querySelectorAll(".subComments")


subCommentContent.forEach((comment)=>{
    comment.style.display = "none"
})

openSubComment.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.parentElement.parentElement.nextElementSibling.style.display == "none"){
            btn.parentElement.parentElement.nextElementSibling.style.display = "block";
        }else{
            btn.parentElement.parentElement.nextElementSibling.style.display = "none";
        }
    })
})


let commentInput = document.querySelectorAll("#commentInput")

commentInput.forEach((item)=>{
    item.addEventListener("focus", ()=>{
        commentBoxUp()
    })
})

commentInput.forEach((item)=>{
    item.addEventListener("focusout", ()=>{
        commentBoxDown()
    })
})


// star rating 
let starRating = document.querySelectorAll('.starRating')
let confirmRating = document.querySelectorAll('.confirmRating')

starRating.forEach((item) => {
    item.addEventListener("click", ()=>{
        item.parentElement.nextElementSibling.nextElementSibling.style.display = "flex"
    })
})

confirmRating.forEach((item)=> {
    item.addEventListener("click", ()=> {
        item.parentElement.style.display = "none"
    })
})


let askInputButton = document.querySelector(".askInputButton")

askInputButton.addEventListener("click", (e)=> {
    e.preventDefault();
    askInputButton.nextElementSibling.style.display = "flex"
})

let stanceChoicesOuter = document.querySelector(".stanceChoicesOuter")
let closeStance = document.querySelector(".closeStance")


closeStance.addEventListener("click", ()=> {
    stanceChoicesOuter.style.display = "none"
})


// comment menu 
let openCommentMenu = document.querySelectorAll(".openCommentMenu")
let commentMenuCardOuter = document.querySelectorAll(".commentMenuCardOuter")
let singleComment = document.querySelectorAll(".singleComment")


openCommentMenu.forEach((item) => {
    item.addEventListener("click", ()=> {
        if(!item.nextElementSibling.classList.contains("showSubMenu")){
            item.nextElementSibling.classList.add("showSubMenu")
        }
    })
    
})

singleComment.forEach((item) =>{
    item.addEventListener("click", ()=> {
        closeCommentMenu()
    })
})

function closeCommentMenu() {
    commentMenuCardOuter.forEach((item) => {
        item.classList.remove("showSubMenu")
    })
}

let closeCommentMenuAlt = document.querySelectorAll(".closeCommentMenu")

closeCommentMenuAlt.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.parentElement.parentElement.parentElement.classList.remove("showSubMenu")
    })
})

