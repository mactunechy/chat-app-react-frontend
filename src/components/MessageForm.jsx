import React, { Component } from "react";
import MyContext from "../context";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  handleSubmit = sendMessage => {
    let { message } = this.state;
    if (message.trim().length === 0) return;
    sendMessage(message);
    return this.setState({ message: "" });
  };
  render() {
    return (
      <MyContext.Consumer>
        {({ sendMessage, isTyping }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit(sendMessage);
            }}
          >
            <input
              value={this.state.message}
              type="text"
              onKeyDown={isTyping}
              placeholder="Type message and hit ENTER"
              onChange={e => this.setState({ message: e.target.value })}
              className="message-form"
            />
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

export default MessageForm;
