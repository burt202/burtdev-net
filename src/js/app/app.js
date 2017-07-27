'use strict';

define(function (require) {

  var $ = require('jquery');
  var Marionette = require('marionette');
  var Backbone = require('backbone');
  var NavigationView = require('app/shared/navigation');

  var App = Marionette.Application.extend({
    openExternalLink: function (href) {
      window.open(href, '_blank');
    }
  });

  var app = new App();

  app.addRegions({
    navigation: '.navigation',
    content: '.content'
  });

  app.addInitializer(function () {
    this.navigation.show(new NavigationView());
    Backbone.history.start();

    $(document).on('click', 'a.external', function (e) {
      e.preventDefault();
      this.openExternalLink($(e.currentTarget).attr('href'));
    }.bind(this));
  });

  return app;
});
