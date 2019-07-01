const dice = {
  rollWithRange(min, max) {
    if (typeof min === 'undefined') throw Error("/min value not specified");
    if (typeof max === 'undefined') throw Error("/max value not specified");
    if (!Number.isInteger(min)) throw Error("min value must be an integer");
    if (!Number.isInteger(max)) throw Error("max value must be an integer");
    if (min < 1) throw Error("min value must be <= 1");
    if (max < min) throw Error("max must be greater than min");

    return Math.floor(Math.random() * Math.floor(max)) + min;
  },
  rollWithDiceCountOf(dice, sides=6) {
    const validSides = [4, 6, 8, 10, 12, 20];
    if(!dice) throw new RangeError("Number of dice must be at least 1");
    if (validSides.indexOf(sides) === -1) {
      throw new RangeError("Number of sides must be 4, 6, 8, 10, 12, or 20");
    }
    let sum = 0;
    let count = 0;
    while (count < dice) {
      sum += this.rollWithRange(1, sides);
      count++;
    }
    return sum;
  },
};

export default dice;
