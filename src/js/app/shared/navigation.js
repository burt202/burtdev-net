'use strict';

define(function (require) {

  var _ = require('underscore');
  var Marionette = require('marionette');
  var tpl = require('text!templates/shared/navigation.html');

  return Marionette.ItemView.extend({
    template: _.template(tpl),
    tagName: 'nav',

    ui: {
      navLink: 'li a'
    },

    setActive: function (link) {
      this.ui.navLink.removeClass('active');
      this.ui.navLink.filter('.' + link).addClass('active');
    }
  });
});
