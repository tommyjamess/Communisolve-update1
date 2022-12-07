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


// progress bar simulator
let progressSimulator = document.querySelectorAll(".progressSimulator")

progressSimulator.forEach((item) => {
    if(item.textContent.slice(0, -1) < 50){
        item.style.backgroundColor = "red"
    }else if(item.textContent.slice(0, -1) > 50){
        item.style.backgroundColor = "green"
    }
    
    
    item.style.width = `${item.textContent}`
})





// let projectSessionUsersImgs = document.querySelectorAll(".projectSessionUsers img")


// imgCount = projectSessionUsersImgs.length
// console.log(imgCount)
// projectSessionUsersImgs.forEach((img)=> {

//     img.style.transform = (`translateX(-20%)+ `)

// })

