let menuIcon = document.querySelector(".menu-icon")
let linkList = document.querySelector(".link-list")

menuIcon.addEventListener("click", ()=> {
    if(menuIcon.classList.contains("menuIconClicked")){
        menuIcon.classList.remove("menuIconClicked")
        linkList.style.maxHeight = "0px"
    }else{
        menuIcon.classList.add("menuIconClicked")
        linkList.style.maxHeight = "500px"
    }
})


let testimony = document.querySelectorAll(".testimony")
let testimonyButton = document.querySelectorAll(".testimonyButton")

testimony.forEach((item) => {
    if(item.classList.contains("onDisplay")){
        item.style.display = "flex"
    }
})

testimonyButton.forEach((item, index) => {
    if(index === 0){
        item.style.background = "black"
    }
})

testimonyButton.forEach((item, buttonIndex) => {
    item.addEventListener("click", ()=> {
        resetButtonColor()
        displaySlideForButton(buttonIndex)
        item.style.background = "black"

    })
})


function resetButtonColor() {
    testimonyButton.forEach((item) => {
        item.style.background = "grey"
    })
}

function displaySlideForButton(buttonIndex){
    closeOtherDisplay()
    testimony.forEach((item, displayIndex) => {
        if(displayIndex == buttonIndex){
            item.style.display = "flex"
            item.style.transition = "5s"
        }
    })
}

function closeOtherDisplay(){
    testimony.forEach((item) => {
        item.style.display = "none"
        item.style.transition = "5s"
    })
}