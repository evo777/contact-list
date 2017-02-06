var AppDispatcher = require('../dispatcher/AppDispatcher');

//Holding the functions
var AppActions = {
  saveContact: function(contact) {
    //Calling AppDispatcher
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact: contact
    });
  }
}

module.exports = AppActions;