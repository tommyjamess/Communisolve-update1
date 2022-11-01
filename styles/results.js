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
