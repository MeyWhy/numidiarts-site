'use client';
import React from 'react'

function ReadMore() {
  return (
    <div className='p-7 my-5 bg-sky-500 text-white text-xl hover:bg-sky-800'>
            <button className='btn btn-active btn-info' onClick={()=> console.log('click detected')}>add to cart</button>

    </div>
  )
  
}

export default ReadMore
