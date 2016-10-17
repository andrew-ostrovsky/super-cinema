import React from "react";

export default class Comment extends React.Component {
    render() {
        return (
          <div className="movieCard_comments__list__item">
            <div className="movieCard__comments__list__item_user">
              <img src="/images/anonymous-icon.jpg" className="UserPanel__icon"/>
              <span className="UserPanel__greeting">{this.props.author}</span>
            </div>
            <div>
              {this.props.message}
            </div>
          </div>
        );
    }
}
