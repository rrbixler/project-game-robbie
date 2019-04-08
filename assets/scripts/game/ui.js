const store = require('../store.js')
// const events = require('./events.js')

const onPlacePieceSuccess = function (response) {
  console.log('successfully placed piece to: ', response)
  store.place = response.place
}

const onResetSuccess = function () {
  $('.col-4').text('')
}

const onResetFailure = function () {
  // console.log('it broke')
  // $('#message').text('Index Request Failed')
  // $('#message').css('color', 'coral')
}

// const onCreateSuccess = function (apiResponse) {
//   // $('#message').text('Congrats. Your book was created!')
//   $('.col-4').val('')
// }
const onCreateSuccess = function (response) {
  console.log('successfully created a new game: ', response)
  store.game = response.game
}

const onCreateError = function (data) {
  console.log('didnt work', data)
}

const updateGameSuccess = function (data) {
  console.log('successfully updated game: ', data)
  store.games = data.games
}

const updateGameFailure = function (data) {
  console.log('did not work', data)
}

module.exports = {
  onPlacePieceSuccess,
  onResetSuccess,
  onResetFailure,
  onCreateSuccess,
  onCreateError,
  updateGameSuccess,
  updateGameFailure
}
