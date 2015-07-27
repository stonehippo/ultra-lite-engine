var turn = require("./turn.js");
var session = {
  state: {
    created: "created",
    inProgress: "inProgress",
    ended: "ended",
  },
  create: function(spec) {
    var that = {
      state: session.state.created,
      turns: [],
      characters: [],
      addCharacters: function(characters) {
        that.characters = characters;
      },
      nextTurn: function(turnSpec) {
        if (that.state == session.state.inProgress) {
          var thisTurn = turn.create(turnSpec);
          that.turns.unshift(turn);
          return thisTurn;
        }

        return null;
      },
      currentTurn: function() {
        if (that.state == session.state.inProgress) {
          return that.turns[0];
        }

        return null;
      },
      start: function() {
        that.state = session.state.inProgress;
        that.nextTurn();
      },
      end: function() {
        that.state = session.state.ended;
      }
    };

    return that;
  }
};

module.exports = session;
