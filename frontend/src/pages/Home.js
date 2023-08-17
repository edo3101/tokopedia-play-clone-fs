import React from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import { baseURL } from "../config";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home(){
    const videoURL = baseURL+"videos";

    const [videos, setVideos] = useState([]);

    function renderVideosResults() {
        return (
            <>
                {
                    videos.map((video) => (
                        <VideoCard key={video._id} _id={video._id} url_thumbnail={video.url_thumbnail} title={video.title} />
                    ))
                }
            </ >
        );
    }

    useEffect(() => {
        axios.get(videoURL).then((response) => {
            setVideos(response.data);
        });


    }, []);

    return(
        <>
            <Navbar/>
            <div className='flex flex-row gap-5 flex-wrap px-5 py-5'>
                {videos.length > 0 && renderVideosResults()}
            </div>
        </>
    )
}

export default Home