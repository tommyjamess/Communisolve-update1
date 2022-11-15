let sessionVisual = document.querySelectorAll(".sessionVisual")

sessionVisual.forEach((item) => {
    item.addEventListener("click", () => {
        item.nextElementSibling.style.display = "flex"
    })
})

let popImages = document.querySelectorAll(".popImagesInner")

popImages.forEach((item) => {
    item.firstElementChild.classList.add("popImg")
})

var i = 0

function Next(){
    var popImg = document.querySelectorAll(".popImg")
    popImg.forEach((item) => {
        if(item.nextElementSibling){
            item.classList.remove("popImg")
            item.nextElementSibling.classList.add("popImg")
        }
    })
}
function Prev(){
    var popImg = document.querySelectorAll(".popImg")
    popImg.forEach((item) => {
        if(item.previousElementSibling){
            item.classList.remove("popImg")
            item.previousElementSibling.classList.add("popImg")
        }
    })
}


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


// exit pop images 
let exitPopImages = document.querySelectorAll(".exitPopImages")

exitPopImages.forEach((item) => {
    item.addEventListener("click", () => {
        item.parentElement.style.display = "none"
    })
})

