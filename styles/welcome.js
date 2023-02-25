let profilePageItem = document.querySelectorAll(".profilePageItem")
let nextProfileSetting = document.querySelector(".next-profile-setting")
let backProfileBtn = document.querySelector(".back-profile-setting")

profilePageItem.forEach((item, index) => {
    if(index === 0){
        item.classList.add("displayProfileSetting")
    }
})

nextProfileSetting.addEventListener("click", ()=> {
    showNextProfileSetting()
})

backProfileBtn.addEventListener("click", ()=> {
    showPrevProfileSetting()
})

function showNextProfileSetting(){
    profilePageItem.forEach((item, index) => {
        if(index === 1){
            item.classList.add("displayProfileSetting")
        }
    })
    profilePageItem.forEach((item, index) => {
        if(index === 0){
            item.classList.remove("displayProfileSetting")
        }
    })
}
function showPrevProfileSetting(){
    profilePageItem.forEach((item, index) => {
        if(index === 0){
            item.classList.add("displayProfileSetting")
        }
    })
    profilePageItem.forEach((item, index) => {
        if(index === 1){
            item.classList.remove("displayProfileSetting")
        }
    })
}