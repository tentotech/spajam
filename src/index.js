import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {AppContainer} from 'react-hot-loader'
import {createStore, applyMiddleware} from 'redux'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import * as _ from 'lodash'
import App from './components/App'
import {reducer} from './reducers'


const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(browserHistory)))
const store = createStore(reducer, middleware)
const history = syncHistoryWithStore(browserHistory, store)

function renderHMR(App) {
  render(
    <AppContainer>
      <App store={store} history={history} />
    </AppContainer>,
    document.getElementsByTagName('div')[0]
  )
}
renderHMR(App)

if (module.hot) {
  module.hot.accept('./components', () => {
    const App = require('./components/App').default
    renderHMR(App)
  })

  module.hot.accept('./reducers', () => {
    const reducer = require('./reducers').reducer
    store.replaceReducer(reducer)
  })
}
