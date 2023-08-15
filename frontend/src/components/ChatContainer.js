import React from "react";
import ChatMessage from "./ChatMessage";

function ChatContainer(){
    return (
        <div className='flex flex-col justify-start h-[500px] w-72 rounded-md border-2 border-gray-600 bg-slate-900'>
            <h2 className='text-gray-100 px-3 border-b-2 border-gray-600'>Chat</h2>
            <div className='flex flex-col h-[700px] overflow-y-auto gap-2 p-3'>
                <ChatMessage/>
            </div>
        </div>
    )
}

function Comment(){
    return(
    <form action=""  className='flex justify-center gap-1 py-1 border-2 border-gray-600 rounded-xl w-[880px]' >
        <div className='flex flex-col gap-1'>
            <input type="text" placeholder="Username" name="username"  className="input w-[780px] text-sm h-9 bg-slate-800 hover:bg-slate-50" />
            <input type="text" placeholder="Your comment" name="comment"  className="input w-auto text-sm h-9 bg-slate-800 hover:bg-slate-50" />
        </div>
        <button className='bg-green-600 rounded-md p-2 w-[77px] h-[77px] hover:bg-green-900'>
            <h2 className='text-sm font-bold text-white p-0'>Send</h2>
        </button>
    </form>
    )
}

export {ChatContainer,Comment}