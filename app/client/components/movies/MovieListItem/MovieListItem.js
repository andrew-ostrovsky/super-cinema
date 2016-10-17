import React from "react";
import {Link} from "react-router"

import './movieListItem.less';
import {getMoviePosterOrPlaceholder} from '../../../utils/utils';

export default class MovieListItem extends React.Component {
    render() {
        return (
            <Link to={`/movie/${this.props.id}`}>
                <li className="movieListItem">
                    <div className="card">
                        <div className="card-image">
                            <img
                                className="movieListItem__image"
                                src={getMoviePosterOrPlaceholder(this.props.image)}/>
                        </div>
                    </div>
                    <div className="movieListItem__title">{this.props.title}</div>
                    <div className="movieListItem__description">{this.props.genre}</div>
                </li>
            </Link>
        );
    }
}

MovieListItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    genre: React.PropTypes.string,
    image: React.PropTypes.string
};
