import React from 'react'

function VideoCard({_id, url_thumbnail, title}) {

    return (
        <>
            <a href={'/video/'+_id}>
                <div className=" card rounded-lg overflow-hidden w-60">
                    <div className="flex justify-end flex-col object-cover h-[430px] bg-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]" 
                        style={{ backgroundImage: `url(${url_thumbnail})`, backgroundSize: 'cover' }}>
                        <div className='flex h-1/2 justify-end flex-col bg-gradient-to-t from-black to-transparent p-3'>
                            <h2 className="text-white text-lg ">
                                {title}</h2>
                        </div>

                    </div>
                </div>
            </a>
        </>
    )
}

export default VideoCard