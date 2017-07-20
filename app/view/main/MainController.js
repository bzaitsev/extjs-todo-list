/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */

Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    prevTodoFilter: null,

    onTodoItemClick: function(self , record, item, idx, event) { 
        var target = event.target, 
            viewmodel = this.getViewModel(),
            store = viewmodel.getStore('todoStore'),
            totalItems;

        if (target.className.indexOf('todo-remove-button') !== -1) {
            store.remove(record);
            totalItems = viewmodel.get('totalItems');
            viewmodel.set('totalItems', --totalItems);
        }

        if (target.className.indexOf('todo-checkbox') !== -1) {
            record.set('completed', !record.data.completed);
        }
    },

    onTodoItemDblClick: function(self, record, item, i, e) { 
        var editor, textEl, isTextClicked;

        isTextClicked = e.target.classList.contains('todo-text');

        if (!isTextClicked) {
            return;
        }

        editor = new Ext.Editor({
            updateEl: true,
            alignment: 'l-l',
            field: { xtype: 'textfield' },
            autoSize: { width: 'boundEl' },
            listeners: {
                complete: onComplete
            }
        });

        textEl = item.querySelector('.todo-text');
        editor.startEdit(textEl);

        function onComplete(self, value) {
            record.set('text', value);
        }
    },

    onTodoFilterClick: function(self, e) { 
        var itemId = self.itemId,
            target = e.target,
            viewmodel = this.getViewModel(),
            store = viewmodel.getStore('todoStore'),
            isFilter,
            collection, 
            totalItems;

        isFilter = itemId == 'all' || itemId == 'active' || itemId == 'completed';

        if (isFilter) {
            if (this.prevTodoFilter) {
                this.prevTodoFilter.removeCls('active');
            }

            this.prevTodoFilter = self;
            self.addCls('active');
        }

        switch (itemId) {
            case 'all':
                store.filter('completed', '');
                break;
            case 'active':
                store.filter('completed', false);
                break;
            case 'completed':
                store.filter('completed', true);
                break;
            case 'clear':
                collection = store.query('completed', true);
                store.remove(collection.items);
                totalItems = viewmodel.get('totalItems');

                viewmodel.set({
                    totalItems: totalItems - collection.items.length,
                    hasCompleted: false
                });
                break;
        }
    },

    onTodoInputKeypress: function(self, event) {
        var ENTER = 13,
            keyCode = event.keyCode,
            inputText = self.getValue(),
            viewmodel = this.getViewModel(),
            store = viewmodel.getStore('todoStore'),
            totalItems = viewmodel.get('totalItems');

        if (keyCode !== ENTER || !inputText) {
            return;
        }

        self.setValue('');
        store.add({text: inputText});
        viewmodel.set('totalItems', ++totalItems);
    }, 

    onStoreAdd: function(store) { // ( store , records , index , eOpts ) 
    },

    onStoreRemove: function(store, records) { // ( store , records , index , isMove , eOpts ) 
    },

    onStoreUpdate: function(store, record) { // ( this , record , operation , modifiedFieldNames , details , eOpts ) 
        var viewmodel = this.getViewModel();
        var hasCompleted = store.query('completed', true).length ? true : false;

        viewmodel.set('hasCompleted', hasCompleted);
    }
}); 