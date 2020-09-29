import Hello from '@components/Hello';
import About from '@pages/About';
import { useObserver } from 'mobx-react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useStore, GlobalProvider } from '@stores/index';
import * as style from './App.scss';
import { TextState } from '@components/TextState';
import { Mst } from '@components/Mst';

const Notes = React.lazy(() => import('@components/Notes'));

const App = () => {
  const store = useStore();
  const [name, setName] = useState('');

  return useObserver(() => (
    <>
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
            <TextState />
            <div>主页测试</div>
            <div onClick={store.themeStore.toggleDarkMode}>{store.themeStore.isDarkMode}11111</div>
            <div>{store.mobxStore.name}</div>
            <div>{store.mobxStore.greeting}</div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                store.mobxStore.setName(name);
              }}
            />
            <button onClick={() => store.mobxStore.disposer()}>停止autorun</button>
            <button onClick={store.mobxStore.setNewName}>异步action</button>
          </Route>
        </Switch>
      </Router>
    </>
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
