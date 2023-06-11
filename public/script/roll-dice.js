import { EZDice } from './ezdice.js'

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

export default rollDice
