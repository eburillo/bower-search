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
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
