var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

//Including the flux module
var AppDispatcher = assign(new Dispatcher(),{
	handleViewAction: function(action){
		var payload = {
			source: 'VIEW_ACTION',
      //Passes the action as action
			action: action
		};
		this.dispatch(payload);
	}
});

module.exports = AppDispatcher;