'use strict'

const events = require('./game/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  $('.col-4').on('click', events.onPlacePiece)
  $('.col-4').on('click', events.changeTurn)
  $('#one').on('click', events.onScoreDisplay)
  $('#two').on('click', events.onScoreDisplay)
  $('#three').on('click', events.onScoreDisplay)
  $('#four').on('click', events.onScoreDisplay)
  $('#five').on('click', events.onScoreDisplay)
  $('#six').on('click', events.onScoreDisplay)
  $('#seven').on('click', events.onScoreDisplay)
  $('#eight').on('click', events.onScoreDisplay)
  $('#nine').on('click', events.onScoreDisplay)
  $('.col-4').on('click', events.onUpdateGame)
  $('.col-4').on('click', events.overToggle)
  userEvents.addHandlers()
  $('#reset-game').on('submit', events.onResetBoard)
  $('#create-game').on('submit', events.onCreateBoard)
  // $('#col-4').on('click', events.onTakenPiece)
  // $('#col-4').on('click', events.onPlacePieceO)
})
