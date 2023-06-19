import { EZDice } from './ezdice.js'

let lastRole = 0;

const rollDice = (diceDescription) => {
  const diceBag = new EZDice()
  // Replace any instance in Dice description that does not come prefixed with a number to 1D
  diceDescription = diceDescription.toLowerCase().replace(/(?<!\d)([dD])/g, '1$1')
  diceDescription = diceDescription.replace(' ', '')
  diceBag.roll(diceDescription)
  return {
    dice: diceBag.states,
    total: diceBag.total,
  }
}

const rollDiceWithDebounce = (diceDescription) => {
  const now = new Date(Date.now()).getTime()
  if (now - lastRole < 1000) {
    return
  }
  lastRole = now
  return rollDice(diceDescription)
}

export default rollDiceWithDebounce
