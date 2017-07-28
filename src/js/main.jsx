const React = require("react")
const Router = require("react-router-dom")

const Switch = Router.Switch
const Route = Router.Route

require("../css/imports.less")
require("../../node_modules/ionicons/dist/css/ionicons.css")

const About = require("./about")
const Projects = require("./projects")
const NavigationItem = require("./navigation-item")

const Main = React.createClass({
  displayName: "Main",

  getInitialState() {
    return {
      activeNavItem: location.hash,
    }
  },

  onClick(name) {
    this.setState({
      activeNavItem: name,
    })
  },

  renderItem(item) {
    const active = item.href === this.state.activeNavItem

    return (
      <NavigationItem
        key={item.text}
        href={item.href}
        text={item.text}
        active={active}
        onClick={this.onClick}
      />
    )
  },

  renderAbout() {
    return <About navigateTo={this.onClick} />
  },

  renderProjects() {
    return <Projects openExternalLink={this.openExternalLink} />
  },

  openExternalLink(e) {
    e.preventDefault()
    window.open(e.target.href, "_blank")
  },

  render() {
    const navigationItems = [
      {href: "#/", text: "About"},
      {href: "#/projects", text: "Projects"},
    ]

    return (
      <div>
        <div className="banner">
          <div className="inner">
            <h1>Aaron Burtnyk</h1>
            <div className="navigation">
              <ul>
                {navigationItems.map(this.renderItem)}
              </ul>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="content">
            <Switch>
              <Route exact path="/" render={this.renderAbout} />
              <Route path="/projects" component={this.renderProjects} />
            </Switch>
          </div>
        </div>

        <div className="footer">

          <div className="contact">
            aaron@burtdev.net
          </div>

          <div className="logos">
            <ul>
              <li><a className="ion ion-logo-github" onClick={this.openExternalLink} href="https://github.com/burt202" title="Github"></a></li>
              <li><a className="ion ion-logo-twitter" onClick={this.openExternalLink} href="https://twitter.com/burt202" title="Twitter"></a></li>
              <li><a className="ion ion-logo-linkedin" onClick={this.openExternalLink} href="http://uk.linkedin.com/pub/aaron-burtnyk/36/b7/559" title="LinkedIn"></a></li>
            </ul>
          </div>

        </div>
      </div>
    )
  },
})

module.exports = Main
