import React from "react";

import AppBar from '../components/common/AppBar/AppBar';
import MoviesList from '../components/movies/MoviesList/MoviesList';
import SideBar from '../components/common/SideBar/SideBar';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <AppBar/>
                <div className="container">
                  <div className="appContent">
                      {this.props.children || <MoviesList/>}
                  </div>
                  <SideBar/>
                </div>
            </div>
        );
    }
}
