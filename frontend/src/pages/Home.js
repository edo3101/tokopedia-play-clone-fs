import React from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

function Home(){
    return(
        <>
            <Navbar/>
            <div className='flex flex-row gap-5 flex-wrap px-5 py-5'>

                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                
            </div>
        </>
    )
}

export default Home