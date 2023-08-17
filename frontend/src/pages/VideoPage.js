import React from "react";
import Navbar from "../components/Navbar";
import ChatContainer from "../components/ChatContainer";
import Comment from "../components/Comment";
import VideoFrame from "../components/VideoFrame"
import Product from "../components/Product";
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseURL } from "../config";

function VideoPage() {
    const params = useParams()
    const video_id = params.id

    const getVideoURL = baseURL + "video/" + params.id;
    const getProductsURL = baseURL + "video/" + params.id + "/products";
    const commentURL = baseURL + "videos/" + params.id+ "/comments";

    const [video, setVideo] = useState({});
    const [products, setProducts] = useState([]);
    const [comments, setComments] = useState([]);

    const getCommentData = async () => {
        try {

            const response = await axios.get(commentURL);
            console.log(response)
            setComments(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
            throw new Error('Unable to fetch data');
        }
    }

    useEffect(() => {
        if (video_id) {
            console.log(getCommentData())
            getCommentData();
        }

    }, []);


    useEffect(() => {
        axios.get(getVideoURL).then((response) => {
            setVideo(response.data);
        });


    }, []);

    useEffect(() => {
        axios.get(getProductsURL).then((response) => {
            setProducts(response.data);
        });


    }, []);

    function renderProductsResults() {

        return (
            <>
                {
                    products.map((product) => (
                        <Product key={product._id} price={product.price} title={product.title} product_url={product.product_url} thumbnail_url={product.thumbnail_url} />
                    ))
                }
            </ >
        );
    }
    return(
        <>
        <Navbar/>
        <div className='flex flex-col items-center'>
            <div className='flex flex-row gap-3 h-full px-5 py-5'>
                <div className='flex flex-col w-3/4 gap-5 h-full px-5 items-center' id="main">
                    <VideoFrame url_video={video.url_video} title={video.title}/>
                    <Comment video_id={video._id} getCommentData={getCommentData}/>
                </div>
                <ChatContainer comments={comments}/>
            </div>
            <div className='flex flex-row gap-4 overflow-x-auto mt-7 w-[1200px] pb-10'>
                {products.length > 0 && renderProductsResults()}
            </div>
        </div>
        </>
    )
}

export default VideoPage