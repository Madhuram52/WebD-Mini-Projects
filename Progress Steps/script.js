var progress = document.getElementById('progress');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var circles = document.querySelectorAll('.circle');

var currentActive = 1;
next.addEventListener('click', function () {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})
prev.addEventListener('click', function () {
    currentActive--;
    if (currentActive < 0) {
        currentActive = 0;
    }
    update();
})
// console.log(currentActive);

function update() {
    circles.forEach(function (circle, indx) {
        if (indx < currentActive) {
            circle.classList.add('active');
        }
        else
            circle.classList.remove('active');
    })
    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if(currentActive===circles.length){
        next.disabled = true;
    }
    else {
        next.disabled = false;
        prev.disabled=false;
    }
    const actives=document.querySelectorAll('.active');
    progress.style.width=(((actives.length-1)/(circles.length-1) *100)+'%');

}

