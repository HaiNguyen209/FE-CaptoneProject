import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/scss/bootstrap.scss';
import '../scss/app.scss';

// import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Forum from './pages/Forum';

const queryClient = new QueryClient();
const Root = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/Sign-in" component={SignIn} />
          <Route path="/Sign-up" component={SignUp} />
          <Route path="/Forum" component={Forum} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default Root;
