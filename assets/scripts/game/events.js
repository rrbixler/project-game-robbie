
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
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

const onResetBoard = function (event) {
  event.preventDefault()
  $('.col-4').text('')
  $('.col-4').on('click', onPlacePiece)
  $('.col-4').on('click', changeTurn)
}

let currentTurn = 'O'
const changeTurn = function () {
  if (currentTurn === 'O') {
    currentTurn = 'X'
  } else {
    currentTurn = 'O'
  }
  return currentTurn
}

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
    $('.col-4').off('click', onPlacePiece)
    $('.col-4').off('click', changeTurn)
  } else if ($('#four').text() === 'X' && $('#five').text() === 'X' && $('#six').text() === 'X') {
    $('.score-display').text('X wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#seven').text() === 'X' && $('#eight').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'X' && $('#four').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#two').text() === 'X' && $('#five').text() === 'X' && $('#eight').text() === 'X') {
    $('.score-display').text('X wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'X' && $('#six').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'X' && $('#five').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'X' && $('#five').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#two').text() === 'O' && $('#three').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#four').text() === 'O' && $('#five').text() === 'O' && $('#six').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#seven').text() === 'O' && $('#eight').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#four').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#two').text() === 'O' && $('#five').text() === 'O' && $('#eight').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'O' && $('#six').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#five').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'O' && $('#five').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() !== '' && $('#two').text() !== '' && $('#three').text() !== '' && $('#four').text() !== '' && $('#five').text() !== '' && $('#six').text() !== '' && $('#seven').text() !== '' && $('#eight').text() !== '' && $('#nine').text() !== '') {
    $('.score-display').text('Draw!')
    $('.col-4').off('click', onPlacePiece)
  } else {
    $('.score-display').text('')
  }
}

// const onStopPiece = $('.col-4').on('click', function (event) {
//   console.log('event.target is ', event.target)
//   return $(event.target)
// })
// $('.col-4').on('click', function (event) {
//   console.log('event.type is ', event.type)
// })

const onCreateBoard = function (event) {
  event.preventDefault()
  api.createGame()
  // $('.col-4').on('click', onPlacePiece, currentTurn)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateError)
}
// const onUpdateBoard = function (event) {
//   event.preventDefault()
//   api.updateGame()
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameError)
// }

module.exports = {
  onPlacePiece,
  onScoreDisplay,
  onCreateBoard,
  // onUpdateBoard
  onResetBoard
  // onEndGame
}
