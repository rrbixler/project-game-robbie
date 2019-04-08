const config = require('../config.js')
const store = require('../store.js')

const placePiece = function (id) {
  return $.ajax({
    url: config.apiUrl + `/games/` + `${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: {
    //   id: `${id}`,
    //   cells: ['', '', '', '', '', '', '', '', ''],
    //   over: false,
    //   user: ('../auth/api.js')
    // }
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

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
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
// const cell = $(event.target).text()
// store.cell = cell
//
// const index = $(event.target.id)
// store.index = inde
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
          index: store.gameIndex,
          value: store.gameValue
        },
        over: store.gameEnd
      }
    }
  })
}

const resetBoard = function (data) {
  return $.ajax({
    url: config.apiUrl + `/games/${data.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      id: '',
      cell: ['', '', '', '', '', '', '', '', ''],
      over: false,
      user: store.user.token
    }
  })
}

module.exports = {
  placePiece,
  createGame,
  resetBoard,
  updateGame
}
