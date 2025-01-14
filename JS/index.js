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

const reviews = document.querySelectorAll('.reviews_container_block')
const reviewsVideo = document.querySelector('.reviews_container_video')
const reviewsPogination = document.querySelectorAll(
  '.reviews_container_pogination_el',
)

const reviewsArr = Array.from(reviews)
reviewsArr.push(reviewsVideo)

function sliderPog(pagination, slidesArray) {
  let indexSlide = 1

  pagination.forEach((el, i) => {
    el.onclick = () => {
      indexSlide = i

      pagination.forEach((elements) => {
        elements.classList.remove('active')
      })
      el.classList.add('active')
      showSlide()
    }
  })
  function showSlide() {
    slidesArray.forEach((review, i) => {
      review.classList.remove('active')
      if (i == indexSlide) {
        review.classList.add('active')
      }
    })
  }
  showSlide()
}
sliderPog(swiperPogination, swiperSlide)
sliderPog(reviewsPogination, reviewsArr)
