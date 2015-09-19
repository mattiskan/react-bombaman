import React from 'react';
import Grass from './GrassSquare';
import Player from './Player';

export default React.createClass({
  render: function() {
    let tile;
    let { data, boardState } = this.props;

    let hasPlayer = function(col, boardState) {
      return (col.x == boardState.player.x && col.y == boardState.player.y);
    }

    if(data.type === 'GRASS') {
      tile = (
        <Grass>
          { hasPlayer(data, boardState) ? <Player /> : null}
        </Grass>
      )
    } else {
      tile = (
        <span>{ data.value } </span>
      )
    }

    return (
      tile
    );
  }
});

