import React from "react";
import {connect} from "react-redux";
import _ from 'lodash';

import Comment from '../Comment/Comment';
import {receiveComment, clientJoins} from '../comments-actions';

export class CommentList extends React.Component {
    componentWillMount() {
        this.props.socket.on('connect', () => {
            this.inializeNewSocketConnection();

            this.props.socket.on('message', (message) => {
                this.props.receiveComment(message);
            });
        });
    }

    inializeNewSocketConnection() {
        // @todo receive userName from store
        this.props.socket.emit('join', {
            name: 'Anonymous',
            room: this.props.movieId
        });
        this.props.clientJoins();
    }

    render() {
        return (
            <div>
                <div>Comments</div>
                <div className="movieCard_comments__list">
                    {this.props.data.map((comment) => {
                        return <Comment
                            key={_.uniqueId('comment_')}
                            author={comment.clientName}
                            message={comment.message}/>
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const componentState = state.comments;
    return {data: componentState.data};
}

function mapDispatchToProps(dispatch) {
    return {
        receiveComment: (message) => {
            dispatch(receiveComment(message));
        },
        clientJoins: () => {
            dispatch(clientJoins());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
