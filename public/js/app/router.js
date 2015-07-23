'use strict';

define(function (require) {

  var Marionette = require('marionette');
  var Controller = require('app/controller');

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'about',
      'projects': 'projects'
    }
  });

  return new Router({
    controller: Controller
  });
});
