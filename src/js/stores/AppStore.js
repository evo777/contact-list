var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _contacts = [];

//Working with a store is like working with an array

var AppStore = assign({}, EventEmitter.prototype, {
  getContacts: function() {
    return _contacts;
  },

  //When submitting the form, the contact gets pushed into the array
  saveContact: function(contact){
    _contacts.push(contact)
  },
  //Helps get all the contacts from firebase and store them in the array
  setContacts: function(contacts){
    _contacts = contacts;
  },

  //Change events functions
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
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

      case AppConstants.RECEIVE_CONTACTS:
      console.log('Receiving Contacts...');

      // Store Save
      AppStore.setContacts(action.contacts);

      //Emit Change
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

module.exports = AppStore;