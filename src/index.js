/********************
 * @file:movie main
 * @author: leinov
 * @date: 2020-05
 ********************/

import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app.js";
import "./index.scss";
import store from './store/index';
import {Provider} from 'react-redux';
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"));
		
