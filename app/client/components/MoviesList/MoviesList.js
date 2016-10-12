import React from "react";
import _ from "lodash";

import MovieListItem from '../MovieListItem/MovieListItem';

// @todo replace this with request to backend
import MoviesJsonData from 'json!../../../static/movies.json';

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="section">
              <div className="row">
                <ul>
                  {MoviesJsonData.map((movie) => {
                    return <MovieListItem
                      key={_.uniqueId('moveListItem_')}
                      title={movie.Title}
                      genre={movie.Genre}
                      image={movie.Poster}
                    />
                  })}
                </ul>
              </div>
            </div>
        );
    }
}
