import React from 'react'

function ChatMessage({comment, username}) {

    return (
        <>
            <div className="chat chat-start">
                <div className="chat-header ">
                    <h2 className='text-sm'>{username}</h2>
                </div>
                <div className="chat-bubble"> <h2 className='text-sm'>{comment}</h2></div>
            </div>
        </>
    )
}

export default ChatMessage