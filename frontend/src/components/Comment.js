import React from "react";
import axios from 'axios';
import { useRef, useState } from 'react'
import { baseURL } from "../config";

function Comment({video_id, getCommentData}){
    const commentSubmitURL = baseURL + "comments";

    const [usernameInput, setUsernameInput] = useState("");
    const [commentInput, setCommentInput] = useState("");

    const formRef = useRef()
    

    const handleCommentChange = (e) => {
        const value = e.target.value;
        setCommentInput(value);
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsernameInput(value);
    };

    
    const sendComment = (e) => {
        e.preventDefault()
        if (!video_id) {
            return
        }
        const commentData = {
            username: usernameInput,
            comment: commentInput,
            video_id: video_id
        };

        formRef.current.reset()

        axios.post(commentSubmitURL, commentData)
            .then(response => {
                getCommentData();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
    <form action="" ref={formRef} onSubmit={sendComment} className='flex justify-center gap-1 py-1 border-2 border-gray-600 rounded-xl w-[880px]' >
        <div className='flex flex-col gap-1'>
            <input type="text" placeholder="Username" name="username" onChange={handleUsernameChange} className="input w-[780px] text-sm h-9 bg-slate-800 hover:bg-slate-50" />
            <input type="text" placeholder="Your comment" name="comment" onChange={handleCommentChange} className="input w-auto text-sm h-9 bg-slate-800 hover:bg-slate-50" />
        </div>
        <button className='bg-green-600 rounded-md p-2 w-[77px] h-[77px] hover:bg-green-900'>
            <h2 className='text-sm font-bold text-white p-0'>Send</h2>
        </button>
    </form>
    )
}

export default Comment
