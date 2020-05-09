/* eslint-disable no-console */
/********************
 * @file:redux main js
 * @author: leinov
 * @date: 2020-05
 ********************/

import {createStore} from 'redux';
import reducers from './reducer/index';

export default createStore(reducers);


  