
import InputObserver from './input-observer.js'

export default class FormObserver {
  constructor (formDom) {
    this.formDom = formDom

    this.input = {}

    this.onChangeCallback = null
    this.onSubmitCallback = null

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
      observer.onChange((name, state) => {
        if (typeof this.onChangeCallback === 'function') {
          this.onChangeCallback(name, state)
        }
      })
      return observer
    }
    return null
  }

  getInputObserver (inputName) {
    return this.input[inputName] ? this.input[inputName] : null
  }

  isValid () {
    for (const name in this.input) {
      if (!this.input[name].isValid()) {
        return false
      }
    }
    return true
  }

  submit () {
    if (this.isValid() && typeof this.onSubmitCallback === 'function') {
      this.onSubmitCallback()
    }
  }

  onChange (callback) {
    this.onChangeCallback = callback
  }

  onSubmit (callback) {
    this.onSubmitCallback = callback
  }
}
