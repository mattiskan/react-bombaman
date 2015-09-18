import React from 'react';

export default React.createClass({

  render: function() {
    let style = {};
    let {data} = this.props;

    return (
      <span style={style}>{data} </span>
    );
  }
});
