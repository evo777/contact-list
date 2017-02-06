var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

//Interacting with Firebase
module.exports = {
  saveContact: function(contact) {
    //When saving contacts to firebase, always reference the firebase
    this.firebaseRef = new Firebase('https://contactlist-a4387.firebaseio.com/contacts');
    this.firebaseRef.push({
      contact: contact
    });
  },

  getContacts: function() {
    //When retrieving contacts from firebase, always refernce the database
    this.firebaseRef = new Firebase('https://contactlist-a4387.firebaseio.com/contacts');
    this.firebaseRef.once("value", function(snapshot){
      var contacts = [];
      snapshot.forEach(function(childSnapshot){
        var contact = {
          id: childSnapshot.key(),
          name: childSnapshot.val().contact.name,
          phone: childSnapshot.val().contact.phone,
          email: childSnapshot.val().contact.email
        }
        contacts.push(contact);
        //Going to receive all the contacts that is fetched
        AppActions.receiveContacts(contacts);
      });
    });
  }
}