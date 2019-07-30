import React from "react";
import MessageList from "./MessageList";
import MyContext from "../context";
import SelectRoom from "./SelectRoom";
import Typing from "./Typing";
const Main = props => {
  return (
    <MyContext.Consumer>
      {({ currentRoom }) => {
        return currentRoom ? (
          <div className="main">
            <Typing />
            <MessageList />
          </div>
        ) : (
          <SelectRoom />
        );
      }}
    </MyContext.Consumer>
  );
};

export default Main;
