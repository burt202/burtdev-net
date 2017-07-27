## HTML5 MP3 Player

Making use of the [HTML5 audio element](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio) and [media events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events), here is an example of how you can use the newer web technologies to create an MP3 player with many features you're likely to see on a desktop media player. Using the [mp3 parser npm module](https://www.npmjs.com/package/mp3-parser) to extract the data from the MP3s, the interface around them is simple and intuitive.

With a [NodeJS](https://nodejs.org/en/) back-end, and [BackboneJS](http://backbonejs.org/)/[MarionetteJS](http://marionettejs.com/)/[RequireJS](http://requirejs.org/) on the front end, I've been able to build a player with custom controls, filtering and sorting. It is heavily tested using [Jasmine](http://jasmine.github.io) and overall this was a fun little project to undertake.

* [GitHub Repo](https://github.com/burt202/mp3-player)
