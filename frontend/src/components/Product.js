import React from 'react'

function Product() {

    return (
        <>
            <div className='flex-shrink-0 w-52 bg-slate-200 rounded-md overflow-hidden h-64'>
                <img src='{thumbnail_url}' alt="" />
                <h2 className='text-gray-950'>title</h2>
                <h2 className='text-gray-950'>Rp </h2>
            </div>
        </>
    )
}

export default Product