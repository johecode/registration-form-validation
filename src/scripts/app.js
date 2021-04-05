import FormObserver from './class/form-observer.js'

import { ValidatorUsername } from './helper/validators.js'

const formDom = document.querySelector('#registrationform')
const form = new FormObserver(formDom)

// create input for username field
const username = form.addInputObserver('username', 'input[name="username"]')
username.addValidator('username', ValidatorUsername)

// onChange event to update validation feedback
form.onChange((observerName, state) => {
  console.log('change', observerName, state)
})

form.onSubmit(() => {
  // own code here...
  // eg. async xhr to api

  console.log('submit')
})
