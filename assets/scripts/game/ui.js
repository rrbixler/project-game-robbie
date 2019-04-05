const placePieceSuccess = function () {
  $('#col-4').text('x')
}

const resetBoardSuccess = function () {
  // $('#message').text('')
  $('#col-4').val('')
  // console.log(response.game)
  // response.game.forEach(function (data) {
  // console.log(book.author)
  // $('#books-display').append(`
  //   <h6> ${book.title}</h4>
  //   <p>${book.author}</p>
  //   <p>${book.id}</p>
  //   <br>
  //   `)
}

const resetBoardFailure = function () {
  // console.log('it broke')
  $('#message').text('Index Request Failed')
  $('#message').css('color', 'coral')
}

const onCreateSuccess = function (apiResponse) {
  // $('#message').text('Congrats. Your book was created!')
  $('.col-4').val('')
}

const onCreateError = function () {

}

const updateGameSuccess = function () {
  $('col-4').val().store.user.cell
}
module.exports = {
  placePieceSuccess,
  resetBoardSuccess,
  resetBoardFailure,
  onCreateSuccess,
  onCreateError,
  updateGameSuccess
}
