'use strict';

define(function (require) {

  var _ = require('underscore');
  var Marionette = require('marionette');
  var tpl = require('text!templates/projects/content.html');

  return Marionette.LayoutView.extend({
    template: _.template(tpl),

    ui: {
      externalLinks: '.portfolio-item a',
    },

    onRender: function () {
      this.ui.externalLinks.addClass('site-link external');
    }
  });
});
