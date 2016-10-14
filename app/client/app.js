import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import HomePage from './pages/homepage';
import MoviePage from './pages/movie';

import appStyles from "./appStyles.less";
import store from "./store";

ReactDom.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={HomePage}>
                <Route path="/movie/:id" component={MoviePage}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
