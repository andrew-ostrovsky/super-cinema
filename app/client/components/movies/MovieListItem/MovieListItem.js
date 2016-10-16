import React from "react";
import {Link} from "react-router"

import './movieListItem.less';

export default class MovieListItem extends React.Component {
    render() {
        return (
            <Link to={`/movie/${this.props.id}`}>
                <li className="movieListItem">
                    <div className="card">
                        <div className="card-image">
                            <img className="movieListItem__image" src={this.props.image !== 'N/A' ? this.props.image : '/images/placeholder.png'}/>
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
