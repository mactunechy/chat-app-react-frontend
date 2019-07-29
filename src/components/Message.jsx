import React from "react";
import moment from "moment";
import MyContext from "../context";

const Message = ({ user, date, message }) => (
  <MyContext.Consumer>
    {({ me }) => (
      <div className={user === me ? "me message" : "you message"}>
        <p>
          <span className="user">{user === me ? "You" : user} :</span>
          <span className="date">{moment(date).calendar()} </span>
        </p>
        <p>{message}</p>
      </div>
    )}
  </MyContext.Consumer>
);

export default Message;
