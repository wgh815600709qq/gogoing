import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from '../src/store/reducers/index.js'
import registerServiceWorker from './registerServiceWorker';
let store = createStore(rootReducer)
store.subscribe(() => {
  console.log('listener', store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
