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


