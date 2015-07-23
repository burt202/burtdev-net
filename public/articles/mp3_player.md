## HTML5 MP3 Player

Making use of the [HTML5 audio element](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio) and [media events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events), here is an example of how you can use the newer web technologies to create an MP3 player with many features you're likely to see on a desktop media player. Using the [getID3 PHP library](http://getid3.sourceforge.net) to extract the data from the MP3s, the interface around them is simple and intuitive.

With a [PHP](http://php.net) back-end, and using my typical stack of go-to technologies and frameworks (Silex/BackboneJS/MarionetteJS/RequireJS) I've been able to build a player with custom controls, filtering and sorting. It is heavily tested using [Jasmine](http://jasmine.github.io) and the JavaScript behind it is modular and well-structured. Obviously this could never really be used on a large scale because of server space and bandwidth issues but it shows that web apps are becoming far more capable in terms of functionality.

* [GitHub Repo](https://github.com/burt202/mp3-player)
