let chatResponseOuter = document.querySelectorAll(".chatResponseOuter")
let chatMessageMenu = document.querySelectorAll(".chatMessageMenu")


chatResponseOuter.forEach((item, messageIndex) => {
    item.addEventListener("dblclick", ()=>{
        displayChatMenu(messageIndex)
    })
})



function displayChatMenu(messageIndex) {
    chatMessageMenu.forEach((item, menuIndex) => {
        if(messageIndex==menuIndex){
            item.classList.add("showChatMessageMenu")
        }
    }) 
}

let chatWindowInner = document.querySelector(".chatWindowInner")

chatWindowInner.addEventListener("click", ()=> {
    chatMessageMenu.forEach((item)=> {
        item.classList.remove("showChatMessageMenu")
    })
})