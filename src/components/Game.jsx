import React from 'react';
import Board from './Board.jsx'

export default React.createClass({
  render: function() {
    var boardState = {
      squares: [],
      player: {type: 'PLAYER', x: 2, y: 3}
    };

    for(var i=0; i<9; i++) {
      boardState.squares[i] = new Array(9);
      for(var j=0; j<9; j++) {
        boardState.squares[i][j] = {type: 'GRASS', x: i, y: j};
      }
    }

    // boardState.squares[4][4].content = [{type: 'PLAYER'}];

    return(
      <div>
        <h1>Game</h1>
        <Board boardState={boardState} />
      </div>
    )
  }
});
