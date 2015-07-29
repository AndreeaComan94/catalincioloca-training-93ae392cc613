define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Comment = require('./comment');

    module.exports = Marionette.CompositeView.extend({
        id: 'infoTpl',
        className: 'ul',
        template: '#comments-infoTpl',
        itemViewContainer: '#comments',
        itemView: Comment,

    });
});