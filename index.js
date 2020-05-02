/* 
CLASS SLIDER
TAKES SLIDELIST ARGUMENT. THIS IS THE NODELIST OF UL
*/

const slideList = Array.from(document.querySelectorAll('.myslider-slide'));

const slideUL = document.querySelector('.myslider-list');

const slideIMG = Array.from(document.querySelectorAll('.myslider-slide img'));

// set width of UL element
slideUL.style.width = `${slideList.length * 100}%`;

// set width of image as fraction of list
for (let item of slideIMG) {
    // item.style.width = `${100 / slideList.length}%`;
}

for (let item of slideList) {
    // item.style.width = `${100 / slideList.length}%`;
}


const mysliderFade = (direction) => {
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
            slideUL.style.transform = `translateX(-80%)`;
        }
        // add active class to previous slide
        else {
            slideList[currentPos - 1].classList.add('myslider-slide-active');
            slideUL.style.transform = `translateX(-${(currentPos - 1) * 20}%)`;

        }
    }

    if (direction == 'right') {
        //if position is last, switch to first
        if (currentPos == slideNum) {
            slideList[0].classList.add('myslider-slide-active');
            slideUL.style.transform = `translateX(0%)`;
        }
        //add active class to next slide
        else {
            slideList[currentPos + 1].classList.add('myslider-slide-active');
            slideUL.style.transform = `translateX(-${(currentPos + 1) * 20}%)`;

        }
    }
    // remove active class from old slide
    currentSlide.classList.remove('myslider-slide-active');
};

const mysliderplay = () => {
        window.setInterval(mysliderFade, 5000, 'right');
    
}

document.querySelector('.myslider-control-left').addEventListener('click', (e) => {
    e.preventDefault();
    mysliderFade('left');});

document.querySelector('.myslider-control-right').addEventListener('click', (e) => {
    e.preventDefault();
    mysliderFade('right');});

mysliderplay();