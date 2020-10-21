import Topic from '@components/Topic';
import React from 'react';
import { Link, Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom';

const About = () => {
  let match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h1>about组件</h1>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default About;
