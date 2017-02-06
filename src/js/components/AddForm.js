var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({
  render: function() {
    return(
      //Class of "well" gives it a grey background
      //onSubmit is an event handler
      <div className="well">
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" ref="name" className="form-control" placeholder="Please add contact name" />
          </div>
          <div className="form-group">
            <input type="text" ref="phone" className="form-control" placeholder="Please add contact's phone" />
          </div>
          <div className="form-group">
            <input type="text" ref="email" className="form-control" placeholder="Please add contact's email" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = AddForm;