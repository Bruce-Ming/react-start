import { useObserver } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from '@stores/index';
import * as style from './App.scss';

import Routes from './routes/Routes';
import Hello from '@components/Hello';
import Mst from '@components/Mst';
import About from '@pages/About';

const Notes = React.lazy(() => import('@components/Notes'));

const App = () => {
  return useObserver(() => (
    <Router>
      <nav>
        <ul className={style.head}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todo">mobx-todo</Link>
          </li>
          <li>
            <Link to="/mst">MST</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Hello name="zdm"></Hello>
        </Route>
        <Route path="/todo">
          <React.Suspense fallback={null}>
            <Notes />
          </React.Suspense>
        </Route>
        <Route path="/mst">
          <React.Suspense fallback={null}>
            <Mst />
          </React.Suspense>
        </Route>
        <Route path="/">
          <div>主页</div>
        </Route>
      </Switch>

      {/* <Routes /> */}
    </Router>
  ));
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
