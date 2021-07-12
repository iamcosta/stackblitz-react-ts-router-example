import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/home';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect from="*" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
