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

const Topic = () => {
  let history = useHistory();

  let { topicId } = useParams() as { topicId: string };
  console.log(useParams());
  const goback = () => {
    history.push('/about');
  };
  return (
    <div>
      <h3>Requested topic ID: {topicId}</h3>
      <button onClick={goback}>返回about组件 </button>
    </div>
  );
};
export default About;
