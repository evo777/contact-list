var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

//Interacting with Firebase
module.exports = {
  saveContact: function(contact){
    //When saving contacts to firebase, always reference the firebase
    this.firebaseRef = new Firebase('https://contactlist-a4387.firebaseio.com/contacts');
    this.firebaseRef.push({
      contact: contact
    });
  }
}