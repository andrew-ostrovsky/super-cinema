import React from "react";
import _ from "lodash";
import {connect} from "react-redux";

import MovieListItem from '../MovieListItem/MovieListItem';
import {fetchMovies} from '../movies-actions';

export class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.requestMovieList();
    }

    render() {
        return (
            <div className="section">
                <div className="row">
                    <ul>
                        {this.props.data.map((movie) => {
                            return <MovieListItem
                                key={_.uniqueId('moveListItem_')}
                                id={movie.imdbID}
                                title={movie.Title}
                                genre={movie.Genre}
                                image={movie.Poster}/>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const componentState = state.movies;

    return {data: componentState.data, isLoading: componentState.isLoading};
}

function mapDispatchToProps(dispatch) {
    return {
        requestMovieList: () => {
            dispatch(fetchMovies());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
