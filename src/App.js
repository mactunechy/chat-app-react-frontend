import React, { Component } from "react";
import "./bootstrap.css";
import Layout from "./components/Layout";
import MyContext from "./context";
import socketIO from "socket.io-client";
import UserForm from "./components/UserForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: "",
      channels: [],
      currentChannel: null
    };
  }
  componentDidMount() {
    this.connectToServer();
    //this.getMessages();
    this.getChannels();
    this.getSelectedChannel();
  }

  connectToServer = () => {
    const URL = "http://localhost:8000";
    const socket = socketIO(URL);
    this.socket = socket;
  };
  getRoomMessages = id => {
    this.socket.on("room-messages", messages => {
      console.log("called");
      this.setState({ messages });
    });
  };
  getChannels = () => {
    this.socket.on("load-channels", channels => {
      this.setState({ channels });
    });
  };
  getSelectedChannel = () => {
    this.socket.on("get-selected-channel", channel => {
      this.setState({ currentChannel: channel, messages: channel.messages });
    });
  };

  selectRoom = channel => {
    this.socket.emit("select-channel", channel.id);
  };
  //SendMessage
  sendMessage = message => {
    const { user, currentChannel } = this.state;
    if (!user && !currentChannel) return;
    this.socket.emit("new-message", {
      channelId: currentChannel.id,
      message: { user, message }
    });
    this.getRoomMessages(currentChannel.id);
  };
  //Create room
  createChannel = name => {
    this.socket.emit("create-channel", name);
  };
  isTyping = () => {
    const { currentChannel, user } = this.state;
    this.socket.emit("user-typing", { channelId: currentChannel.id, user });
  };
  render() {
    return (
      <div className="app-center">
        {this.state.user.trim().length === 0 ? (
          <UserForm setUser={user => this.setState({ user })} />
        ) : (
          <MyContext.Provider
            value={{
              messages: this.state.messages,
              sendMessage: this.sendMessage,
              rooms: this.state.channels,
              subscribeToRoom: this.selectRoom,
              currentRoom: this.state.currentChannel,
              createRoom: this.createChannel,
              me: this.state.user,
              isTyping: this.isTyping
            }}
          >
            <Layout />
          </MyContext.Provider>
        )}
      </div>
    );
  }
}

export default App;
