import React from "react";
import {connect} from "react-redux";

import {addComment} from '../comments-actions';

export class CommentForm extends React.Component {
    handleSubmit(event) {
        let message = this.state.message.substr(0, 140);
        this.props.socket.emit('message', message);
        this.setState({message: ''});

        // @todo get clientName from store
        this.props.addComment({clientName: 'Anonymous', message});
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };
    }

    render() {
        return (
            <div className="movieCard__comments__form">
                <div className="movieCard__comments__fieldset">
                    <textarea
                        onChange={this.handleChange.bind(this)}
                        value={this.state.message}
                        placeholder="Enter your comment..."
                        className="movieCard__comments__text"></textarea>
                </div>
                <button
                    onClick={this.handleSubmit.bind(this)}
                    type=""
                    className="btn waves-effect waves-light">
                    Submit
                </button>
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
        addComment: (message) => {
            dispatch(addComment(message));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
