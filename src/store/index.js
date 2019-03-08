/* eslint-disable no-console */
/********************
 * @file:redux main js
 * @author: leinov
 * @date: 2019-03-03
 ********************/

import { createStore ,applyMiddleware, compose} from "redux";
import reducers from "./reducer/index";
import thunk from 'redux-thunk';
console.log(process.env.NODE_ENV);
export default function configStore() {

const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      (process.env.NODE_ENV === 'development') &&
        typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );
	return store;
}


  