import React from "react";

import MovieCard from '../components/MovieCard/MovieCard';

export default class MoviePage extends React.Component {
    render() {
        return (
            <div className="moviePage">
              <MovieCard id={this.props.params.id}/>
            </div>
        );
    }
}
