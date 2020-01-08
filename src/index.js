import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers/index';

const store = createStore(reducer);

import './index.css';

//console.log(store.getState())

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));
