'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
}

const signInSuccess = function (data) {
  console.log('sign in success ran with the data: ', data)
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
  console.log('sign in failure ran with the data: ', data)
}

const changePasswordSuccess = function (data) {
  console.log('change password success ran with the data: ', data)
}

const changePasswordFailure = function (data) {
  console.log('change password failure ran with the data: ', data)
}

const signOutSuccess = function () {
  console.log('Sign out successful!')
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
  console.log('Sign out failed!')
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
