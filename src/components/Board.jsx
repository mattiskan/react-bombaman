import React from 'react';
import Square from './Square.jsx';


export default React.createClass({

  propTypes: function() {
    boardState: React.PropTypes.object.isRequired
  },

  render: function() {
    let {boardState} = this.props;
    let style = {marginTop: 0, marginBottom: 0}

    return (
      <div>
        {boardState.squares.map(
          (row) =>
          <p style={style}>{row.map(col => <Square data={col} boardState={boardState}/>)}</p>
          )
        }
      </div>
    );
  }
});

