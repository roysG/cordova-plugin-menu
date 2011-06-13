(function() {

    window.Help._execute = {
        'com.phonegap.menu.toolbar': {
            'create': function(data) {
                window.Help._execute['com.phonegap.menu.context']['create'](data);
            },
            'delete': function(data) {
                window.Help._execute['com.phonegap.menu.context']['delete'](data);
            },
            'label': function(data) {
                window.Help._execute['com.phonegap.menu.context']['label'](data);
            }
        },
        'com.phonegap.menu.context': {
            'create': function(data) {
                PhoneGap.exec(
                    function() {},
                    function() {},
                    'appMenu',
                    'setupMenu',
                    []
                );
            },
            'delete': function(data) {
                console.log('Unsupported: com.phonegap.menu.context :: delete');
            },
            'label': function(data) {
                console.log('Unsupported: com.phonegap.menu.context :: label');
            }
        },
        'com.phonegap.menu.toolbar.command': {
            'create': function(data) {
                window.Help._execute['com.phonegap.menu.context.command']['create'](data);
            },
            'delete': function(data) {
                window.Help._execute['com.phonegap.menu.context.command']['delete'](data);
            },
            'accesskey': function(data) {
                window.Help._execute['com.phonegap.menu.context.command']['accesskey'](data);
            },
            'action': function(data) {
                window.Help._execute['com.phonegap.menu.context.command']['action'](data);
            },
            'disabled': function(data) {
                window.Help._execute['com.phonegap.menu.context.command']['disabled'](data);
            },
            'icon': function(data) {
                window.Help._execute['com.phonegap.menu.context.command']['icon'](data);
            },
            'label': function(data) {
                window.Help._execute['com.phonegap.menu.context.command']['label'](data);
            }
        },
        'com.phonegap.menu.context.command': {
            'create': function(data) {
                PhoneGap.exec(
                    function() {},
                    function() {},
                    'appMenu',
                    'addItem',
                    [{
                        label:    data['label'],
                        icon:     data['icon'],
                        callback: ''
                    }]
                );
            },
            'delete': function(data) {
                PhoneGap.exec(
                    function() {},
                    function() {},
                    'appMenu',
                    'removeItem',
                    [ data['data-uuid'] ]
                );
            },
            'accesskey': function(data) {
                console.log('Unsupported: com.phonegap.menu.toolbar.command :: accesskey');
            },
            'action': function(data) {
                console.log('Unsupported: com.phonegap.menu.toolbar.command :: action');
            },
            'disabled': function(data) {
                console.log('Unsupported: com.phonegap.menu.toolbar.command :: disabled');
            },
            'icon': function(data) {
                console.log('Unsupported: com.phonegap.menu.toolbar.command :: icon');
            },
            'label': function(data) {
                console.log('Unsupported: com.phonegap.menu.toolbar.command :: label');
            }
        }
    };
    
    window.Help.execute = function(options) {
        if (typeof options.data === 'undefined') options.data = [];

        var service = this.generateService(options.element);
        var action  = options.action;

        window.Help._execute[service][action](options.element.attribute);
    };
    
    window.addEventListener('load', function() {
        document.addEventListener('deviceready', function() {
            PhoneGap.addConstructor(function() {
                console.log('Adding the plugin');
                // PhoneGap.addPlugin('nativeMenu', new NativeMenu());
                // This causes cancer
                navigator.app.addService('appMenu', 'com.phonegap.menu.AppMenu');
            });
        }, false);
    }, false);

})();
// 
// 
// 
// 
// 
// 
// 
// 
// var NativeMenu = function(){
// }
// 
// NativeMenu.prototype.init = function(element, win, fail) 
// {
//     console.log(element);
//     var children = element.childNodes;
//     console.log("Number of children: " + children.length);
//     var menuJson = [];
//     for (child in children) {
//         var menuItem = {};
//         menuItem.label = child.getAttribute('label');
//         menuItem.icon = child.getAttribute('icon');
//         var accessKey = child.getAttribute('accessKey');
//         if(accessKey != "back")
//         {
//             menuItem.accessKey = accessKey;
//             menuJson.push(menuItem);
//         }
//     }
//     var params = JSON.stringify(menuJson);
//     PhoneGap.exec(
//         function(args) {
//             win(args);
//         },
//         function() {
//             fail(args); 
//         },
//         'appMenu', 'setupMenu', [params]);
// }
// 
// NativeMenu.prototype.jsonAddMenu = function(json)
// {
//     PhoneGap.exec(
//         function(args) {
//         },
//         function(args) {
//         },
//         'appMenu', 'addItem', [json]);
// 
// }
// 
// NativeMenu.prototype.removeItem = function(id)
// {
//     PhoneGap.exec(
//         function(args) {
//         },
//         function(args) {
//         },
//         'appMenu', 'removeItem', [id]);
// }
// 
// NativeMenu.prototype.jsonInit = function(json)
// {
//     PhoneGap.exec(
//         function(args) {
//             win(args);
//         },
//         function(args) {
//             fail(args); 
//         },
//         'appMenu', 'setupMenu', [json]);
// }
// 
// PhoneGap.addConstructor(function()
// {
//     console.log('Adding the plugin');
//     PhoneGap.addPlugin('nativeMenu', new NativeMenu());
//     // This causes cancer
//     navigator.app.addService('appMenu', 'com.phonegap.menu.AppMenu');
// });
