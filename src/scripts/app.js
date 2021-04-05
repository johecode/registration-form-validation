import FormObserver from './class/form-observer.js'

import {
  // ValidatorUsername,
  ValidatorLowercase,
  ValidatorUppercase,
  ValidatorDecimal,
  ValidatorSpecialSigns,
  ValidatorLength
} from './helper/validators.js'

const formDom = document.querySelector('#registrationform')
const form = new FormObserver(formDom)

// create input for username field
// const username = form.addInputObserver('username', 'input[name="username"]')
// username.addValidator('username', ValidatorUsername)

// create input observer for password field
const password = form.addInputObserver('password', 'input[name="password"]')

// add validators for password
password.addValidator('length', value => ValidatorLength(value, 8, 0))

// onChange event to update validation feedback
form.onChange((observerName, state) => {
  console.log('change', observerName, state)
})

form.onSubmit(() => {
  // own code here...
  // eg. async xhr to api

  console.log('submit')
})
