var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _contacts = [];

var AppStore = assign({}, EventEmitter.prototype, {
  getContacts: function() {
    return _contacts;
  },

  //When submitting the form, the contact gets pushed into the array
  saveContact: function(contact){
    _contacts.push(contact)
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  //After creating SAVE_CONTACT in constants
  switch(action.actionType){
    case AppConstants.SAVE_CONTACT:
      console.log('Saving Contact...');

      // Store Save
      AppStore.saveContact(action.contact);

      // Save to API
      //Will look inside the AppAPI.js for a function called saveContact
      AppAPI.saveContact(action.contact);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

module.exports = AppStore;