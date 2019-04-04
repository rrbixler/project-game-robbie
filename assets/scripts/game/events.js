
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
let currentTurn = 'O'
const changeTurn = function () {
  if (currentTurn === 'O') {
    currentTurn = 'X'
  } else {
    currentTurn = 'O'
  }
  return currentTurn
}

const dontChange = function () {
  if ($(event.target).text === 'O') {
    currentTurn = 'O'
  } else {
    currentTurn = 'X'
  }
  return currentTurn
}

// $(event.target).text === 'O') {
// //
// const xBox = ($(event.target).text === 'X')
// const oBox = ($(event.target).text === 'O')
// const determineText = function () {
//   if (xBox === true) {
//     return
//   } else {
//     text =
//   }
//   return text
// }
// let target = $(event.target)
// const getTarget = function () {
//   if (target.text === 'X' || target.text === 'O') {
//     target = target.text()
//   } else {
//     target = target.text(changeTurn())
//   }
//   return target
// }

const onPlacePiece = function (event) {
  console.log('event.target is ', event.target)
  if ($(event.target).text() === '') {
    $(event.target).text(changeTurn())
  }
}
// $('.col-4').on('click', function (event) {
//   console.log('event.type is ', event.type)
// })

// const onTakenPiece = $('.col-4').on('click', function (event) {
//   console.log('event.target is ', event.target)
//   $(event.target).text(dontChange())
// })
// $('.col-4').on('click', function (event) {
//   console.log('event.type is ', event.type)
// })

// //
// if ($(event.target).text === 'X' || $(event.target).text === 'O') {
//   $(event.target).text()
// } else {
//   $(event.target).text(changeTurn()
// }

// const onStopPiece = $('.col-4').on('click', function (event) {
//   console.log('event.target is ', event.target)
//   return $(event.target)
// })
// $('.col-4').on('click', function (event) {
//   console.log('event.type is ', event.type)
// })

module.exports = {
  onPlacePiece
  // onTakenPiece
  // onStopPiece
}

// const onPlacePieceO = $('.col-4').on('click', function (event) {
//   console.log('event.target is ', event.target)
//   return $(event.target).text(${currentTurn})
// })
// $('.col-4').on('click', function (event) {
//   console.log('event.type is ', event.type)
// })
//
// const onPlacePieceX = $('.col-4').on('click', function (event) {
//   console.log('event.target is ', event.target)
//   return $(event.target).text('X')
// })
// $('.col-4').on('click', function (event) {
//   console.log('event.type is ', event.type)
// })
