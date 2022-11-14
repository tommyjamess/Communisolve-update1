let imges = document.querySelectorAll('.viewImage');

imges.forEach((image)=>{
    image.addEventListener("click", (e)=>{
        if(image.classList.contains("viewImageStyle")){
            image.classList.remove("viewImageStyle")
            image.children[0].classList.remove("eachImage")
        }else{
            image.classList.add("viewImageStyle")
            image.children[0].classList.add("eachImage")
        }
        e.preventDefault()
        
    })
})



// session image toggle 

let imageCheckbox = document.querySelectorAll(".imageCheckbox")
let activeSessionImg = document.querySelectorAll(".activeSessionImg")
let activeImg = document.querySelectorAll(".activeImg")
let questionAnswerInner = document.querySelector(".questionAnswerInner")


activeImg.forEach((image)=>{
    image.style.display = "none";
})

imageCheckbox.forEach((check)=>{
    check.addEventListener("click", ()=>{

        if(check.value=="off"){
            activeImg.forEach((image)=>{
                image.style.display = "block";
                check.value = "on"
                questionAnswerInner.classList.add("QAContainer")
            })
        }else{
            activeImg.forEach((image)=>{
                image.style.display = "none";
                check.value = "off"
                questionAnswerInner.classList.remove("QAContainer")
            })
        }
            
    })
})

// imageCheckbox.addEventListener("click", ()=>{
//     if(imageCheckbox.value=="off"){
//         activeImg.style.display = "block";
//         imageCheckbox.value = "on"
//         // activeSessionImg.nextElementSibling.style.height = "300px"
        
//     }else if(imageCheckbox.value=="on"){
//         imageCheckbox.value = "off"
//         activeImg.style.display = "none";
//     }
// })


