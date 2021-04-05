import FormObserver from './class/form-observer.js'

import { ValidatorUsername } from './helper/validators.js'

const formDom = document.querySelector('#registrationform')
const form = new FormObserver(formDom)

// create input for username field
const username = form.addInputObserver('username', 'input[name="username"]')
username.addValidator('username', ValidatorUsername)
