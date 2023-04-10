const boxes= document.querySelectorAll('.box');
window.addEventListener('scroll',checkBoxes);

checkboxes();

function checkBoxes(){
    const triggerButtom=window.innerHeight/5 *4;
    boxes.forEach(function(box){
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop<triggerButtom){
            box.classList.add('show');
        }
        else
        {
            box.classList.remove('show');
        }
    })
}