const question = document.querySelector('.accordion__element--title');
const activeElement = document.querySelectorAll('.is-open');
question.addEventListener('click', function(){
    alert('dziala');

    for (let i=0; i<activeElement.lenght; i++){
        activeElement[i].classList.toggle('is-open')
    }
})
