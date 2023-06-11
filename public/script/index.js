import rollDice from './roll-dice.mjs'
import './my-result.mjs'

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  const diceDescription = data['dice-description']
  const result = rollDice(diceDescription)
  const resultElement = document.querySelector('#results')
  const myResult = document.createElement('my-result')
  myResult.result = result
  myResult.description = diceDescription
  resultElement.innerHTML = ''
  resultElement.appendChild(myResult)
})
