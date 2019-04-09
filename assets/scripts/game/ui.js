const store = require('../store.js')

const onPlacePieceSuccess = function (response) {
  store.place = response.place
}

const onCreateSuccess = function (response) {
  $('.container').show()
  store.game = response.game
}

const onCreateError = function (data) {
}

const updateGameSuccess = function (data) {
  store.games = data.games
}

const updateGameError = function (data) {
}

const onGetGamesSuccess = function (response) {
  const count = response.games.length
  $('.stats-display').text(`Youve played ${count} games!`)
}

const onGetGamesError = function (data) {
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
