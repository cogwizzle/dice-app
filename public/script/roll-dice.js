import { EZDice } from './ezdice.js'
import beep from './beep.js'

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

/*
 * Play error noise if someone is trying to spame the roll button.
 */
const alarm = () => {
  beep(100, 700, 25)
  setTimeout(() => {
    beep(100, 700, 25)
  }, 125)
}

const rollDiceWithDebounce = (diceDescription) => {
  const now = new Date(Date.now()).getTime()
  if (now - lastRole < 1000) {
    alarm()
    return
  }
  lastRole = now
  return rollDice(diceDescription)
}

export default rollDiceWithDebounce
