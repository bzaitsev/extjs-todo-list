Ext.define('MyApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: [
		'MyApp.view.login.LoginCtrl',
		'Ext.form.Panel'
	],

	controller: 'login',
	bodyPadding: 10,
	title: 'Login window',
	closable: false,
	autoShow: true,

	items: {
		xtype: 'form',
		reference: 'form',
		buttons: [{
			text: 'Login',
			formBind: true,
			listeners: {
				click: 'onLoginClick'
			}
		}],
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'Username',
			allowBlank: false
		}, {
			xtype: 'textfield',
			name: 'password',
			inputType: 'password',
			fieldLabel: 'Password',
			allowBlank: false
		}, {
			xtype: 'displayfield',
			hideEmptyLabel: false,
			value: 'Enter any non-blank password'
		}]
	}
});