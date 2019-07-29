import React from 'react'
import MessageForm from './MessageForm'
import RoomForm from './RoomForm'


const Footer = props => {
    return (
        <div className="footer">
                <RoomForm />
                <MessageForm />
        </div>
    )
}


export default Footer