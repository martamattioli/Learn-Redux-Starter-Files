// let's go!
// if we dont include the path it's because it's in the ndoe modules
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// these are the bindings that allow us to use redux with react
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// css
import css from './styles/style.scss';

const router = (
  // we need a Provider tag - this is going to expose our store to our application
  <Provider store={store}>
    {/* <Router history={browserHistory}> this is before we implement our redux store */}
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

// this is the bare minimum to test that react works
render(router, document.getElementById('root'));

//rather than holding our state in a component, we hold our state in a Redux store
