const config = require('../config.js')
const store = require('../store.js')

const placePiece = function (id) {
  return $.ajax({
    url: config.apiUrl + `/games/` + `${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      id: `${id}`,
      cells: ['', '', '', '', '', '', '', '', ''],
      over: false,
      user: ('../auth/api.js')
    }
  })
}
// const updateGame = function (data) {
//   return $.ajax({
//     url: config.apiUrl + `/game/` + data.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      id: '',
      cells: ['', '', '', '', '', '', '', '', ''],
      over: false,
      user: store.user.token
    }
  })
}

const resetBoard = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games' + data.games.id,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updateGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: users
//   })
// }

module.exports = {
  placePiece,
  createGame,
  resetBoard
}
