import React from "react";
import {connect} from "react-redux";

import './movieCard.less';

import {fetchMovie} from './movie-actions';
import {getMoviePosterOrPlaceholder} from '../../utils/utils';
import CommentBox from '../comments/CommentBox/CommentBox';

export class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!this.props.movie) {
            this.props.requestMovie(this.props.id);
        }
    }

    isLoading() {
        return this.props.isLoading || !this.props.movie;
    }

    render() {
        return this.isLoading()
            ? <div>Data is loading....</div>
            : (
                <div className="movieCard">
                    <div className="movieCard__content">
                        <div className="movieCard__poster">
                            <img src={getMoviePosterOrPlaceholder(this.props.movie.Poster)}/>
                        </div>
                        <div className="movieCard__description">
                            <div className="movieCard__title">{this.props.movie.Title}</div>
                            <div>
                                <span className="movieCard__label">Description</span>
                                - {this.props.movie.Plot}
                            </div>
                            <div>
                                <span className="movieCard__label">Cast</span>
                                - {this.props.movie.Actors}
                            </div>
                        </div>
                    </div>
                    <CommentBox movieId={this.props.id}/>
                </div>
            );
    }
}

MovieCard.propTypes = {
    id: React.PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    const componentState = state.movie;

    return {
        movie: componentState.data[ownProps.id],
        isLoading: componentState.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        requestMovie: (id) => {
            dispatch(fetchMovie(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
