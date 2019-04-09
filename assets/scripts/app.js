'use strict'
const events = require('./game/events.js')
const userEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  $('.col-3').on('click', events.onPlacePiece)
  userEvents.addHandlers()
  $('#create-game').on('click', events.onCreateBoard)
  $('#stats').on('click', events.onGetGames)
})
