import React from 'react'

function VideoCard() {

    return (
        <>
            <a href={'/video/'}>
                <div className=" card rounded-lg overflow-hidden w-60">
                    <div className="flex justify-end flex-col object-cover h-[430px] bg-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] ">
                        <div className='flex h-1/2 justify-end flex-col bg-gradient-to-t from-black to-transparent p-3'>
                            <h2 className="text-white text-lg ">
                                judul</h2>
                        </div>

                    </div>
                </div>
            </a>
        </>
    )
}

export default VideoCard