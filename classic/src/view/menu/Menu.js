Ext.define('Thewall.view.menu.Menu', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.tree.*',
        'Ext.data.TreeStore',
    ],

    layout: 'column',

    defaults: {
        columnWidth: 0.5,
        header: false
    },

    items: [{
        xtype: 'treepanel',
        region: 'center',

        store: {
            type: 'tree',
            data: [
                {
                    text: 'detention',
                    leaf: true
                },
                {
                    text: 'homework',
                    expanded: true,
                    children: [
                        {
                            text: 'book report',
                            leaf: true
                        },
                        {
                            text: 'algebra',
                            leaf: true
                        }
                    ] },
                {
                    text: 'buy lottery tickets',
                    leaf: true
                }
            ],
            root: {
                text: 'ExtJS',
                id: 'src',
                expanded: true
            }
        },

        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                ddGroup: 'two-trees-drag-drop',
                containerScroll: true
            }
        }
    }, {
        xtype: 'treepanel',
        region: 'west'
    }
    ]


});