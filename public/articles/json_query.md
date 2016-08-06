## JsonQuery.co.uk

Born out of a need to query large arrays of JSON data, I created jsonquery.co.uk because I couldn't find any existing tools up to the job. Yes you could use something like [ramda-cli](https://github.com/raine/ramda-cli) or write a simple nodeJS script each time, but that isn't convenient and takes time and effort.

With this tool, you give it a schema describing the properties and their types, and the raw data, before an interactive interface is displayed allowing you to really drill down into your data with multiple filters and grouping. It comes with an simple example and the aim is for it to become a popular dev tool over time.

Underneath it is a static-site generated and deployed using [gulp](http://gulpjs.com/) tasks hosted on [github pages](https://pages.github.com/) which is quickly becoming my method of choice for smaller projects.

* [Website](http://jsonquery.co.uk/)
