let closeNotif = document.querySelectorAll(".closeNotification")
let notification = document.querySelectorAll(".notifUser")

notification.forEach((item) => {
    item.addEventListener("click", ()=> {
        console.log(item)
        item.nextElementSibling.style.display = "flex"
    })
})

closeNotif.forEach((item) => {
    item.addEventListener("click", ()=> {
        item.parentElement.parentElement.style.display = "none"
    })
})