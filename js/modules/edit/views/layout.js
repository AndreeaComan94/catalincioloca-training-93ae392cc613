define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var InfoComment = require('./infoComment');
    var Comments = require('../models/comments');

    module.exports = Marionette.Layout.extend({
        id: 'edit',
        template: '#edit-layout',

        regions: {
            infoComment: '#infoComment'
        },


        onRender: function() {
            var self = this;
            debugger;
            var commentsData = this.options.model.attributes['comments'];

                self.infoComment.show(new InfoComment({
                    collection: new Backbone.Collection(commentsData)
                }));

        },

        events: {
            "click #AddCommentButton" : "submitComment"
        },
        submitComment: function (event) {
            event.preventDefault();
            var text = document.getElementById("comment").value;
            var articleId = this.options.model.attributes['id'];

            $.ajax({
                url : "http://localhost:8080/home/articles/" + articleId + "/comments",
                type: "POST",
                data: JSON.stringify(
                    {
                        "content": text
                    }
                ),
                contentType: "application/json",//; charset=utf-8",
                dataType   : "json",
                success    : function(){
                    console.log("Pure jQuery Pure JS object");
                }
            });

        }

    });
});