'use strict';

var swiper = new Swiper(".mySwiper", {
    //slidesPerView: 3,
    //spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

const aboutBTN = document.querySelector('.InSite .insite_title h1 button');
const closedBTN = document.querySelector('.InSite .career_content button');
const content = document.querySelector('.InSite .career_content');

function onClickAboutBTN(event) {
    event.preventDefault();
    content.classList.remove('click');
}
aboutBTN.addEventListener("click", onClickAboutBTN)

function closedContent(event) {
    event.preventDefault();
    content.classList.add('click');
}
closedBTN.addEventListener("click", closedContent);


const InMENU = document.querySelectorAll('.InSite .insite_menu>ul li a');
//console.log(InMENU);

let i = 0;
function onClickInMENU(event) {
    event.preventDefault();
    //console.log(this);
    for (i = 0; i < InMENU.length; i++) {
        //console.log(InMENU[i]);
        InMENU[i].classList.remove('blue');
    }
    this.classList.add('blue');
}

for (i = 0; i < InMENU.length; i++) {
    InMENU[i].addEventListener("click", onClickInMENU);
}

const InsiteMenubarBTN = document.querySelector('.InSite .insite_menu .insite_menubar>button>a');
const InsiteMenuMore = document.querySelector('.InSite .insite_menu .more_insite_menubar');

function onClickInsiteMenubar(event) {
    event.preventDefault();
    if (InsiteMenubarBTN.className === "") {
        InsiteMenubarBTN.classList.add('bgblue');
        InsiteMenuMore.classList.remove('click');
    } else {
        InsiteMenubarBTN.classList.remove('bgblue');
        InsiteMenuMore.classList.add('click');
    }
}

InsiteMenubarBTN.addEventListener('click', onClickInsiteMenubar);