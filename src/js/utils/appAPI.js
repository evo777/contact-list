var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
	saveContact: function(contact){
		//When saving contacts to firebase, always reference the firebase
		this.firebaseRef = new Firebase('https://contactlist-a4387.firebaseio.com/contacts');
		this.firebaseRef.push({
			contact: contact
		});
	},

	getContacts: function(){
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
				AppActions.receiveContacts(contacts);
			});
		});
	},

	removeContact: function(contactId){
		this.firebaseRef = new Firebase('https://contactlist-a4387.firebaseio.com/contacts/'+contactId);
		this.firebaseRef.remove();
	},

	updateContact: function(contact){
		//Get contact by id
		var id = contact.id;
		var updatedContact = {
			name: contact.name,
			phone: contact.phone,
			email: contact.email
		}

		this.firebaseRef = new Firebase('https://contactlist-a4387.firebaseio.com/contacts/'+contact.id+'/contact');
		//Update database with the new information
		this.firebaseRef.update(updatedContact);
	}
}