const navButton = document.querySelector('.menu_phoneWidth_button')
const openedNav = document.querySelector('.nav_phoneWidth_opened')
const openNav = () => {
  navButton.onclick = () => {
    openedNav.classList.toggle('active')
    console.log('1')
  }
}
openNav()
