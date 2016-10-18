import React from "react";
import {connect} from "react-redux";
import io from "socket.io-client";

import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null
        };
    }
    componentWillMount() {
        this.setState({socket: io()});
    }
    componentWillUnmount() {
        this.state.socket.disconnect();
    }

    render() {
        return (
            <div className="movieCard__comments">
                <CommentForm socket={this.state.socket}/>
                <CommentList movieId={this.props.movieId} socket={this.state.socket}/>
            </div>
        );
    }
}
