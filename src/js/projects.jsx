const React = require("react")
const PropTypes = require("prop-types")

const ReactMarkdown = require("react-markdown")

const jsonQuery = require("../articles/json_query.md")
const liteUploader = require("../articles/lite_uploader.md")
const mp3Player = require("../articles/mp3_player.md")
const tableTennis = require("../articles/table_tennis_scoring.md")

const articles = [jsonQuery, liteUploader, mp3Player, tableTennis]

const Projects = React.createClass({
  displayName: "Projects",

  propTypes: {
    openExternalLink: PropTypes.func.isRequired,
  },

  renderArticles() {
    const openExternalLink = this.props.openExternalLink

    const renderers = {
      link(prps) {
        return (
          <a href={prps.href} className="site-link" onClick={openExternalLink}>
            {prps.children}
          </a>
        )
      },
    }

    return articles.map(function(md, index) {
      return <ReactMarkdown key={index} className="portfolio-item" source={md} renderers={renderers} />
    })
  },

  render() {
    return (
      <div className="projects">
        {this.renderArticles()}
      </div>
    )
  },
})

module.exports = Projects
