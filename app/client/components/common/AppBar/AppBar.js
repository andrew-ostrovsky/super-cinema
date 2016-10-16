import React from "react";
import './appBar.less';

export default class AppBar extends React.Component {
    render() {
        return (
            <div className="appBar">
                <span className="appBar__label">Trending Movies</span>
            </div>
        );
    }
}
