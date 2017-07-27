const React = require("react")
const PropTypes = require("prop-types")
const classNames = require("classnames")

const NavigationItem = React.createClass({
  displayName: "NavigationItem",

  propTypes: {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  },

  onClick() {
    this.props.onClick(this.props.text)
  },

  render() {
    const className = classNames({
      active: this.props.active,
    })

    return (
      <li>
        <a href={this.props.href} className={className} onClick={this.onClick}>
          {this.props.text}
        </a>
      </li>
    )
  },
})

module.exports = NavigationItem
