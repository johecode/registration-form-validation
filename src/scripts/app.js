
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
// const updateUsernameFeedback = state => {}

// create input observer for password field
const password = form.addInputObserver('password', 'input[name="password"]')

// add validators for password
password.addValidator('length', value => ValidatorLength(value, 8, 0))
password.addValidator('lowercase', ValidatorLowercase)
password.addValidator('uppercase', ValidatorUppercase)
password.addValidator('decimal', ValidatorDecimal)
password.addValidator('specialSigns', ValidatorSpecialSigns)

// form states processing

const setFieldFeedbackReset = feedbackDom => {
  if (feedbackDom.classList.contains('valid')) feedbackDom.classList.remove('valid')
  if (feedbackDom.classList.contains('invalid')) feedbackDom.classList.remove('invalid')
}

const setFieldFeedbackValid = feedbackDom => {
  setFieldFeedbackReset(feedbackDom)
  if (!feedbackDom.classList.contains('valid')) feedbackDom.classList.add('valid')
}

const setFieldFeedbackInalid = feedbackDom => {
  setFieldFeedbackReset(feedbackDom)
  if (!feedbackDom.classList.contains('invalid')) feedbackDom.classList.add('invalid')
}

const updatePasswordFeedback = state => {
  // const isValid = password.isValid()
  for (const name in state) {
    const selector = '[data-validation="password.' + name.toLowerCase() + '"]'
    const feedbackDom = formDom.querySelector(selector)
    if (feedbackDom) {
      if (state[name]) {
        setFieldFeedbackValid(feedbackDom)
      } else {
        setFieldFeedbackInalid(feedbackDom)
      }
    }
  }
}

// enable / disable submit button
const submitDom = formDom.querySelector('input[type="submit"]')

const enableSubmitBtn = () => {
  if (submitDom) {
    submitDom.disabled = false
  }
}

const disableSubmitBtn = () => {
  if (submitDom) {
    submitDom.disabled = true
  }
}

// onChange event to update validation feedback
form.onChange((observerName, state) => {
  switch (observerName) {
    // case 'username':
    //   updateUsernameFeedback(state)
    //   break
    case 'password':
      updatePasswordFeedback(state)
      break
  }

  if (form.isValid()) {
    enableSubmitBtn()
  } else {
    disableSubmitBtn()
  }
})

form.onSubmit(() => {
  // own code here...
  // eg. async xhr to api

  console.log('submit')
})
