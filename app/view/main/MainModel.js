/**
 * This class is the view model for the Main view of the application.
 *
 * TODO - add data, formulas and/or methods to support your view
 */

Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    stores: {
    	todoStore: {
    		fields: [
				{name: 'id'},
				{name: 'text', type: 'string'},
				{name: 'completed', type: 'boolean', defaultValue: false}
			],
			listeners: {
				update: 'onStoreUpdate', 	
 				add: 'onStoreAdd', 			
				remove: 'onStoreRemove'
			}			
    	}
    },

    data: {
        name: 'ExtApp',  
        hasCompleted: false,
        totalItems: 0, 
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
    },

    formulas: {}
});
  