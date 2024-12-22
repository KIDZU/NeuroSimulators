// function multiSlider(sliderClassName) {
//   const container = document.querySelector(sliderClassName)
//   const arrowsContainer = container.querySelector('.arrows')
//   const nextArrow = arrowsContainer.querySelector('.next_arrow')
//   const prevArrow = arrowsContainer.querySelector('.prev_arrow')
//   const cards = Array.from(container.querySelectorAll('.card'))
//   const maxCardView = 3
//   let startCardIndex = 0
//   let endCardIndex = maxCardView

//   function renderCards(first, last) {
//     cards.forEach((el) => {
//       el.remove()
//     })
//     if (first < last) {
//       cards.forEach((el, i) => {
//         if (i >= first && i <= last) {
//           container.insertAdjacentElement('beforeend', el)
//         }
//       })
//     } else {
//       cards.forEach((el, i) => {
//         if (i >= first || i <= last) {
//           container.insertAdjacentElement('beforeend', el)
//         }
//       })
//     }
//   }

//   nextArrow.onclick = () => {
//     startCardIndex += 1

//     if (startCardIndex >= cards.length) {
//       startCardIndex = 0
//     }

//     endCardIndex = startCardIndex + maxCardView
//     if (endCardIndex > cards.length - 1) {
//       endCardIndex = maxCardView - (cards.length - 1 - startCardIndex)
//     }
//     renderCards(startCardIndex, endCardIndex)
//   }

//   renderCards(startCardIndex, endCardIndex)
// }
// multiSlider('.novelty_slider')

// new Swiper('.swiper-container ', {
//   direction: 'horizontal',
//   loop: true,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   slidesPerView: 4,
//   spaceBetween: 30,
// })
