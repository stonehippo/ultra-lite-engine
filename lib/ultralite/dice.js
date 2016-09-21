const dice = {
  rollWithRange(min, max) {
    if (typeof min === 'undefined') throw Error("/min value not specified");
    if (typeof max === 'undefined') throw Error("/max value not specified");
    if (!Number.isInteger(min)) throw Error("min value must be an integer");
    if (!Number.isInteger(max)) throw Error("max value must be an integer");
    if (min < 1) throw Error("min value must be <= 1");
    if (max < min) throw Error("max must be greater than min");

    return Math.floor(Math.random() * (max -min)) + min;
  },
  rollWithDiceCountOf(dice){
    if(!dice) throw new RangeError("Number of dice must be at least 1");
    return this.rollWithRange(dice, dice * 6);
  }
};

export default dice;
