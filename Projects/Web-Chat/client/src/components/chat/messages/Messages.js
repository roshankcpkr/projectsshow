import React from 'react'
import Message from '../message/Message';
import STB from 'react-scroll-to-bottom';
import './Messages.css';
const Messages = ({ messages, user_id }) => {
    return (
        <STB className="messages">

            {messages.map((message, i) => (
                <Message key={message._id} message={message} current_uid={user_id} />
            ))}

        </STB>
    )
}

export default Messages
