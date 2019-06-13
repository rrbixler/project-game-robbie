
const api = require('./api.js')
const ui = require('./ui.js')

// first, declaring that the boolean value for gameover is equal to true
let gameOver = false
// defining that the current turn will always begin with X=
let currentTurn = 'X'
// function that toggles between the players x and o
const changeTurn = function () {
  // if statement for if the current turn is x, the next player that will go will be o
  if (currentTurn === 'X') {
    currentTurn = 'O'
  } else {
  //  if the next player is not x, (player o), then player x is up next
    currentTurn = 'X'
  }
}

// when the board is click, running on on the click event in the app.js folder for classs .col-3
const onPlacePiece = function (event) {
  // if whatever is being clicked with a declared ID does not yet have a value,
  if ($(event.target).text() === '') {
    // then that text of the div with that id will take the current turn( which will start with x)
    $(event.target).text(currentTurn)
    // and then the score display function will run on that click event also,
    // iterating through that entire function, which will check for a score.
    // and if no score is found, than it will default to onScoreDisplay and switch turns
    //
    onScoreDisplay()
    // then the player indicator div will take the value of the text in parenthesis
    $('.player-indicator').text(currentTurn + '\'s turn!')
    // declared now are the values of what the text is (x or o), and the value of what the data
    // id of what was clicked, which is defined in the html document in the same
    // place as where column 3 is defined.
    const gameIndex = $(event.target).data('id')
    const gameValue = $(event.target).text()
    // then this information will be inserted into the function fmor the api folder
    // which is called below, and passed the parameters that will be inserted fomr this folder
    // into the api folder
    // folder to be stored, where the value of gameover will be assessed
    api.updateGame(gameIndex, gameValue, gameOver)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
}
// functions that define what happens when the game is over
// when x is the winner of the game
const endGameX = function () {
  $('.score-display').text('X wins! click \'new game\' to keep playing').show()
  setTimeout(() => {
    $('.score-display').text('').hide()
    $('.col-3').empty()
    $('.container').hide()
  }, 2000)
  gameOver = true
  $('.col-3').off('click', onPlacePiece)
  $('.player-indicator').hide()
}
// when o is the winner of the game
const endGameO = function () {
  $('.score-display').text('O wins! click \'new game\' to keep playing').show()
  setTimeout(() => {
    $('.score-display').text('').hide()
    $('.col-3').empty()
    $('.container').hide()
  }, 2000)
  gameOver = true
  $('.col-3').off('click', onPlacePiece)
  $('.player-indicator').hide()
}
// when no one wins the game and it results in a draw
const endGameDraw = function () {
  $('.score-display').text('draw! click \'new game\' to keep playing').show()
  setTimeout(() => {
    $('.score-display').text('').hide()
    $('.col-3').empty()
    $('.container').hide()
  }, 2000)
  gameOver = true
  $('.col-3').off('click', onPlacePiece)
  $('.player-indicator').hide()
}

// winning combinations function
const onScoreDisplay = function () {
  if ($('#one').text() === 'X' && $('#two').text() === 'X' && $('#three').text() === 'X') {
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
  $('.col-3').on('click', onPlacePiece)
  $('.messages').empty()
  $('.player-indicator').show()
  $('.container').show()
  $('.col-3').show()
  $('.stats-display').show()
}
// function that runs on the click event for the new game button
const onCreateBoard = function (event) {
  event.preventDefault()
  newVariables()
  api.createGame()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateError)
}
// function that funs when clicking on get games button
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
