'use strict'

const events = require('./game/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.col-4').on('click', events.onPlacePiece)
  // $('#col-4').on('click', events.onTakenPiece)
  // $('#col-4').on('click', events.onPlacePieceO)
})
