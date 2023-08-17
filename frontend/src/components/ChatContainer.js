import React from "react";
import ChatMessage from "./ChatMessage";

function ChatContainer({comments}){
   console.log(comments)
    return (
        <div className='flex flex-col justify-start h-[500px] w-72 rounded-md border-2 border-gray-600 bg-slate-900'>
            <h2 className='text-gray-100 px-3 border-b-2 border-gray-600'>Chat</h2>
            <div className='flex flex-col h-[700px] overflow-y-auto gap-2 p-3'>
                {comments.map((comment) => (
                        <ChatMessage key={comment._id} username={comment.username} comment={comment.comment} />
                    ))}
            </div>
        </div>
    )
}


export default ChatContainer