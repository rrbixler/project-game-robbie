const config = require('../config.js')
const store = require('../store.js')

const placePiece = function (id) {
  return $.ajax({
    url: config.apiUrl + `/games/` + `${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

// this is the patch method that updates the game board as it is played. it takes 3 parameters
// as indicated by the variables declared in thegame events.js folder
const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

const resetBoard = function (data) {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      id: '',
      cell: ['', '', '', '', '', '', '', '', ''],
      over: '',
      user: store.user.token
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  placePiece,
  createGame,
  resetBoard,
  updateGame,
  getGames
}
