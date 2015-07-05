var exports = module.exports = {
  roll: function() {
    return ultralite.dice.rollWithDiceCountOf(3);
  },
  rollForReaction: function(npc, modifiers, roll) {
    npc.makeUndecided();
    if (roll < 7) {
      npc.makeHostile();
    }
    if (roll > 14) {
      npc.makeFriendly();
    }
    return npc.reaction();
  }
};
