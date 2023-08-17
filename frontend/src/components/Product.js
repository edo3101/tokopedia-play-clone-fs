import React from 'react'

function Product({ title, thumbnail_url, price, product_url }) {

    return (
        <>
            <a href={product_url} target="_blank" className='flex-shrink-0 w-52 bg-slate-200 rounded-md overflow-hidden h-72'>
                <img src={thumbnail_url} alt="" />
                <h2 className='text-gray-950'>{title}</h2>
                <h2 className='text-gray-950'>Rp {price}</h2>
            </a>
        </>
    )
}

export default Product