import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'draft-js/dist/Draft.css'
import {Provider} from 'react-redux'
import {createMyStore} from './store'
import reducer from '../src/reducer/index'

const store = createMyStore(reducer)
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
