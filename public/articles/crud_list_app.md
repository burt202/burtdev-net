## CRUD List App

This little project is the result of me wanting to try out [NodeJS](http://nodejs.org), something that was (and still is) making a lot of noise in web-development world. Functionally this app doesn't do a lot, but it is its simplicity that has allowed it to become my prototype app and test-bed for new frameworks and technologies.

It uses many libraries from [MongoDB](http://www.mongodb.org) as the database, Backbone.js (with [Marionette](http://marionettejs.com)) for the front-end interaction, to [RequireJS](http://requirejs.org) to manage the modules and their dependencies. As well as being the first project of mine to include use of a JavaScript task runner (I'm using [gulp](http://gulpjs.com)), it has also allowed me to really focus on the different parts of testing from plain old unit testing, to API testing and automated UI testing, which has been a very interesting journey.

One of biggest challenges with this project was to get all of the libraries (that were carefully chosen), to work together seamlessly. From having gulp tasks that compile [LESS](http://lesscss.org), bundle the JS assets using RequireJS optimisation, and provide test coverage using [Istanbul](http://gotwarlost.github.io/istanbul), I think its been achieved. Overall, this has been a very satisfying project and hopefully one that I can use to continually push and broaden my skills.

* [GitHub Repo](https://github.com/burt202/crud-list)
