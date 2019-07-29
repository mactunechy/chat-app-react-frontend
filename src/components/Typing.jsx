import React from "react";
import MyContext from "../context";

export default function Typing() {
  return (
    <div className="typing-users">
      <MyContext.Consumer>
        {({ currentRoom, me }) => {
          const excludeMe = currentRoom.typingUsers.filter(user => user !== me);
          return excludeMe.length > 0 ? (
            <React.Fragment>
              <span className="typing-label">Typing:</span>
              {excludeMe.map(typer => (
                <span>{typer}</span>
              ))}
            </React.Fragment>
          ) : null;
        }}
      </MyContext.Consumer>
    </div>
  );
}
