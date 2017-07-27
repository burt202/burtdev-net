const React = require("react")
const ReactDOM = require("react-dom")
const Main = require("./main")

const Router = require("react-router-dom")
const HashRouter = Router.HashRouter

ReactDOM.render((
    <HashRouter>
      <Main />
    </HashRouter>
  ), document.body.querySelector(".container")
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./main", function() {
    const AppContainer = require("react-hot-loader").AppContainer
    const Main = require("./main")

    ReactDOM.render(
      <AppContainer>
        <HashRouter>
          <Main />
        </HashRouter>
      </AppContainer>,
      document.body.querySelector(".container")
    )
  })
}
