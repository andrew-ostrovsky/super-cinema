import React from "react";

import './navigationMenu.less';

export default class NavigationMenu extends React.Component {
    render() {
        return (
          <ul className="NavigationMenu">
            <li className="NavigationMenu__item">My Collection</li>
            <li className="NavigationMenu__item NavigationMenu__item--active">Trending Movies</li>
          </ul>
        );
    }
}
