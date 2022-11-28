let teamOptions = document.querySelectorAll(".teamOptions")
let hiddenMenuTeamAction = document.querySelectorAll(".hiddenMenuTeamAction")


teamOptions.forEach((item) => {
    item.addEventListener("click", ()=> {
        if(!item.parentElement.nextElementSibling.classList.contains("displayTeamAction")){
            item.parentElement.nextElementSibling.classList.add("displayTeamAction")
        }else{
            item.parentElement.nextElementSibling.classList.remove("displayTeamAction")
        }
    })
})


teamOptions.forEach((item)=> {
    item.addEventListener("click", ()=> {
        if(!item.parentElement.nextElementSibling.classList.contains("openHiddenMenuAction")){
            item.parentElement.nextElementSibling.classList.add("openHiddenMenuAction")
        }else{
            item.parentElement.nextElementSibling.classList.remove("openHiddenMenuAction")
        }
    })
})



