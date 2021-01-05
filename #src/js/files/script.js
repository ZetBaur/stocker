





let langItem = document.getElementsByClassName("top-header__lang-item");

for (let i = 0; i < langItem.length; i++) {
    langItem[i].addEventListener("click", function () {
        let currentLang = document.getElementsByClassName("_active");
        currentLang[0].className = currentLang[0].className.replace(" _active", "");
        this.className += " _active";
    });
}


let menuLink = document.getElementsByClassName("menu__link");

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        menu.classList.remove('open');

    });
}

let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.menu-close');
let menuItem = document.querySelector('.menu__link');



burger.addEventListener("click", function () {
    menu.classList.add('open');
});


menuClose.addEventListener("click", function () {
    menu.classList.remove('open');
});

