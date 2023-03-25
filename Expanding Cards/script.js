var panels = document.querySelectorAll('.panel');

panels.forEach(function (pan) {   /*forEach function is used*/
    pan.addEventListener('mouseover', function () {
        removeActiveClass();
        pan.classList.add('active');
    })
})

function removeActiveClass() {
    panels.forEach(function (pan) {
        pan.classList.remove('active');
    })
}