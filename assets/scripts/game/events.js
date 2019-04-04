
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
    $('.player-indicator').text('Player ' + $(event.target).text() + ' just Went!!')
  } else {
    $('.player-indicator').text('')
  }
}

const onScoreDisplay = function (event) {
  console.log('player chose square ', event.target)
  if ($('#one').text() === 'X' && $('#two').text() === 'X' && $('#three').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#four').text() === 'X' && $('#five').text() === 'X' && $('#six').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#seven').text() === 'X' && $('#eight').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#one').text() === 'X' && $('#four').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#two').text() === 'X' && $('#five').text() === 'X' && $('#eight').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#three').text() === 'X' && $('#six').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#one').text() === 'X' && $('#five').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#three').text() === 'X' && $('#five').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
  } else if ($('#one').text() === 'O' && $('#two').text() === 'O' && $('#three').text() === 'O') {
    $('.score-display').text('O wins!')
  } else if ($('#four').text() === 'O' && $('#five').text() === 'O' && $('#six').text() === 'O') {
    $('.score-display').text('O wins!')
  } else if ($('#seven').text() === 'O' && $('#eight').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
  } else if ($('#one').text() === 'O' && $('#four').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
  } else if ($('#two').text() === 'O' && $('#five').text() === 'O' && $('#eight').text() === 'O') {
    $('.score-display').text('O wins!')
  } else if ($('#three').text() === 'O' && $('#six').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
  } else if ($('#one').text() === 'O' && $('#five').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
  } else if ($('#three').text() === 'O' && $('#five').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
  } else {
    $('.score-display').text('')
  }
}
// ($('#three').text() === 'O' && $('#five').text() === 'O' && $('#seven').text() === 'O')
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
  onPlacePiece,
  onScoreDisplay
  // onTakenPiece
  // onStopPiece
}
