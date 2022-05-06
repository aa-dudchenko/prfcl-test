$(function () {
  $('.slider__box').slick({
    arrows: false,
    dots: true,
  });
});


// Кнопка меню хедера:
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__nav');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

