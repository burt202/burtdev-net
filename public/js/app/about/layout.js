'use strict';

define(function (require) {

  var _ = require('underscore');
  var Marionette = require('marionette');
  var tpl = require('text!templates/about/content.html');

  return Marionette.LayoutView.extend({
    template: _.template(tpl)
  });
});
