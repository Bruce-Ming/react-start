import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routers from './index';

const Routes = () => {
  return (
    <Switch>
      {routers.map((r, key) => (
        <Route key={key} component={r.component} exact={!!r.exact} path={r.path} />
      ))}
      <Redirect to="/404" />
    </Switch>
  );
};
export default Routes;
