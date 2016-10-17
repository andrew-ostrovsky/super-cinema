import React from "react";

import './sidebar.less';

import UserPanel from '../UserPanel/UserPanel';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

export default class SideBar extends React.Component {
    render() {
        return (
          <div className="SideBar">
            <UserPanel/>
            <NavigationMenu/>
          </div>
        );
    }
}
