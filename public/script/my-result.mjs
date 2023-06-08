export class MyResult extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render.bind(this)()
  }
  
  set result(value) {
    this._value = value
    this.render.bind(this)()
  }

  get result() {
    return this._value
  }

  set description(value) {
    this._description = value
    this.render.bind(this)()
  }

  get description() {
    return this._description
  }

  render() {
    if (!this._value || !this._description) {
      this.innerHTML = `
      `
      return
    }
    this.innerHTML = `
      <div class="text-sm text-slate-500 ml-2">You rolled ${this._description}</div>
      <div class="mx-auto w-full mb-3">
        <p class="font-semibold text-xl text-center">Result</p>
        <p class="font-bold text-3xl text-center">${this._value.total}</p>
      </div>
      <ul class="flex flex-wrap flex-column w-100">
        ${this._value.dice.map((die) => {
          let shapeClass = ''
          switch (die.sides) {  
            case 4:
              shapeClass = 'fas fa-play'
              break
            case 6:
              shapeClass = 'fas fa-dice-d6'
              break
            default:
              shapeClass = 'fas fa-dice-d20'
              break
          }
          return `
            <li class="flex-1 text-center pt-5">
              <div>
                <i class="h-5 w-10 fa-2xl ${shapeClass}"></i>
                <div>
                  ${die.value}
                </div>
              </div>
            </li>
          `
        }).join('')}
      </ul>
    `
  }
}

if (!customElements.get('my-result'))
  customElements.define('my-result', MyResult)
