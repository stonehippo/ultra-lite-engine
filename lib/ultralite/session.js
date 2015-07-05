module.exports = {
  create: function(spec) {
    var that = {
      turns: [],
      nextTurn: function(turnSpec) {
        var turn = ultralite.turn.create(turnSpec);
        that.turns.unshift(turn);
        return turn;
      },
      currentTurn: function() {
        return that.turns[0];
      }
    };

    return that;
  }
};
