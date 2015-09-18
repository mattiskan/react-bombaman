import React from 'react';
import Square from './Square.jsx';


export default React.createClass({

  propTypes: function() {
    boardState: React.PropTypes.object.isRequired
  },

  render: function() {
    let {boardState} = this.props;

    return (
      <div>
        {boardState.squares.map(
          (row) =>
          <p>{row.map(col => <Square data={col}/>)}</p>
          )
        }
      </div>
    );
  }

});
