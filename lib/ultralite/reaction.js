import dice from "./dice.js";

const reaction = {
  roll() {
    return dice.rollWithDiceCountOf(3);
  },
  rollForReaction(npc, modifiers, roll) {
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

export default reaction;
