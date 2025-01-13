const navButton = document.querySelector('.menu_phoneWidth_button')
const openedNav = document.querySelector('.nav_phoneWidth_opened')
const openNav = () => {
  navButton.onclick = () => {
    openedNav.classList.toggle('active')
    console.log('1')
  }
}
openNav()

const swiperSlide = document.querySelectorAll('.swiper-slide')
const swiperPogination = document.querySelectorAll(
  '.swiper_container_pogination_el',
)

let swiperIndex = 1

swiperPogination.forEach((el, i) => {
  el.onclick = () => {
    swiperIndex = i

    swiperPogination.forEach((elements) => {
      elements.classList.remove('active')
    })
    el.classList.add('active')
    showSwiperSlide()
  }
})
function showSwiperSlide() {
  swiperSlide.forEach((slide, i) => {
    slide.classList.remove('active')
    if (i == swiperIndex) {
      slide.classList.add('active')
    }
  })
}
showSlide()

const reviews = document.querySelectorAll('.reviews_container_block')
const reviewsVideo = document.querySelector('.reviews_container_video')
const reviewsPogination = document.querySelectorAll(
  '.reviews_container_pogination_el',
)

const reviewsArr = Array.from(reviews)
reviewsArr.push(reviewsVideo)

let reviewsIndex = 1

reviewsPogination.forEach((el, i) => {
  el.onclick = () => {
    reviewsIndex = i

    reviewsPogination.forEach((elements) => {
      elements.classList.remove('active')
    })
    el.classList.add('active')
    showSlide()
  }
})
function showSlide() {
  reviewsArr.forEach((review, i) => {
    review.classList.remove('active')
    if (i == reviewsIndex) {
      review.classList.add('active')
    }
  })
}
showSlide()
