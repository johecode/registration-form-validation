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

  isValid () {
    return true
  }

  submit () {
    if (this.isValid()) {
      console.log('submit')
    }
  }
}
