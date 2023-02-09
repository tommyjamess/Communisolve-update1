// edit profile 
let editProfile = document.querySelectorAll(".editProfile")
let editProfilePageOuter = document.querySelectorAll(".editProfilePageOuter")
let closeEditProfileWindow = document.querySelectorAll(".closeEditProfileWindow")

editProfile.forEach((item) => {
    item.addEventListener("click",  ()=>{
        editProfilePageOuter.forEach((pageITem) => {
            pageITem.classList.add("displayEditProfile")
        })
    })
})

closeEditProfileWindow.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.parentElement.parentElement.parentElement.classList.remove("displayEditProfile")
    })
})
