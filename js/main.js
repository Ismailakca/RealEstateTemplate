const buton = document.querySelector('.Header__button')
const menu = document.querySelector('.Header__nav-link')

buton.addEventListener('click', () => {
   menu.classList.toggle('is_show')
})