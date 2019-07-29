import React, { Component } from "react";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  handleSumbit = () => {
    this.props.setUser(this.state.username);
  };
  render() {
    return (
      <div className="user-form-container text-white">
        <form onSubmit={this.handleSumbit}>
          <div className="form-group">
            <h2 className="form-group-label">You're ?</h2>
            <input
              value={this.state.message}
              type="text"
              onChange={e => this.setState({ username: e.target.value })}
              className="user-form"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
