var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <AddForm />
      </div>
    )
  }
});

module.exports = App;