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
  $('.col-4').show()
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
