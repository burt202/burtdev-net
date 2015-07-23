## Interactive Browser Usage Share Tool

Born out of a need to know the user share of browser versions that supported certain HTML5 features, this tool can hopefully be useful to many. Whether you're a developer, product owner or CTO, it should be able to answer the questions like, can we stop supporting this browser version yet? whats the adoption rate of the latest browser versions? when can we reliably use technology x without sacrificing any users? etc.

When originally built, a similar tool didn't exist, and I think the interactivity of it sets it self apart from other sites that has this kind of data at its disposal. It uses [statcounter](http://gs.statcounter.com) as its source, so you do have to trust their data sample, but it does seems to follow the common trends seen with other web statistics sites. The interface had to be slick for it to work and this was the first project I really pushed publicly so a lot of time was spent making sure it worked from a UX point of view. Under the hood, it is using [Silex](http://silex.sensiolabs.org) and [Twig](http://twig.sensiolabs.org), utilising [chartJs](http://www.chartjs.org) for data display on the front-end. In March 2013, it was featured in a online article for [net magazine](http://www.creativebloq.com/net-magazine).

* [view](http://browser.burtdev.net)
