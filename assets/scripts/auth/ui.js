'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('.col-3').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-game').show()
  $('#stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.user = data.user
}

const signInFailure = function (data) {
}

const changePasswordSuccess = function (data) {
}

const changePasswordFailure = function (data) {
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
}

const signOutFailure = function () {

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
