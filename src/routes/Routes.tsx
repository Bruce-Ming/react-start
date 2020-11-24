import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routers from './index';

const Routes = () => {
  return (
    <Switch>
      {routers.map((r, key) => (
        <Route
          key={key}
          //component={r.component}
          exact={!!r.exact}
          path={r.path}
          render={(props) => {
            if (r.children) {
              return (
                <div>
                  <r.component props={props}></r.component>
                  <Switch>
                    {r.children.map((child, i) => (
                      <Route key={i} path={child.path} exact={child.exact} component={child.component} />
                    ))}
                    <Redirect to={r.children[0].path}></Redirect> // 子路由找不到，重定向到第一个子路由
                  </Switch>
                </div>
              );
            } else {
              return <r.component props={props}></r.component>;
            }
          }}
        />
      ))}
      <Redirect to="/404" />
    </Switch>
  );
};
export default Routes;
