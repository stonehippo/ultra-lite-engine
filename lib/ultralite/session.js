import turn from "./turn.js";

const session = {
  state: {
    created: "created",
    inProgress: "inProgress",
    ended: "ended",
  },
  create(spec) {
    let that = {
      state: session.state.created,
      turns: [],
      characters: [],
      addCharacters(characters) {
        that.characters = characters;
      },
      nextTurn(turnSpec) {
        if (that.state == session.state.inProgress) {
          let thisTurn = turn.create(turnSpec);
          that.turns.unshift(turn);
          return thisTurn;
        }

        return null;
      },
      currentTurn() {
        if (that.state == session.state.inProgress) {
          return that.turns[0];
        }

        return null;
      },
      start() {
        that.state = session.state.inProgress;
        that.nextTurn();
      },
      end() {
        that.state = session.state.ended;
      }
    };

    return that;
  }
};

export default session;
