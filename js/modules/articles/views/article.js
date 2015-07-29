define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'infoTpl',
        className: 'li',
        template: '#articles-article',

        events: {
            'click .editArticle': 'editArticle'
        },

        editArticle: function() {

            Backbone.history.navigate('#edit/' + this.model.id, {trigger: true})
        }
    });

});