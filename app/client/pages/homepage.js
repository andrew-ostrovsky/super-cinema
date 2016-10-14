import React from "react";

import AppBar from '../components/common/AppBar/AppBar';
import MoviesList from '../components/movies/MoviesList/MoviesList';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <AppBar/>
                <div className="appContent">
                    {this.props.children || <MoviesList/>}
                </div>
            </div>
        );
    }
}
