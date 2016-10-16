import React from "react";

import AppBar from '../components/common/AppBar/AppBar';
import MoviesList from '../components/movies/MoviesList/MoviesList';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <AppBar/>
                <div className="container">
                  <div className="appContent">
                      {this.props.children || <MoviesList/>}
                  </div>
                  <div className="sidebar">
                    <div className="userPanel">
                        <img src="http://www.material-ui.com/images/ok-128.jpg" className="userIcon"/>
                        <span className="userGreeting">Hi, Anonymous</span>
                    </div>
                    <ul className="leftMenu">
                      <li className="menuItem">My Collection</li>
                      <li className="menuItem menuItem--active">Trending Movies</li>
                    </ul>
                  </div>
                </div>
            </div>
        );
    }
}
