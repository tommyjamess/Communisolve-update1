let allfilter = document.querySelectorAll(".allfilter")

let filteredContainer = document.querySelector(".filteredContentContainer")
let filteredContent = document.querySelectorAll(".filteredContent")

if(filteredContainer){
    filteredContainer.children[0].style.display = "block"
}

// session filters highlights
allfilter.forEach((filter, index)=>{
    filter.addEventListener("click", ()=>{
        removeFIlterHighlight()
        filter.classList.add("clicked")
        filter.classList.add("selected-filter")
        filter.children[0].classList.add("selected")

        if (index == 0){
            closeOtherFilteredContent()
            filteredContainer.children[0].style.display = "block"
            filteredContainer.children[0].classList.add("on-display")
        }
        if (index == 1){
            closeOtherFilteredContent()
            filteredContainer.children[1].style.display = "block"
            filteredContainer.children[1].classList.add("on-display")
        }
        if (index == 2){
            closeOtherFilteredContent()
            filteredContainer.children[2].style.display = "block"
            filteredContainer.children[2].classList.add("on-display")
        }
    })
})

function closeOtherFilteredContent(){
    filteredContent.forEach((container)=>{
        if(container.classList.contains("on-display")){
            container.classList.remove("on-display")
            container.style.display = "none"
            
        }
    })
}



function removeFIlterHighlight(){
    allfilter.forEach((filter)=>{
        if((filter.classList.contains("clicked")) || (filter.classList.contains("selected-filter")) ){
            filter.classList.remove("clicked")
            filter.classList.remove("selected-filter")
            filter.children[0].classList.remove("selected")
        }
    })
}
