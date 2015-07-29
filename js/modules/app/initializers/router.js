define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var BlogRouter = require('modules/blog/router');
    var RegionsRouter = require('modules/regions/router');
    var EditRouter = require('modules/edit/router');
    var ArticleRouter = require('modules/articles/router');


    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new BlogRouter();
                new RegionsRouter();
                new EditRouter();
                new ArticleRouter();

            });
        }
    });

    module.exports = new RouterInitializer();
});
