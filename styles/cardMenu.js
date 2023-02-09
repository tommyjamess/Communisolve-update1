let openMainCardMenu = document.querySelectorAll(".openMainCardMenu")
let mainCardMenuOuter = document.querySelectorAll(".mainCardMenuOuter")
let closeMenuCard = document.querySelectorAll(".closeMenuCard")
let mainCardContainer = document.querySelectorAll(".card")


openMainCardMenu.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.nextElementSibling.style.display = "block"
    })
    
})

closeMenuCard.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.parentElement.parentElement.parentElement.style.display = "none"
    })
})

// float button 
let hiddenFloatMenu = document.querySelectorAll(".hiddenFloatMenu")
let floatingButton = document.querySelectorAll(".floatingButton")


floatingButton.forEach((item, index)=>{
    item.addEventListener("click", ()=> {
        showFloatMenu(index) 
    });
})

function showFloatMenu(index){
    hiddenFloatMenu.forEach((item, floatIndex) => {
        if(index == floatIndex){
            if(item.classList.contains("displayFloatingButton")){
                item.classList.remove("displayFloatingButton")
            }else{
                item.classList.add("displayFloatingButton")
            }
        }
    })
}



let joinedUsers = document.querySelectorAll(".joined-users")
let brainsotemMemberListContainer = document.querySelector(".brainstorm-member-list-container")
let closeBrainstormMemberList = document.querySelectorAll(".closeBrainstormMemberList")

joinedUsers.forEach((item) => {
    item.addEventListener("click", () => {
        item.nextElementSibling.classList.add("displayBrainstormMemberList")
    })
})


closeBrainstormMemberList.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.parentElement.parentElement.parentElement.classList.remove("displayBrainstormMemberList")
    })
})


let memberCount = document.querySelector(".member-count")
let memberListContainer = document.querySelector(".member-list-container")
let closeMemberListWindow = document.querySelector(".closeMemberListWindow")
let memberItem = document.querySelectorAll(".member-item")
let memberName = document.querySelectorAll(".member-name")
let getSearchInput = document.querySelector(".getSearchInput")

memberCount.addEventListener("click", ()=>{
    if (!(memberListContainer.classList.contains("displayMemberList"))){
        memberListContainer.classList.add("displayMemberList")
    }
})

closeMemberListWindow.addEventListener("click", ()=> {
    closeMemberListWindow.parentElement.parentElement.parentElement.classList.remove("displayMemberList")
})

