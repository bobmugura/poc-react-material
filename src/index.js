import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import Search from './components/Search';

const routing = (
  <Router>
    <React.StrictMode>
      <div>
        <AppBar position='static' style={{height: 50}}>
          <div style={{position: 'absolute', top: '30%', marginLeft: '10px'}}>
            <b>Commander 3.0</b>
          </div>
        </AppBar>
      </div>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/search" component={Search} />
      </div>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
