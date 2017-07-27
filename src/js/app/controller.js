'use strict';

define(function (require) {

  var App = require('app/app');
  var AboutLayout = require('app/about/layout');
  var ProjectsLayout = require('app/projects/layout');

  return {
    about: function () {
      App.navigation.currentView.setActive('about');
      App.content.$el.addClass('about').removeClass('projects');

      var aboutLayout = new AboutLayout();
      App.content.show(aboutLayout);
    },

    projects: function () {
      App.navigation.currentView.setActive('projects');
      App.content.$el.addClass('projects').removeClass('about');

      var projectsLayout = new ProjectsLayout();
      App.content.show(projectsLayout);
    }
  };
});
