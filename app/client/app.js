import React from "react";
import ReactDom from "react-dom";

import AppBar from './components/AppBar/AppBar';
import MoviesList from './components/MoviesList/MoviesList';

import appStyles from "./appStyles.less";

ReactDom.render((
  <div className="container">
    <AppBar/>
    <MoviesList/>
  </div>
), document.getElementById('app'));
