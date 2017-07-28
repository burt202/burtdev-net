const React = require("react")
const ReactMarkdown = require("react-markdown")

const jsonQuery = require("../articles/json_query.md")
const liteUploader = require("../articles/lite_uploader.md")
const mp3Player = require("../articles/mp3_player.md")
const tableTennis = require("../articles/table_tennis_scoring.md")

const articles = [jsonQuery, liteUploader, mp3Player, tableTennis]

const Projects = React.createClass({
  displayName: "Projects",

  renderArticles() {
    return articles.map(function(md, index) {
      return <ReactMarkdown key={index} className="portfolio-item" source={md} />
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
