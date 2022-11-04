let commentBtn = document.querySelectorAll("#commentBtn")
let commentPage = document.querySelectorAll(".comment-page")
let closeThread = document.querySelectorAll(".close-thread")
let thread = document.querySelectorAll(".thread-outer")

thread.forEach((item)=>{
    item.style.display = "none";
})


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



closeThread.forEach((close)=>{
    close.addEventListener("click", ()=>{
        close.parentElement.parentElement.parentElement.style.display = "none"
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


function commentBoxUp(){
    commentInput.forEach((item)=>{
        item.parentElement.style.transform = "translateY(-30%)"
    })
}

function commentBoxDown(){
    commentInput.forEach((item)=>{
        item.parentElement.style.transform = "translateY(0%)"
    })
}