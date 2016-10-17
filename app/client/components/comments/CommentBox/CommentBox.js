import React from "react";
import {connect} from "react-redux";
import io from "socket.io-client";

import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

const socket = io();

export default class CommentBox extends React.Component {
    render() {
        return (
          <div className="movieCard__comments">
              <CommentForm socket={socket}/>
              <CommentList socket={socket}/>
          </div>
        );
    }
}
