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
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" ref="name" onChange={this.handleChange.bind(this, 'name')} value={this.props.contactToEdit.name} className="form-control" placeholder="Please add contact name" />
          </div>
          <div className="form-group">
            <input type="text" ref="phone" onChange={this.handleChange.bind(this, 'phone')} value={this.props.contactToEdit.phone} className="form-control" placeholder="Please add contact's phone" />
          </div>
          <div className="form-group">
            <input type="text" ref="email" onChange={this.handleChange.bind(this, 'email')} value={this.props.contactToEdit.email} className="form-control" placeholder="Please add contact's email" />
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
  },

  handleSubmit: function(e){
    e.preventDefault();

    var contact = {
      id: this.props.contactToEdit.id,
      //Getting the name from the input box
      name: this.refs.name.value.trim(),
      //Has to match with the ref attribute from the form
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim()
    }

    AppActions.updateContact(contact);
  }
});

module.exports = EditForm;