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
  render: function() {
    return (
      <div>
        <AddForm />
      </div>
    )
  }
});

module.exports = App;