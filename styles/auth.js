let signUpBtn = document.getElementById("signUp")
let signup = document.querySelector(".signUPPlate")
let authenticate = document.querySelector(".AuthPlate")


authenticate.style.display = "none";
signUpBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    signup.style.display = "none";
    authenticate.style.display = "flex";
    
})