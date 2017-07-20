/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List',
        'MyApp.store.Todo'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        // iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Todo list',
        iconCls: 'fa-list',  
        items: [{
            xtype: 'container',
            cls: 'todo-container',
            items: [{  
                xtype: 'textfield',
                cls: 'todo-input',
                emptyText: 'What needs to be done?',
                enableKeyEvents: true,
                listeners: {
                    keypress: 'onTodoInputKeypress'
                }
            }, {
                xtype: 'dataview',
                cls: 'todo-items',
                reference: 'dataview',
                // store: {
                //     type: 'todo'
                // },
                bind: {
                    store: '{todoStore}'
                },
                itemTpl: [
                    '<div class="todo-item">',
                        '<input type="checkbox" <tpl if="completed">checked</tpl> class="todo-checkbox"> ', 
                        '<span class="todo-text" title="Double click to edit.">{text}</span> ', 
                        '<button type="button" class="todo-remove-button x-fa fa-times"></button>', 
                    '</div>'
                ],
                listeners: {  
                    itemclick: 'onTodoItemClick',
                    itemdblclick: 'onTodoItemDblClick'
                }               
            }, {
                xtype: 'container',
                cls: 'todo-footer', 
                layout: 'hbox',
                hidden: true,
                bind: {
                    hidden: '{!totalItems}'
                },
                items: [{ 
                    xtype: 'toolbar',
                    width: '100%',
                    defaults: {
                        listeners: {
                            click: 'onTodoFilterClick'
                        }
                    },                    
                    items: [{
                        xtype: 'tbtext',
                        bind: {
                            text: '{totalItems} total item(s)' 
                        }                        
                    }, 
                    '->', {
                        itemId: 'clear',
                        cls: 'todo-clear-button',
                        text: 'Clear completed',
                        bind: {
                            hidden: '{!hasCompleted}'
                        }
                    }, {
                        itemId: 'all',
                        text: 'All'
                    }, {
                        itemId: 'active',
                        text: 'Active'
                    }, {
                        itemId: 'completed',
                        text: 'Completed'
                    }]
                }]
            }]
        }]

    }, {
        title: 'Tab 2',
        iconCls: 'fa-star-o',
        // bind: {
        //     html: '<h1>ExtJS 6</h1>' + '<p>application</p>'
        // }
        items: [{
            xtype: 'container',
            items: [{
                view: 'menu.Menu'
            }]
        }]
    }/*, {
        title: 'Tab 3',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Tab 4',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }*/]
});
