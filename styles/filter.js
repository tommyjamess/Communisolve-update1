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


let dashboardFilterBtn = document.querySelectorAll(".dashboardFilterBtn")
let dashboardFilter = document.querySelectorAll(".dashboardFilterOuter")
let industryFilterOuter = document.querySelectorAll(".industryFilterOuter")
let interestFilterOuter = document.querySelectorAll(".interestFilterOuter")
let innerFilterItems = document.querySelectorAll(".inner-filter-item")

allfilter.forEach((item) => {
    item.addEventListener("click", ()=> {
        if(item.classList.contains("dashboardFilterButton")){
            dashboardFilter.forEach((dashItem) => {
                RemoveInnerFilter()
                dashItem.classList.add("displayInnerFilter")
            })
        }else if(item.classList.contains("industryFilterButton")){
            industryFilterOuter.forEach((industryItem) => {
                RemoveInnerFilter()
                industryItem.classList.add("displayInnerFilter")
            })
        }else if(item.classList.contains("interestFilterButton")){
            interestFilterOuter.forEach((interestItem) => {
                RemoveInnerFilter()
                interestItem.classList.add("displayInnerFilter")
            })
        }else{
            RemoveInnerFilter()
        }
    })
})


function RemoveInnerFilter(){
    innerFilterItems.forEach((filterItem) => {
        filterItem.classList.remove("displayInnerFilter")
    })
}


let industryInnerBtn = document.querySelectorAll(".industryInnerBtn")
let interestInnerBtn = document.querySelectorAll(".interestInnerBtn")
let dashboardInnerBtn = document.querySelectorAll(".dashboardInnerBtn")
let followingList = document.querySelectorAll(".followingList")
let dashboardCard = document.querySelectorAll(".dashboard-card")

// dashboard 
dashboardInnerBtn.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.classList.contains("industryDashBtn")){
            removeDashboardBtnBackground()
            item.classList.add("inner-filter-btn-background")
            showDashboardIdustry()
        }else if(item.classList.contains("interestDashBtn")){
            removeDashboardBtnBackground()
            item.classList.add("inner-filter-btn-background")
            showDashboardInterest()
        }
    })
})

function showDashboardInterest(){
    dashboardCard.forEach((listItem) => {
        if(listItem.classList.contains("interestDashboard")){
            listItem.classList.add("displayDashboard")
            listItem.classList.remove("removeDashboard")
            listItem.previousElementSibling.classList.add("removeDashboard")
        }
    })
}

function showDashboardIdustry(){
    dashboardCard.forEach((listItem) => {
        if(listItem.classList.contains("industryDashboard")){
            listItem.classList.add("displayDashboard")
            listItem.classList.remove("removeDashboard")
            listItem.nextElementSibling.classList.add("removeDashboard")
        }
    })
}

function removeDashboardBtnBackground(){
    dashboardInnerBtn.forEach((item) => {
        item.classList.remove("inner-filter-btn-background")
    })
}

// dashboard ends here 



// industry and interest
industryInnerBtn.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.classList.contains("Followed")){
            removeIndustryBtnBackground()
            item.classList.add("inner-filter-btn-background")
            showFollowedList()
        }else if(item.classList.contains("Suggested")){
            removeIndustryBtnBackground()
            item.classList.add("inner-filter-btn-background")
            showSuggestedList()
        }
    })
})

interestInnerBtn.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.classList.contains("Followed")){
            removeInterestBtnBackground()
            item.classList.add("inner-filter-btn-background")
            showFollowedList()
        }else if(item.classList.contains("Suggested")){
            removeInterestBtnBackground()
            item.classList.add("inner-filter-btn-background")
            showSuggestedList()
        }
    })
})



function removeIndustryBtnBackground(){
    industryInnerBtn.forEach((item) => {
        item.classList.remove("inner-filter-btn-background")
    })
}
function removeInterestBtnBackground(){
    interestInnerBtn.forEach((item) => {
        item.classList.remove("inner-filter-btn-background")
    })
}

function showFollowedList(){
    followingList.forEach((listItem) => {
        if(listItem.classList.contains("followedGroups")){
            listItem.classList.add("displayFollowList")
            listItem.classList.remove("removeFollowList")
            listItem.nextElementSibling.classList.add("removeFollowList")
        }
    })
}

function showSuggestedList(){
    followingList.forEach((listItem) => {
        if(listItem.classList.contains("suggestedGroups")){
            listItem.classList.add("displayFollowList")
            listItem.classList.remove("removeFollowList")
            listItem.previousElementSibling.classList.add("removeFollowList")
        }
    })
}

// industry and interest ends here 


// ask comments

let askResponses = document.querySelectorAll(".askResponseList")

allfilter.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.classList.contains("askReasonsBtn")){
            showReasonsCard()
        }else if(item.classList.contains("askCommentsBtn")){
            showCommentsCard()
        }
    })
})



function showReasonsCard() {
    askResponses.forEach((item) => {
        if(item.classList.contains("askReasons")){
            item.classList.add("displayAskResponse")
            item.classList.remove("removeAskResponse")
            item.nextElementSibling.classList.add("removeAskResponse")
        }
    })
}

function showCommentsCard() {
    askResponses.forEach((item) => {
        if(item.classList.contains("askComments")){
            item.classList.add("displayAskResponse")
            item.classList.remove("removeAskResponse")
            item.previousElementSibling.classList.add("removeAskResponse")
        }
    })
}