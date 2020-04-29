/* 
CLASS SLIDER
TAKES SLIDELIST ARGUMENT. THIS IS THE NODELIST OF UL
*/

const slideList = Array.from(document.querySelectorAll('.myslider-slide'));

const myslider = (direction) => {
    // reference to current slide
    let currentSlide = document.querySelector('.myslider-slide-active');

    // position of current slide
    let currentPos = slideList.indexOf(currentSlide);

    // length of slide list
    const slideNum = slideList.length - 1;

    if (direction == 'left') {
        // if position is 0, switch to last slide
        if (currentPos == 0) {
            slideList[slideNum].classList.add('myslider-slide-active');
        }
        // add active class to previous slide
        else {
            slideList[currentPos - 1].classList.add('myslider-slide-active');
        }
    }

    if (direction == 'right') {
        //if position is last, switch to first
        if (currentPos == slideNum) {
            slideList[0].classList.add('myslider-slide-active');
        }
        //add active class to next slide
        else {
            slideList[currentPos + 1].classList.add('myslider-slide-active');
        }
    }
    // remove active class from old slide
    currentSlide.classList.remove('myslider-slide-active');
};

document.querySelector('.myslider-control-left').addEventListener('click', (e) => {
    e.preventDefault();
    myslider('left');});

document.querySelector('.myslider-control-right').addEventListener('click', (e) => {
    e.preventDefault();
    myslider('right');});