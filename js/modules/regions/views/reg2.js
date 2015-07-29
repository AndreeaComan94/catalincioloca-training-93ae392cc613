/**
 * Created by UserA on 7/21/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var reg1 = require('./reg2');

    module.exports = Marionette.ItemView.extend({
        id: 'reg2',
        template: '#regions-reg2'
    });
});
