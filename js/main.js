// TODO: also make POC of dumb tg posts and uploading data via them?

window.addEventListener('popstate', (e) => {
  main.classList.add('main--active')
  section.classList.remove('section--active')
})

const main = document.getElementById('main')
const section = document.getElementById('section')
const contentImg = document.getElementById('contentImg')
const contentTitle = document.getElementById('contentTitle')
const contentPrice = document.getElementById('contentPrice')

const sneakers = main.children
for (const sneaker of sneakers) {
  sneaker.onclick = () => {
    main.classList.remove('main--active')
    section.classList.add('section--active')
    window.history.pushState(
      {page: 'section'},
      'Sneaker',
      '/sneaker'
    )
    window.scrollTo(0, 0)

    const id = Number(sneaker.dataset.id)
    const datum = data[id - 1]
    contentImg.src = datum.img
    contentTitle.innerText = datum.name
    contentPrice.innerText = datum.price
  }
}

/** SLIDER **/
const track = document.getElementById('track')
// const btnPrev = document.getElementById('btnPrev')
// const btnNext = document.getElementById('btnNext')
// btnPrev.onclick = () => {
//   track.style.transform = `translate3d(0, 0, 0)`
// }
// btnNext.onclick = () => {
//   track.style.transform = `translate3d(-100%, 0, 0)`
// }

let touchStartX = 0
let touchEndX = 0
let threshold = 50
track.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX
}, {passive: true})
track.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX
  const difference = touchStartX - touchEndX;
    if (difference > threshold) {
      // Swipe left - go to next slide
      track.style.transform = `translate3d(-100%, 0, 0)`
    } else if (difference < -threshold) {
      // Swipe right - go to previous slide
      track.style.transform = `translate3d(0, 0, 0)`
    }
}, {passive: true})