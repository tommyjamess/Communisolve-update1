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