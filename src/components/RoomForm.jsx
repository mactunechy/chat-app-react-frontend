import React, { Component } from 'react';
import MyContext from '../context';

class RoomForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            room : ""
        }
    }
    handleSubmit = createRoom => {
        let { room } = this.state
        if(room.trim().length === 0 )return;
        createRoom(room)
        return this.setState({room : ''})
    }
    render(){
        return (
            <MyContext.Consumer>
                {value =>(
                    <form onSubmit={ () => this.handleSubmit(value.createRoom)}>
                    <input 
                    value={this.state.room}
                    type="text" 
                    placeholder="Create Room" className="room-form"
                    onChange={(e) => this.setState({room : e.target.value})}
                    />
                </form>
                )}
            </MyContext.Consumer>
        )
    }
}

export default RoomForm