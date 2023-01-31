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
        if (index == 3){
            closeOtherFilteredContent()
            filteredContainer.children[3].style.display = "block"
            filteredContainer.children[3].classList.add("on-display")
        }
        if (index == 4){
            closeOtherFilteredContent()
            filteredContainer.children[4].style.display = "block"
            filteredContainer.children[4].classList.add("on-display")
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


// extended filter 
let filterExtension = document.querySelectorAll(".filterExtension")
let dashboardFilter = document.querySelectorAll(".dashboardFilter")
let dashboardFilterBtn = document.querySelectorAll(".dashboardFilterBtn")
let innerFilterItem = document.querySelectorAll(".innerFilterItem")
let industryFilterBtn = document.querySelectorAll(".industryFilterBtn")
let interestFilterBtn = document.querySelectorAll(".interestFilterBtn")
let industryFilter = document.querySelectorAll(".industryFilter")
let interestFilter = document.querySelectorAll(".interestFilter")

dashboardFilter.forEach((item) => {
    item.style.display = "none"
})

industryFilter.forEach((item) => {
    item.style.display = "none"
})

interestFilter.forEach((item) => {
    item.style.display = "none"
})



allfilter.forEach((item) => {
    item.addEventListener("click", () => {
        closeOtherFilterExtension()
        resetFixedTop()
        if(item.classList.contains("dashboardFilterBtn")){
            filterExtension.forEach((filterEx) => {
                if(filterEx.classList.contains("dashboardFilter")){
                    filterEx.style.display = "flex";
                }
            })
            item.parentElement.parentElement.classList.add("extended-filter")
        }else if(item.classList.contains("industryFilterBtn")){
            filterExtension.forEach((filterEx) => {
                if(filterEx.classList.contains("industryFilter")){
                    filterEx.style.display = "flex";
                }
            })
            item.parentElement.parentElement.classList.add("extended-filter")
        }else if(item.classList.contains("interestFilterBtn")){
                filterExtension.forEach((filterEx) => {
                    if(filterEx.classList.contains("interestFilter")){
                        filterEx.style.display = "flex";
                    }
                })
                item.parentElement.parentElement.classList.add("extended-filter")
            }
    })
});


// remove sticky menu
function resetFixedTop() {
    allfilter.forEach((item) => {
        item.parentElement.parentElement.classList.remove("extended-filter")
    })
} 


// close other extended filters 
function closeOtherFilterExtension(){
    filterExtension.forEach((item) => {
        item.style.display = "none";
    })
}

// dashboard extended filter highlight
innerFilterItem.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.previousElementSibling){
            item.previousElementSibling.classList.remove("innerFilterSelected")
        }
        item.classList.add("innerFilterSelected")
        if(item.nextElementSibling){
            item.nextElementSibling.classList.remove("innerFilterSelected")
        }
    })
})

// industry and industry extended filter highlight
let industrest = document.querySelectorAll(".industrest")

industrest.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.previousElementSibling){
            item.previousElementSibling.classList.remove("industrestSelected")
        }
        item.classList.add("industrestSelected")
        if(item.nextElementSibling){
            item.nextElementSibling.classList.remove("industrestSelected")
        }
    })
})




