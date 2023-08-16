import React from 'react'

function VideoFrame({url_video}) {

    return (
        <>
            <div className='flex flex-col  h-[400px] w-[900px] items-center bg-slate-900'>
                <h2 className='self-start text-white text-xl mb-2'>title</h2>
                <iframe
                    width="100%"
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