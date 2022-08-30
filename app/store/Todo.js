Ext.define('MyApp.store.Todo', {
	extend: 'Ext.data.Store',
	alias: 'store.todo',
		
	fields: [
		{name: 'id'},
		{name: 'text'},
		{name: 'completed', type: 'boolean', defaultValue: false}
	],	

	listeners: {
		// Fires when a Model instance has been updated.
		update: function() {},
		// Fires whenever records are added to or removed from the Store.
		datachanged: function() {}
	}
});
