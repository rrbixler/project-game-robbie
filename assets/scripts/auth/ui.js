'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`all signed up! sign in to play!`)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`something went wrong, try to sign up again!`)
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  // $('.col-3').show()
  $('.col-3').empty()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-game').show()
  $('#stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.user = data.user
  $('.score-display').show()
  $('.stats-display').show()
  $('.player-indicator').show()
  $('.score-display').empty()
  $('.stats-display').empty()
  $('.player-indicator').empty()
  $('.messages').text(`welcome! click new game to begin`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`oops! somethings wrong try again`)
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`change password success!`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`change password error`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('.col-3').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-game').hide()
  $('#stats').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.score-display').hide()
  $('.stats-display').hide()
  $('.player-indicator').hide()
  $('.container').hide()
  $('.messages').text(`see you next time!`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('.messages').text(`somethings not working right`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
