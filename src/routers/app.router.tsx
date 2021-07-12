import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Redirect from="*" to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
