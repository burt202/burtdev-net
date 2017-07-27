const React = require("react")
const PropTypes = require("prop-types")

const About = React.createClass({
  displayName: "About",

  propTypes: {
    navigateTo: PropTypes.func.isRequired,
  },

  onClick() {
    this.props.navigateTo("Projects")
  },

  render() {
    return (
      <div>
        <div className="section">
          <h2>Web Developer based in Bristol, UK</h2>
          <p>Welcome to my little space on the internet. Here you'll find out a little bit about my experience and info on some of my <a href="#projects" className="site-link" onClick={this.onClick}>recent projects</a>. Feel free to get in touch.</p>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <p>Over 7 years professional experience building applications from a cloud-based website builder, a data reporting tool, a helpdesk system, an HR management solution, to a money planning mobile app for companies ranging in size from startups to international corporations.</p>

          <p>Technologies covered include HTML5, CSS3, JavaScript, ES6, LESS, BackboneJS (with marionette), reactJS, Flux, mocha/chai/sinon, nodeJS, gulpJS, Webpack, CoffeeScript, PHP, MySQL, relational database design, mongoDB, TDD, automated UI testing, Git, agile SDLC methods, REST, MVC, OO, functional programming, statically built websites, and building data-driven systems.</p>
        </div>
      </div>
    )
  },
})

module.exports = About
