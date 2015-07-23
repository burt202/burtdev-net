## rJS Redundancy Checker

A tool that cross-references your rJS ([RequireJS optimisation](http://requirejs.org/docs/optimization.html)) build log with the public assets in your project and highlights which files are not being bundled and potentially not needed anymore. Useful if you want to keep redundancy in your codebase to a minimum. It comes with a set of configurable options and has been successfully used as part of a [CI](http://martinfowler.com/articles/continuousIntegration.html) build server (as a step to reports its output and guard against too much redundancy) in previous place I worked in. This is also this first module Ive written that I've then gone on publish on [NPM](https://www.npmjs.com/).

* [Github Repo](https://github.com/burt202/rjs-redundancy-checker)
* [NPM Page](https://www.npmjs.com/package/rjs-redundancy-checker)
