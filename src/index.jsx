import React from 'react';
import ReactDOM from 'react-dom';

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello2 {this.props.name}</div>;
  }

});

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('main-container'));