import React from 'react'

function VideoFrame({url_video, title}) {

    return (
        <>
            <div className=' flex flex-col h-[450px] items-center'>
                <h2 className='self-start text-white text-xl mb-2'>{title}</h2>
                <iframe
                    width="800"
                    height="450"
                    className='rounded-xl'
                    src= {url_video}
                    title="Youtube Player"
                    allowFullScreen
                />
            </div>
        </>
    )
}

export default VideoFrame