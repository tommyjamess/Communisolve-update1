let commentBtn = document.querySelectorAll("#commentBtn")
let commentPage = document.querySelectorAll(".comment-page")


commentBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.parentElement.nextElementSibling.classList.contains("openComment")){
            btn.parentElement.nextElementSibling.classList.remove("openComment")
            // btn.parentElement.nextElementSibling.style.display = "none"
        }else{
            btn.parentElement.nextElementSibling.classList.add("openComment")
            // btn.parentElement.nextElementSibling.style.display = "block"
        }
    })
})

// open sub comments 
let openSubComment = document.querySelectorAll(".openSubComment")
let subCommentContent = document.querySelectorAll(".subComments")

openSubComment.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(btn.parentElement.classList.contains("openSubCommentContent")){
            btn.parentElement.classList.remove("openSubCommentContent")
        }else{
            btn.parentElement.classList.add("openSubCommentContent")
        }
        
    })
})
