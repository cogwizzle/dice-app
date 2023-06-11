export class EZDice {
  constructor() {
    // Magic dice & modifier matching regex
    this.re = /(?<operator>[\+-])?\s*(?<number>\d+)(?:[dD](?<sides>(?:\d+|%))(?:-(?<drop>[LlHh])(?<dquantity>\d+)?)?)?/g;
    // Stores information on last roll
    this.total = 0;
    this.states = [];
    this.modifier = 0;
  }

  /**
   * Parse **diceStr** as dice notation, then roll those dice.
   *
   * The parser is very forgiving, ignoring whitespace and anything else it doesn't recognize.
   * It is also case-insensitive. Dice notation is documented in README.md
   *
   * @param {string} diceStr - The string containing the dice rolls.
   *
   * @return {number|false} - Total of all rolls and modifiers, or false if none were found.
   */
  roll(diceStr) {
    // Reset result values
    this.total = 0;
    this.states = [];
    this.modifier = 0;

    // No dice to roll?
    if (/^\d+$/.test(diceStr)) {
      this.total = parseInt(diceStr);
      this.modifier = this.total;
      return this.total;
    }

    // Search for dice groups and modifiers
    // The extra "?" at the end of the regex allows it to find modifiers too
    const matches = [...diceStr.matchAll(this.re)];

    // Returning false if no matches found
    if (Array.from(matches).length === 0) return false;

    // Process each match
    for (const match of matches) {
      this.processGroup(match.groups);
    }

    return this.total;
  }

  /**
   * Parse **diceStr** and determine if it contains at least one dice roll.
   *
   * @param {string} diceStr - The string which may contain dice rolls.
   *
   * @return {boolean} - True if diceStr contains at least one dice roll, otherwise false.
   */
  strContainsDice(diceStr) {
    return this.re.test(diceStr);
  }

  addState(sides, value, dropped = false) {
    this.states.push({
      sides: sides,
      value: value,
      dropped: dropped
    });
  }

  processGroup(group) {
    // Collect information about group
    const operator = group.operator || '+';
    const number = parseInt(group.number);
    const sides = group.sides || null;

    // Scaler makes the output positive or negative
    const scaler = (operator === '-' ? -1 : 1);

    // If sides isn't specified, this is a modifier
    if (sides === null) {
      this.total += number * scaler;
      this.modifier += number * scaler;
      return;
    }

    // Collect drop information from group
    const drop = group.drop ? group.drop.toUpperCase() : null;

    // 'd%' can be used as shorthand for 'd100'
    const parsedSides = sides === "%" ? 100 : parseInt(sides);

    // Is it a valid group of dice?
    if (parsedSides && number > 0) {
      // Roll Dice
      const results = [];
      for (let c = 0; c < number; c++) {
        results.push(this.getRandomNumber(parsedSides));
      }

      // Dropping dice
      if (drop) {
        const dropQuantity = Math.min(parseInt(group.dquantity) || 1, number);
        // Sort low to high
        results.sort((a, b) => a - b);
        // Reverse array if dropping lowest
        if (drop === 'L') {
          results.reverse();
        }
        for (let i = 0; i < dropQuantity; i++) {
          const droppedResult = results.pop();
          this.addState(parsedSides, droppedResult, true);
        }
        // Cosmetic re-shuffle of rest of dice
        results.sort(() => Math.random() - 0.5);
      }

      // Process the rest of the dice
      for (const result of results) {
        this.total += result * scaler;
        this.addState(parsedSides, result);
      }
    }
  }

  /**
   * Generates the pseudo-random number for dice rolls.
   *
   * @param {number} max - The highest number on the dice. Roll is 1 - max (inclusive).
   *
   * @return {number} - Result of the roll.
   */
  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  /**
   * Get the total of the last roll.
   *
   * @return {number} - Result of the test.
   */
  getTotal() {
    return this.total;
  }

  /**
   * Get the state of the dice after the last roll.
   *
   * @return {Array} - Array that describes the state of the dice after the last roll.
   */
  getDiceStates() {
    return this.states;
  }

  /**
   * Get the combined modifiers of the last roll.
   *
   * @return {string} - Representing the total of all modifiers in the last roll. If there were no modifiers, or they
   *                   cancelled out, an empty string is returned.
   */
  getModifier() {
    if (!this.modifier) return "";
    return (this.modifier >= 0 ? "+" : "") + this.modifier;
  }
}

