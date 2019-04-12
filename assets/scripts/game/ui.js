const store = require('../store.js')

const onPlacePieceSuccess = function (response) {
  store.place = response.place
}

const onCreateSuccess = function (response) {
  store.game = response.game
}

const onCreateError = function (data) {
}

const updateGameSuccess = function (data) {
  // this stores each step of the game into the store folder, for easy access in toher parts of this folder
  store.games = data.games
}

const updateGameError = function (data) {
}

const onGetGamesSuccess = function (response) {
  const count = response.games.length
  $('.stats-display').text(`you've played ${count} games!`).show()
  setTimeout(() => {
    $('.stats-display').text('').hide()
  }, 2000)
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
