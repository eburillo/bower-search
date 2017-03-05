import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {injectGlobal} from 'styled-components';
import store from './store.js';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);

// eslint-disable-next-line
injectGlobal`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    height: 100%;
    padding-bottom: 60px;
    position: relative;
  }
  #root {
    height: 100%;
  }
`;