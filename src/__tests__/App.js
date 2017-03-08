import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store.js';
import App from '../components/App';

describe('Render App', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div);
  });
});
