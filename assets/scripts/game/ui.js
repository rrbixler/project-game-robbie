const store = require('../store.js')

const placePieceSuccess = function () {
  $('#col-4').text('x')
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

const onCreateError = function () {
  console.log('didnt work')
}

const updateGameSuccess = function () {
  // $('col-4').val().store.user.cell
}
module.exports = {
  placePieceSuccess,
  onResetSuccess,
  onResetFailure,
  onCreateSuccess,
  onCreateError,
  updateGameSuccess
}
