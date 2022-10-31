// session image fullscreen 
let imgs = document.querySelectorAll('.viewImage');

imgs.forEach((image)=>{
    image.addEventListener("click", ()=>{
        if(image.classList.contains("viewImageStyle")){
            image.classList.remove("viewImageStyle")
            image.children[0].classList.remove("eachImage")
        }else{
            image.classList.add("viewImageStyle")
            image.children[0].classList.add("eachImage")
        }
        
    })
})