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
      <ul class="text-center">
        ${this._value.dice.map((die) => {
          let imgSrc = ''
          switch (die.sides) {  
            case 4:
              imgSrc = '/icons/dice/D4.png'
              break
            case 6:
              imgSrc = '/icons/dice/D6.png'
              break
            case 8:
              imgSrc = '/icons/dice/D8.png'
              break
            case 10:
              imgSrc = '/icons/dice/D10.png'
              break
            case 12:
              imgSrc = '/icons/dice/D12.png'
              break
            case 20:
              imgSrc = '/icons/dice/D20.png'
              break
            default: 
              imgSrc = '/icons/dice/D6.png'
              break
          }
          return `
            <li class="inline-block">
              <div class="text-center w-20">
                <img class="h-10 w-10 mx-auto" src="${imgSrc}"></img>
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
