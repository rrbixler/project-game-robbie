
const api = require('./api.js')
const ui = require('./ui.js')

// const onPlacePiece =
  // console.log(event)
//   event.preventDefault()
//   // console.log('form submitted')
//
//   api.placePiece()
//     .then(ui.placePieceSuccess)
// }
// const playerOne = 'x'
// const playerTwo = 'o'
//
// let firstMove = playerOne
// if (firstMove === playerOne) {
//   firstMove = playerTwo
// } else {
//   firstMove = playerOne
// }
//

const onPlacePieceX = $('.col-4').on('click', function(event) {
  console.log('event.target is ', event.target)
  return $(event.target).text('X')
})
$('.col-4').on('click', function(event) {
  console.log('event.type is ', event.type)
})

const onPlacePieceO = $('.col-4').on('click', function(event) {
  console.log('event.target is ', event.target)
  return $(event.target).text('O')
})
$('.col-4').on('click', function(event) {
  console.log('event.type is ', event.type)
})

const togglepiece =
module.exports = {
  // addHandler,
  onPlacePieceX,
  onPlacePieceO
}
