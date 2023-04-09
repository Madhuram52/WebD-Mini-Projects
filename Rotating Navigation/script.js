const open =document.getElementById('open');
const close =document.getElementById('close');
const container=document.querySelector('.container');

open.addEventListener('click', function(){
    container.classList.add('show-nav');
    document.querySelector("body").classList.add("stop-scrolling");
    document.documentElement.scrollTop=0;
})

close.addEventListener('click', function(){
    container.classList.remove('show-nav');
    document.querySelector("body").classList.remove("stop-scrolling");
})