const React = require("react")

require("../css/imports.less")
require("../../node_modules/ionicons/dist/css/ionicons.css")

const Main = React.createClass({
  displayName: "Main",

  render() {
    return (
      <div>
        <div className="banner">
          <div className="inner">
            <h1>Aaron Burtnyk</h1>
            <div className="navigation"></div>
          </div>
        </div>

        <div className="main">
          <div className="content">Under development</div>
        </div>

        <div className="footer">

          <div className="contact">
            aaron@burtdev.net
          </div>

          <div className="logos">
            <ul>
              <li><a className="ion ion-logo-github external" href="https://github.com/burt202" title="Github"></a></li>
              <li><a className="ion ion-logo-twitter external" href="https://twitter.com/burt202" title="Twitter"></a></li>
              <li><a className="ion ion-logo-linkedin external" href="http://uk.linkedin.com/pub/aaron-burtnyk/36/b7/559" title="LinkedIn"></a></li>
            </ul>
          </div>

        </div>
      </div>
    )
  },
})

module.exports = Main