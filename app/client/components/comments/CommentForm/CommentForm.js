import React from "react";

export default class CommentForm extends React.Component {
    handleSubmit(event) {
        // Removed redux action to simplyfy app, currently socket.io send all new messages, still working on that part.
        this.props.socket.emit('message', this.state.message.substr(0, 140));
        this.setState({message: ''});
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
