module.exports = {
  state: {
    created: "created",
    inProgress: "inProgress",
    ended: "ended",
  },
  create: function(spec) {
    var that = {
      state: ultralite.session.state.created,
      turns: [],
      characters: [],
      addCharacters: function(characters) {
        that.characters = characters;
      },
      nextTurn: function(turnSpec) {
        if (that.state == ultralite.session.state.inProgress) {
          var turn = ultralite.turn.create(turnSpec);
          that.turns.unshift(turn);
          return turn;
        }

        return null;
      },
      currentTurn: function() {
        if (that.state == ultralite.session.state.inProgress) {
          return that.turns[0];
        }

        return null;
      },
      start: function() {
        that.state = ultralite.session.state.inProgress;
        that.nextTurn();
      },
      end: function() {
        that.state = ultralite.session.state.ended;
      }
    };

    return that;
  }
};
