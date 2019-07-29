import React, { Component } from "react";
import Message from "./Message.jsx";
import ReactDOM from "react-dom";
import MyContext from "../context";

class MessageList extends Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop === node.clientHeight + 100 >= node.scrollHeight;
  }
  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {({ messages }) => {
          console.log("messages: ", messages);
          return messages.map((message, index) => (
            <Message
              key={index}
              message={message.message}
              date={message.date}
              user={message.user}
            />
          ));
        }}
      </MyContext.Consumer>
    );
  }
}

export default MessageList;
