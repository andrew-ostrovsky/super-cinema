import React from "react";

import './movieListItem.less';

export default class MovieListItem extends React.Component {
    render() {
        return (
          <li className="movieListItem">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator movieListItem__image" src={this.props.image}/>
                </div>
            </div>
            <div className="movieListItem__title">{this.props.title}</div>
            <div className="movieListItem__description">{this.props.genre}</div>
          </li>
        );
    }
}

MovieListItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    genre: React.PropTypes.string,
    image: React.PropTypes.string,
};
