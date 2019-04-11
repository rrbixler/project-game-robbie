
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
  if ($(event.target).text() === '') {
    $(event.target).text(currentTurn)
    onScoreDisplay()
    $('.player-indicator').text(currentTurn + '\'s turn!')
    const gameIndex = $(event.target).data('id')
    const gameValue = $(event.target).text()
    api.updateGame(gameIndex, gameValue, gameOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}
// functions that define what happens when the game is over
// when x is the winner of the game
const endGameX = function () {
  $('.score-display').text('X wins!')
  gameOver = true
  $('.col-3').off('click', onPlacePiece)
  $('.player-indicator').hide()
}
// when o is the winner of the game
const endGameO = function () {
  $('.score-display').text('X wins!')
  gameOver = true
  $('.col-3').off('click', onPlacePiece)
  $('.player-indicator').hide()
}
// when no one wins the game and it results in a draw
const endGameDraw = function () {
  $('.score-display').text('draw!')
  gameOver = true
  $('.col-3').off('click', onPlacePiece)
  $('.player-indicator').hide()
}
// winning combinations function
const onScoreDisplay = function () {
  if (($('#one').text() && $('#two').text() && $('#three').text()) === 'X') {
    endGameX()
  } else if ($('#four').text() === 'X' && $('#five').text() === 'X' && $('#six').text() === 'X') {
    endGameX()
  } else if ($('#seven').text() === 'X' && $('#eight').text() === 'X' && $('#nine').text() === 'X') {
    endGameX()
  } else if ($('#one').text() === 'X' && $('#four').text() === 'X' && $('#seven').text() === 'X') {
    endGameX()
  } else if ($('#two').text() === 'X' && $('#five').text() === 'X' && $('#eight').text() === 'X') {
    endGameX()
  } else if ($('#three').text() === 'X' && $('#six').text() === 'X' && $('#nine').text() === 'X') {
    endGameX()
  } else if ($('#one').text() === 'X' && $('#five').text() === 'X' && $('#nine').text() === 'X') {
    endGameX()
  } else if ($('#three').text() === 'X' && $('#five').text() === 'X' && $('#seven').text() === 'X') {
    endGameX()
  } else if ($('#one').text() === 'O' && $('#two').text() === 'O' && $('#three').text() === 'O') {
    endGameO()
  } else if ($('#four').text() === 'O' && $('#five').text() === 'O' && $('#six').text() === 'O') {
    endGameO()
  } else if ($('#seven').text() === 'O' && $('#eight').text() === 'O' && $('#nine').text() === 'O') {
    endGameO()
  } else if ($('#one').text() === 'O' && $('#four').text() === 'O' && $('#seven').text() === 'O') {
    endGameO()
  } else if ($('#two').text() === 'O' && $('#five').text() === 'O' && $('#eight').text() === 'O') {
    endGameO()
  } else if ($('#three').text() === 'O' && $('#six').text() === 'O' && $('#nine').text() === 'O') {
    endGameO()
  } else if ($('#one').text() === 'O' && $('#five').text() === 'O' && $('#nine').text() === 'O') {
    endGameO()
  } else if ($('#three').text() === 'O' && $('#five').text() === 'O' && $('#seven').text() === 'O') {
    endGameO()
  } else if ($('#one').text() !== '' && $('#two').text() !== '' && $('#three').text() !== '' && $('#four').text() !== '' && $('#five').text() !== '' && $('#six').text() !== '' && $('#seven').text() !== '' && $('#eight').text() !== '' && $('#nine').text() !== '') {
    endGameDraw()
  } else {
    changeTurn()
  }
}
// function passed into the function oncreateboard.  these things all happen on that same click event
const newVariables = function () {
  currentTurn = 'X'
  gameOver = false
  $('.col-3').empty()
  $('.score-display').empty()
  $('.player-indicator').empty()
}
// function that runs on the click event for the new game button
const onCreateBoard = function (event) {
  event.preventDefault()
  newVariables()
  $('.col-3').on('click', onPlacePiece)
  $('.messages').empty()
  $('.player-indicator').show()
  $('.container').show()
  $('.col-3').show()
  $('.stats-display').show()
  api.createGame()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateError)
}

const onGetGames = function (response) {
  $('.score-display').empty()
  $('.player-indicator').empty()
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
