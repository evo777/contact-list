var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');

function getAppState(){
  return {
    //Coming from AppStore
    contacts: AppStore.getContacts(),
    contactToEdit: AppStore.getContactToEdit()
  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <AddForm />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
});

module.exports = App;