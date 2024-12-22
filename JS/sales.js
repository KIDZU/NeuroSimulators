const imagesSales = document.querySelectorAll('.sale_slider_card_img')
const arrowSales = document.querySelectorAll(
  '.sale_slider_switches_switch_arrow',
)
let imagesSalesIndex = 0

const showImagesSales = (index) => {
  imagesSales[imagesSalesIndex].classList.remove('active')
  imagesSales[index].classList.add('active')
  imagesSalesIndex = index
}
arrowSales.forEach((e) => {
  e.onclick = () => {
    if (event.target.classList.contains('prev')) {
      let index = imagesSalesIndex - 1
      if (index < 0) {
        index = imagesSales.length - 1
        showImagesSales(index)
      } else {
        showImagesSales(index)
      }
    } else if (event.target.classList.contains('next')) {
      let index = imagesSalesIndex + 1
      if (index >= imagesSales.length) {
        index = 0
        showImagesSales(index)
      } else {
        showImagesSales(index)
      }
    }
  }
})
showImagesSales(imagesSalesIndex)
