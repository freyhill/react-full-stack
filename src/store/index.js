/* eslint-disable no-console */
/********************
 * @file:redux main js
 * @author: leinov
 * @date: 2020-05
 ********************/

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducer/index';
import thunk from 'redux-thunk'
export default createStore(reducers, applyMiddleware(thunk));


  