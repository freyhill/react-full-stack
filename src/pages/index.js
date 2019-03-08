/********************
 * @file:movie main
 * @author: leinov
 * @date: 2019-03-03
 ********************/

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "store/index.js";
import App from "./app.js";
import "./index.scss";

const store = configStore();
ReactDOM.render(
	<Provider store={store}>   
		<App />
	</Provider>, 
	document.getElementById("root"));
