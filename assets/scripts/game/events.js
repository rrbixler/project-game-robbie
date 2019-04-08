
const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
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
let gameOver = false
let currentTurn = 'X'
const changeTurn = function () {
  if (currentTurn === 'X') {
    currentTurn = 'O'
  } else {
    currentTurn = 'X'
  }
}

const onPlacePiece = function (event) {
  const gameIndex = $(event.target).data('id')
  const gameValue = $(event.target).text()
  // console.log('event.target is ', event.target)
  if ($(event.target).text() === '') {
    $(event.target).text(currentTurn)
    onScoreDisplay()
    api.updateGame(gameIndex, gameValue, gameOver)
  } else {
    console.log('invalid move')
  }
  // console.log('event target text is: ', $(event.target).text())
  // console.log('event target data cell index is: ', $(event.target).data('id'))

  // console.log('gameIndex, ', gameIndex)
  // console.log('gameValue, ', gameValue)
  // console.log('gameOver, ', gameOver)
}

//   const boxArrayIndex = $(event.target.id)
//   store.boxArrayIndex = boxArrayIndex
//
// const updateCell = function (event) {
//   data.game.cells.splice(store.boxArrayIndex, 1, store.boxValue)
// }

// let gameOver = false
// const overToggle = function (event) {
//   if ($('.score-display').text() !== '') {
//     gameOver = true
//   }
// }
// const gameEnd = overToggle()
// store.gameEnd = gameEnd

const onScoreDisplay = function () {
  if ($('#one').text() === 'X' && $('#two').text() === 'X' && $('#three').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
    // $('.col-4').off('click', changeTurn)
  } else if ($('#four').text() === 'X' && $('#five').text() === 'X' && $('#six').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#seven').text() === 'X' && $('#eight').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'X' && $('#four').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#two').text() === 'X' && $('#five').text() === 'X' && $('#eight').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'X' && $('#six').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'X' && $('#five').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'X' && $('#five').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#two').text() === 'O' && $('#three').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#four').text() === 'O' && $('#five').text() === 'O' && $('#six').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#seven').text() === 'O' && $('#eight').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#four').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#two').text() === 'O' && $('#five').text() === 'O' && $('#eight').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'O' && $('#six').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#five').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#three').text() === 'O' && $('#five').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else if ($('#one').text() !== '' && $('#two').text() !== '' && $('#three').text() !== '' && $('#four').text() !== '' && $('#five').text() !== '' && $('#six').text() !== '' && $('#seven').text() !== '' && $('#eight').text() !== '' && $('#nine').text() !== '') {
    $('.score-display').text('Draw!')
    gameOver = true
    $('.col-4').off('click', onPlacePiece)
  } else {
    changeTurn()
  }
  // const gameEnd = gameOver
  // store.gameEnd = gameEnd
}

const newVariables = function () {
  currentTurn = 'X'
  gameOver = false
  $('.col-4').empty()
  $('.score-display').empty()
  // store.gameEnd = gameOver
  // $('.col-4').on('click', onPlacePiece)
  // $('.col-4').empty()
  // $('.col-4').on('click', changeTurn)
  // $('.col-4').on('click', changeTurn)
}

const onCreateBoard = function (event) {
  event.preventDefault()
  newVariables()
  console.log(gameOver)
  $('.col-4').on('click', onPlacePiece)
  api.createGame()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateError)
}

const onGetGames = function (response) {
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesError)
}
module.exports = {
  onPlacePiece,
  onScoreDisplay,
  onCreateBoard,
  gameOver,
  onGetGames
  // onEndGame
}
