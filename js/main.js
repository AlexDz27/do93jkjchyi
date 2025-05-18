// const theCard = document.getElementById('theCard')
// console.log(Number(theCard.dataset.id))
// TODO: also make POC of dumb tg posts and uploading data via them?


const sneakers = document.getElementById('main').children
for (const sneaker of sneakers) {
  sneaker.onclick = () => {
    const id = Number(sneaker.dataset.id)
    const datum = data[id - 1]
    console.log(datum)
  }
}