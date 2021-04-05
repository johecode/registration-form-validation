
export default class InputObserver {
  constructor (name, dom) {
    this.name = name
    this.dom = dom

    this.validator = {}
    this.state = {}

    this.onChangeCallback = null

    this.init()
  }

  init () {
    const self = this
    this.dom.addEventListener('input', function (/* event */) {
      self.value = this.value
      self.validate()
    })
  }

  validate () {
    for (const name in this.validator) {
      const validator = this.validator[name]
      this.state[name] = validator(this.value)
    }
    this.changed()
  }

  addValidator (validatorName, validator) {
    if (typeof validator === 'function') {
      this.validator[validatorName] = validator
      this.state[validatorName] = false
    }
  }

  isValid () {
    for (const name in this.state) {
      if (!this.state[name]) {
        return false
      }
    }
    return true
  }

  onChange (callback) {
    this.onChangeCallback = callback
  }

  changed () {
    if (typeof this.onChangeCallback === 'function') {
      this.onChangeCallback(this.name, this.state)
    }
  }
}
