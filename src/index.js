import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddlewares} from './woniu-redux'
import { counter } from './index.redux'
import {Provider} from './woniu-react-redux'
import thunk from './woniu-redux-thunk'
import arrthunk from './woniu-redux-thunk-array'
//import registerServiceWorker from './registerServiceWorker';
//import './01.learn.redux'
///import Page from './context-demo'

const store = createStore(counter,applyMiddlewares(thunk,arrthunk));

ReactDOM.render(
(<Provider store={store}><App /></Provider>)
, document.getElementById('root'));
//registerServiceWorker();
