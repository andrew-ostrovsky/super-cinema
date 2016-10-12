import React from "react";

import MovieListItem from '../MovieListItem/MovieListItem';

export default class extends React.Component {
    render() {
        return (
            <div className="section">
              <div className="row">
                <ul>
                  <MovieListItem/>
                  <MovieListItem/>
                  <MovieListItem/>
                  <MovieListItem/>
                  <MovieListItem/>
                  <MovieListItem/>
                </ul>
              </div>
            </div>
        );
    }
}
