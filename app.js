let searchBtn = document.querySelector("#search-btn");
let searchBar =document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm =document.querySelector(".login-form-contaier");
let formClose =document.querySelector("#form-close");
let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");
let videoBtn=document.querySelectorAll(".vid-btn");
 


window.onscroll=()=>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");

    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}


menu.addEventListener("click",() =>{
   menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");

    loginForm.classList.remove("none");
    
});

function login(){
    alert("Login Successful!!")
    loginForm.classList.remove("active");
}
function cancel(){
    
    loginForm.classList.remove("active");
}
function dine(){
    alert("Order Placed!!")
    loginForm.classList.remove("active");
}
function reach(){
    alert("WE WILL REACH YOU SOON ~Team Sahojit Fries")
}
function reg(){
    alert("Your Tabel Has Been Booked!!")
}
function under(){
    alert("Coming Soon.......")
}


searchBtn.addEventListener("click",() =>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});

formBtn.addEventListener("click",() =>{
   
    loginForm.classList.add("active");
});

formClose.addEventListener("click",() =>{
   
    loginForm.classList.remove("active");
});

videoBtn.forEach(btn =>{
    btn.addEventListener("click",() =>{
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let src=btn.getAttribute("src");

        document.querySelector("#video-slider").src=src

    });
});
