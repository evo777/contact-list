var AppDispatcher = require('../dispatcher/AppDispatcher');

//Holding the functions
var AppActions = {
  saveContact: function(contact) {
    //Calling AppDispatcher
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact: contact
    });
  },

  receiveContacts: function(contacts) {
    //Calling AppDispatcher
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_CONTACTS,
      contacts: contacts
    });
  }
}

module.exports = AppActions;