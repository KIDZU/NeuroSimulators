const arrowRegionSelector = document.querySelector(
  '.delivery_panel_info_region_text_arrowSelector',
)
const regions = document.querySelectorAll(
  '.delivery_panel_info_region_selector_сities',
)

arrowRegionSelector.onclick = () => {
  arrowRegionSelector.classList.toggle('active')
  if (event.target.classList.contains('active')) {
    regions.forEach((el) => {
      el.classList.add('active')
      el.onclick = () => {
        regions.forEach((elem) => {
          elem.classList.remove('selected')
          elem.classList.remove('active')
          arrowRegionSelector.classList.toggle('active')
        })
        el.classList.add('selected')
      }
    })
  } else {
    regions.forEach((el) => {
      el.classList.remove('active')
    })
  }
}
