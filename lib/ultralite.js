"use strict";

import myutil from "./ultralite/util.js";
import myattributeLevels from "./ultralite/attributeLevels.js";
import mydice from "./ultralite/dice.js";
import myreaction from "./ultralite/reaction.js";
import mytask from "./ultralite/task.js";
import mycharacter from "./ultralite/character.js";
import mynpc from "./ultralite/npc.js";
import mycombat from "./ultralite/combat.js";
import myturn from "./ultralite/turn.js";
import mysession from "./ultralite/session.js";
import myadvantage from "./ultralite/advantage.js";
import myskill from "./ultralite/skill.js";

const ultralite = {
  util: myutil,
  attributeLevels: myattributeLevels,
  dice: mydice,
  reaction: myreaction,
  task: mytask,
  character: mycharacter,
  npc: mynpc,
  combat: mycombat,
  turn: myturn,
  session: mysession,
  advantage: myadvantage,
  skill: myskill
}

export default ultralite;
