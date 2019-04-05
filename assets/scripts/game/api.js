const config = require('../config.js')
const store = require('../store.js')

const placePiece = function (id) {
  return $.ajax({
    url: config.apiUrl + `game/` + `${id}`,
    method: 'PATCH'
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
    }
  })
}

const updateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: users
  })
}
// const updateBook = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + `/books/` + formData.book.id,
//     method: 'PATCH',
//     data: formData
//   })
// }
module.exports = {
  placePiece,
  createGame
  // resetBoard
}
