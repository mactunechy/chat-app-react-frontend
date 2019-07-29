import React from "react";
import MyContext from "../context";

const Navbar = props => {
  return (
    <div className="nav">
      <h3 className="channels-header mt-3 ml-4 channel-header">Channels</h3>
      <MyContext.Consumer>
        {({ rooms, currentRoom, subscribeToRoom }) => {
          return (
            <ul className="channels-list">
              {rooms.map(room => (
                <li key={room.id}>
                  <a
                    className={`room-item ${
                      currentRoom && currentRoom.id === room.id ? "active" : ""
                    }`}
                    href="#"
                    onClick={() => subscribeToRoom(room)}
                  >
                    {" "}
                    # {room.name} <span className="new-message" />
                  </a>
                </li>
              ))}
            </ul>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default Navbar;
