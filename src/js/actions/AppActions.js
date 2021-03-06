var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

//Holding the functions
var AppActions = {
	saveContact: function(contact){
		//Calling AppDispatcher
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_CONTACT,
			contact: contact
		});
	},

	receiveContacts: function(contacts){
		//Calling AppDispatcher
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_CONTACTS,
			contacts: contacts
		});
	},

	//Remove contact that is used in Contact.js
	removeContact: function(contactId){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_CONTACT,
			contactId: contactId
		});
	},

	editContact: function(contact){
		console.log(contact);
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_CONTACT,
			contact: contact
		});
	},

	//Add this after creating the handleSubmit function in EditForm.js
	updateContact: function(contact){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.UPDATE_CONTACT,
			contact: contact
		});
	},
}

module.exports = AppActions;