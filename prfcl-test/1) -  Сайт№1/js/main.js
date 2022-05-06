// Табы-------------------------------------------------------
const navBtn1 = document.querySelector('.navBtn1');
const navBtn2 = document.querySelector('.navBtn2');
const navBtn3 = document.querySelector('.navBtn3');
const tabBlock1 = document.querySelector('.product__description');
const tabBlock2 = document.querySelector('.product__specifications');
const tabBlock3 = document.querySelector('.product__reviews');
const navButtons = document.querySelectorAll('.nav-menu__item');

navButtons.forEach((item) => {
  item.addEventListener('click', transition);
})

function transition (event) {
  console.log(event.currentTarget);
    if (event.currentTarget === navBtn1) {
      navBtn1.classList.add('nav-menu__item--active');
      navBtn2.classList.remove('nav-menu__item--active');
      navBtn3.classList.remove('nav-menu__item--active');
      tabBlock1.style.display = 'flex';
      tabBlock2.style.display = 'none';
      tabBlock3.style.display = 'none';
    } else if (event.currentTarget === navBtn2) {
      navBtn2.classList.add('nav-menu__item--active');
      navBtn1.classList.remove('nav-menu__item--active');
      navBtn3.classList.remove('nav-menu__item--active');
      tabBlock1.style.display = 'none';
      tabBlock2.style.display = 'block';
      tabBlock3.style.display = 'none';
    } else if (event.currentTarget === navBtn3) {
      navBtn3.classList.add('nav-menu__item--active');
      navBtn1.classList.remove('nav-menu__item--active');
      navBtn2.classList.remove('nav-menu__item--active');
      tabBlock1.style.display = 'none';
      tabBlock2.style.display = 'none';
      tabBlock3.style.display = 'block';
    };
}


// Модальное окно:
const modal = document.querySelector('.modal');
const btns = document.querySelectorAll('.myBtn');
const span = document.querySelector('.close');


btns.forEach((btn) => {
  btn.addEventListener('click', modalOpen);
})

function modalOpen() {
  modal.style.display = "block";
  document.querySelector("body").style.maxHeight = "100vh";
  document.querySelector("body").style.overflow = "hidden";
}

span.onclick = function() {
  modal.style.display = "none";
  document.querySelector("body").style.maxHeight = "100%";
  document.querySelector("body").style.overflow = "auto";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector("body").style.maxHeight = "100%";
    document.querySelector("body").style.overflow = "auto";
  }
};

