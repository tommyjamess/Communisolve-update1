let authFormList = document.querySelectorAll(".auth-form-list")
let authNextBtn = document.querySelectorAll(".auth-next-btn")

// display the default form 
authFormList.forEach((item) => {
    if(item.classList.contains("auth-list-default-item")){
        item.style.display = "flex"
    }
})

// move to the next form 

authNextBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        if(item.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling){
            item.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none"
            item.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display = "flex"
        }
    })
})




// authenticate.style.display = "none";
// signUpBtn.addEventListener("click", (e)=>{
//     e.preventDefault()
//     signup.style.display = "none";
//     authenticate.style.display = "flex";
    
// })