import React from 'react';//initialize redux in this file first
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';//keep track of store which is a  global state that allows to access the store from anywhere in the project
import {createStore,applyMiddleware,compose} from 'redux';
//import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import reducers from'./reducers';


const store=createStore(reducers,compose(applyMiddleware(thunk)))
// const store = configureStore({
//   reducer: reducers,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);