## Table Tennis Scoring

Created simply to facilitate a table tennis league we were having in our office. We wanted something that could be updated quickly and publicly viewable so all participants could keep an eye on all of the results coming in. Again, I decided a static site hosted on github pages seemed like the best form for it and the quickest to throw together.

Bash scripts were chosen to streamline the adding of all of the data, which is all stored in text files, before being used to dynamically regenerate the HTML needed for the results table. All changes are push-to-deploy, running a [Webpack](https://webpack.js.org/) build step to do all of the bundling.

The code is on github, but because of the nature of how github pages works, the repo needs to be forked before cloning to benefit from your own hosted league table.

* [Github Repo](https://github.com/burt202/table-tennis-scoring)
* [Npm](https://www.npmjs.com/package/table-tennis-scoring)
