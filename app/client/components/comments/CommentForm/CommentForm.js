import React from "react";
import {connect} from "react-redux";

import {addComment} from '../comments-actions';

export class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        let message = this.state.message.substr(0, 140);
        this.props.socket.emit('message', message);
        this.setState({message: ''});

        this.props.addComment({clientName: this.props.username ? this.props.username : 'Anonymous', message});
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
            <form className="movieCard__comments__form">
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
            </form>
        );
    }
}

function mapStateToProps(state) {
    const componentState = state.comments;
    return {data: componentState.data, username: state.user.data.username};
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (message) => {
            dispatch(addComment(message));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
