define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var Region1 = require('./reg1');
    var Region2 = require('./reg2');
    var Region3 = require('./reg3');
    var Region4 = require('./reg4');

    module.exports = Marionette.Layout.extend({
        id: 'regions',
        template: '#regions-layout',
        regions: {
            reg1: '#reg1',
            reg2: '#reg2',
            reg3: '#reg3',
            reg4: '#reg4'
        },

        onRender: function () {
                this.reg1.show(new Region1());
                this.reg2.show(new Region2());
                this.reg3.show(new Region3());
                this.reg4.show(new Region4());
        }
    });
});