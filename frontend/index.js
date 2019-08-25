// Directory layout:
//   - frontend/index.js
//   - frontend/index.template.ejs (used by HtmlWebpackPlugin, @see html5-webpack.yasnippet)
//   - frontend/components/Sample/Sample.js
//   - frontend/components/Dashboard/Dashboard.js
//   - frontend/styles/ (storing global css files)
//   - frontend-dist/
//   - node_modules/
//   - package.json (@see package-reactjs.yasnippet)
//   - webpack.config.js (@see main-webpack.yasnippet)
//   - .babelrc (file contents: {"presets": ["react", "es2015"], "plugins": ["transform-object-rest-spread"]})

// ie 9

// Client entry point
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'; // route saved into store
import {
  getRoutePath,
} from 'supports/Common/Common.support';
import Notification from 'components/Ui/MSNotification/MSNotification';
import store from 'redux/store/RootStore';

require('es5-shim');

// master page stylesheet
class App extends React.Component {
  render() {
    // "a full width container, spanning the entire width of your viewport', quoted from bootstrap docuemntation
    const {
      children,
    } = this.props;
    return (
      <div>
        <Notification />
        {children}
      </div>
    );
  }
}

// the path is relative to the root directory which defined in webpack.config.js
//
// resolve: {
//   extensions: ['', '.js', '.jsx'],
//   modules: [
//     'frontend',
//     'node_modules'
//   ],
//   // root for es2015 import
//   // @see http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/
//   root: [
//     path.resolve('./frontend/components')
//   ]
// }
const rootRoute = {
  // We use dynamic routes which can be changed programmically
  // @see https://github.com/ReactTraining/react-router/blob/master/docs/API.md
  path: getRoutePath(), // the reason we use dynamic route
  component: App,
  indexRoute: {
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        // use [yas] elisp error: Symbol's value as variable is void: \./Home/Home\.js if you prefer relative index.js
        cb(null, require('components/Ui/Dashboard/Dashboard').default);
      });
    },
  },
  childRoutes: [
    {
      path: 'sample',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('components/Ui/Sample/Sample').default);
        });
      },
    },
  ],
};

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {rootRoute}
    </Router>
  </Provider>,
  document.getElementById('app'),
);
