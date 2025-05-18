// TODO: also make POC of dumb tg posts and uploading data via them?

window.addEventListener('popstate', (e) => {
  // console.log('nav occured')
  // console.log(e.state)

  main.classList.add('main--active')
  section.classList.remove('section--active')
})

const main = document.getElementById('main')
const section = document.getElementById('section')

const sneakers = main.children
for (const sneaker of sneakers) {
  sneaker.onclick = () => {
    // const id = Number(sneaker.dataset.id)
    // const datum = data[id - 1]
    // console.log(datum)

    main.classList.remove('main--active')
    section.classList.add('section--active')
    window.history.pushState(
      {page: 'section'},
      'Sneaker',
      '/sneaker'
    )
    // console.log(history.length)
    // console.log(history)
  }
}