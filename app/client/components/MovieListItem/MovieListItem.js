import React from "react";

import './movieListItem.less';

export default class extends React.Component {
    render() {
        return (
          <li className="moveListItem">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="https://image.tmdb.org/t/p/w640/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg"/>
                </div>
            </div>
            <div className="moveListItem__title">Title</div>
            <div className="moveListItem__description">Genre</div>
          </li>
        );
    }
}
