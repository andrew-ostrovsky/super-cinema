import React from "react";

import './userPanel.less';

export default class UserPanel extends React.Component {
    render() {
        return (
          <div className="UserPanel">
              <img src="/images/anonymous-icon.jpg" className="UserPanel__icon"/>
              <span className="UserPanel__greeting">Hi, Anonymous</span>
          </div>
        );
    }
}
