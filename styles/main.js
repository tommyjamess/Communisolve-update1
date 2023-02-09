
let optionChoice = document.querySelectorAll(".optionChoice")
let optionBtnInner = document.querySelectorAll(".option-btns-inner .selectOption")
let submitOption = document.querySelectorAll(".optionForm button")

optionChoice.forEach((item)=>{
    item.style.display = "none";
    
})

optionBtnInner.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.parentElement.previousElementSibling.style.display = "flex";
    })
})

submitOption.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        e.preventDefault()
        item.parentElement.parentElement.parentElement.parentElement.style.display = "none";
    })
})






// getSearchInput.addEventListener("keypress", ()=>{
//     memberName.forEach((item) => {
//         var searchValue = getSearchInput.value
//         if(item.innerHTML.toLowerCase().includes(searchValue)){
//             item.parentElement.parentElement.parentElement.style.display = "flex"
//         }
//     })
//     memberItem.forEach((item) => {
//         item.style.display = "none"
//     })
// })
