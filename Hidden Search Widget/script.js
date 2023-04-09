const search = document.querySelector(".search");
const butn = document.querySelector(".btn");
const input = document.querySelector(".input");

butn.addEventListener("click",function(){
    search.classList.toggle('active');
    input.focus();
})

