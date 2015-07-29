define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var RegionsLayout = require('../views/layout');

    var RegionsRouteController = Marionette.Controller.extend({
        showRegions: function () {
            app.showLayout(new RegionsLayout);
        }
    });

    module.exports = new RegionsRouteController();
});