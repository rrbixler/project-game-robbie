const store = require('../store.js')

const onPlacePieceSuccess = function (response) {
  console.log('successfully placed piece to: ', response)
  store.place = response.place
}
const onCreateSuccess = function (response) {
  console.log('successfully created a new game: ', response)
  $('.container').show()
  store.game = response.game
}
const onCreateError = function (data) {
  console.log('didnt work', data)
}

const updateGameSuccess = function (data) {
  console.log('successfully updated game: ', data)
  store.games = data.games
}

const updateGameError = function (data) {
  console.log('did not work', data)
}

const onGetGamesSuccess = function (response) {
  const count = response.games.length
  $('.stats-display').text(`Youve played ${count} games!`)
}
const onGetGamesError = function (data) {
  console.log('successfully updated game: ', data)
  store.games = data.games
}
module.exports = {
  onPlacePieceSuccess,
  onCreateSuccess,
  onCreateError,
  updateGameSuccess,
  updateGameError,
  onGetGamesSuccess,
  onGetGamesError
}
