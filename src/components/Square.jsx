import React from 'react';
import Grass from './GrassSquare';

export default React.createClass({
  render: function() {
    let tile;
    console.log(this.props);
    let { data } = this.props;

    if(data.type === 'GRASS') {
      tile = (
        <Grass />
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

