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



// emoji list 
click = false
document.getElementsByClassName("emoji")[0].style.display = "none";
function showEmoji() {
    if ( click == false){
        document.getElementsByClassName("emoji")[0].style.display = "flex";
        click = true
    }else{
        document.getElementsByClassName("emoji")[0].style.display = "none";
        click = false
    }
}

function emoji(emoji){
    document.getElementById("org-chat-input-field").value += document.getElementById(emoji).innerHTML;
}


// let projectSessionUsersImgs = document.querySelectorAll(".projectSessionUsers img")


// imgCount = projectSessionUsersImgs.length
// console.log(imgCount)
// projectSessionUsersImgs.forEach((img)=> {

//     img.style.transform = (`translateX(-20%)+ `)

// })

