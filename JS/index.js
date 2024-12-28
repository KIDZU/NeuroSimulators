const navButton = document.querySelector('.menu_phoneWidth_button')
const openedNav = document.querySelector('.nav_phoneWidth_opened')
const openNav = () => {
  navButton.onclick = () => {
    openedNav.classList.toggle('active')
    console.log('1')
  }
}
openNav()

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  slidesPerView: 1,
  spaceBetween: 100,
})
