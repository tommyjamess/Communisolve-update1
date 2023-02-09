let openGuide = document.querySelectorAll(".guideline-icon")
let guideline = document.querySelectorAll(".guideline")



openGuide.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        if(icon.parentElement.parentElement.style.maxHeight != "none"){
            icon.parentElement.parentElement.style.maxHeight = "none";
            
        }else{
            icon.parentElement.parentElement.style.maxHeight = "40px";
        }
    })
})



// ask result percentage 

let resultPercentage = document.querySelectorAll(".result-percentage")

resultPercentage.forEach((item) => {
    item.previousElementSibling.firstElementChild.style.flexBasis = item.textContent
})