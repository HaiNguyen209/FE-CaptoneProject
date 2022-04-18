/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/scss/bootstrap.scss';
import '../scss/app.scss';

import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
// import SignIn from './pages/SignIn';

const queryClient = new QueryClient();
const Root = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default Root;
