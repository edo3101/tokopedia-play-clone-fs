import React from "react";
import Navbar from "../components/Navbar";
import {ChatContainer, Comment} from "../components/ChatContainer";
import VideoFrame from "../components/VideoFrame"
import Product from "../components/Product";


function VideoPage() {
    return(
        <>
        <Navbar/>
        <div className='flex flex-col items-center'>
            <div className='flex flex-row gap-3 h-full px-5 py-5'>
                <div className='flex flex-col w-3/4 gap-5 h-full px-5 items-center' id="main">
                    <VideoFrame  />
                    <Comment/>
                </div>
                <ChatContainer/>
            </div>
            <div className='flex flex-row gap-4 overflow-x-auto mt-7 w-[1200px]'>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
            </div>
        </div>
        </>
    )
}

export default VideoPage