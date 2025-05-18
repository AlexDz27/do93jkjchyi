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