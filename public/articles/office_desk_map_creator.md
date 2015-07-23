## Office Desk Map Creator

Largely pointless, but a good small project nonetheless. Useful for visualizing and planning your office, it includes a [JSON](http://json.org) export so you can come back and edit it later, as well as sliders to change the grid size. You can save infomation against each desk/cell so it could be useful for new starters learning names and responsibilities of their new colleagues. It uses [Backbone.js](http://backbonejs.org) with Marionette which was essential for managing the complex view relationships. It also is a fully client-side project with no back-end at all. This introduced challenges surrounding bundling the assets automatically when it gets deployed, but after finding [gulp-html-replace](https://github.com/VFK/gulp-html-replace), it wasnt too tricky.

* [Github Repo](https://github.com/burt202/office-desk-map-generator)
