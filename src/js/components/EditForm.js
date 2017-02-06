var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var EditForm = React.createClass({
  render: function(){
    return(
      //Class of "well" gives it a grey background
      //onSubmit is an event handler
      <div className="well">
        <h3>Edit Contact</h3>
        <form>
          <div className="form-group">
            <input type="text" ref="name" value={this.props.contactToEdit.name} className="form-control" placeholder="Please add contact name" />
          </div>
          <div className="form-group">
            <input type="text" ref="phone" value={this.props.contactToEdit.phone} className="form-control" placeholder="Please add contact's phone" />
          </div>
          <div className="form-group">
            <input type="text" ref="email" value={this.props.contactToEdit.email} className="form-control" placeholder="Please add contact's email" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  },

  handleChange: function(fieldName, event) {
    //Whatever is typed in the input field, it will be set to newState variable
    var newState = event.target.value;
    var selected = this.state.selected;
    selected.name = newState;
    //When clicked on Edit button, the contact's information will display on the form for editing
    this.setState({selected: selected});
  }
});

module.exports = EditForm;