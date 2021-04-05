
import InputObserver from './input-observer.js'

export default class FormObserver {
  constructor (formDom) {
    this.formDom = formDom

    this.input = {}

    this.init()
  }

  init () {
    this.formDom.addEventListener('submit', event => {
      event.preventDefault()
      this.submit()
    })
  }

  addInputObserver (inputName, selector) {
    const observable = this.formDom.querySelector(selector)
    if (observable) {
      const observer = this.input[inputName] = new InputObserver(inputName, observable)
      return observer
    }
    return null
  }

  getInputObserver (inputName) {
    return this.input[inputName] ? this.input[inputName] : null
  }

  isValid () {
    return true
  }

  submit () {
    if (this.isValid()) {
      console.log('submit')
    }
  }
}
