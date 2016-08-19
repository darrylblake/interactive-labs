import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
// import { Provider } from 'mobx-react';

import Main from '../containers/Main';
import Tour from '../containers/Tour';

// import Store from '../stores/store';
// const store = new Store();

export default (
  // <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/tour" component={Tour} />
    </Route>
  </Router>
  // </Provider>
);
