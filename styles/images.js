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

let imageCheckbox = document.querySelector(".imageCheckbox")
let activeSessionImg = document.querySelector(".activeSessionImg")
let activeImg = document.querySelector(".activeImg")


if (imageCheckbox.value = "off"){
    activeImg.style.display = "none";
}

imageCheckbox.addEventListener("click", ()=>{
    if(imageCheckbox.value=="off"){
        activeImg.style.display = "block";
        imageCheckbox.value = "on"
        
    }else if(imageCheckbox.value=="on"){
        imageCheckbox.value = "off"
        activeImg.style.display = "none";
    }
})


