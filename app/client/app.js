import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import AppBar from './components/common/AppBar/AppBar';
import MoviesList from './components/movies/MoviesList/MoviesList';

import appStyles from "./appStyles.less";
import store from "./store";

ReactDom.render((
  <Provider store={store}>
    <div className="container">
      <AppBar/>
      <MoviesList/>
    </div>
  </Provider>
), document.getElementById('app'));
