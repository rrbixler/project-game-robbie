
const api = require('./api.js')
const ui = require('./ui.js')

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
  // console.log('event.target is ', event.target)
  if ($(event.target).text() === '') {
    $(event.target).text(currentTurn)
    onScoreDisplay()
    $('.player-indicator').text(currentTurn + '\'s turn!')
    const gameIndex = $(event.target).data('id')
    const gameValue = $(event.target).text()
    api.updateGame(gameIndex, gameValue, gameOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else {
    console.log('invalid move')
  }
}

const onScoreDisplay = function () {
  if ($('#one').text() === 'X' && $('#two').text() === 'X' && $('#three').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#four').text() === 'X' && $('#five').text() === 'X' && $('#six').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#seven').text() === 'X' && $('#eight').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#one').text() === 'X' && $('#four').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#two').text() === 'X' && $('#five').text() === 'X' && $('#eight').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#three').text() === 'X' && $('#six').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#one').text() === 'X' && $('#five').text() === 'X' && $('#nine').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#three').text() === 'X' && $('#five').text() === 'X' && $('#seven').text() === 'X') {
    $('.score-display').text('X wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#two').text() === 'O' && $('#three').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#four').text() === 'O' && $('#five').text() === 'O' && $('#six').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#seven').text() === 'O' && $('#eight').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#four').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#two').text() === 'O' && $('#five').text() === 'O' && $('#eight').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#three').text() === 'O' && $('#six').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#one').text() === 'O' && $('#five').text() === 'O' && $('#nine').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#three').text() === 'O' && $('#five').text() === 'O' && $('#seven').text() === 'O') {
    $('.score-display').text('O wins!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else if ($('#one').text() !== '' && $('#two').text() !== '' && $('#three').text() !== '' && $('#four').text() !== '' && $('#five').text() !== '' && $('#six').text() !== '' && $('#seven').text() !== '' && $('#eight').text() !== '' && $('#nine').text() !== '') {
    $('.score-display').text('Draw!')
    gameOver = true
    $('.col-3').off('click', onPlacePiece)
  } else {
    changeTurn()
  }
}

const newVariables = function () {
  currentTurn = 'X'
  gameOver = false
  $('.col-3').empty()
  $('.score-display').empty()
  $('.player-indicator').empty()
}

const onCreateBoard = function (event) {
  event.preventDefault()
  newVariables()
  console.log(gameOver)
  $('.col-3').on('click', onPlacePiece)
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
}
