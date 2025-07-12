import React from 'react'
import Image from 'next/image'

function Media() {
  return (
    <div className='bg-gray-900 py-10'>
        <div className="flex items-center justify-center gap-4 px-4 mb-8">
        <div className="flex-grow border-t border-gray-500"></div>
        <h1 className='text-white text-2xl font-medium text-center whitespace-nowrap'>Médias</h1>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>
      <div className="carousel w-full mx-auto overflow-hidden">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center ">
          <Image
            src="/images/img3.jpg"
            alt="img3"
            width={500}
            height={500}
            className="h-[500px] object-contain rounded-xl"
          />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:justify-around">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center ">
          <Image
            src="/images/img4.jpg"
            alt="img4"
            width={500}
            height={500}
            className="h-[500px] object-contain"
          />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:justify-around">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center ">
          <Image
            src="/images/img5.jpg"
            alt="img5"
            width={300}
            height={300}
            className="h-[300px] object-contain" width={500}
            height={500}
            className="h-[500px] object-contain"
          />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:justify-around">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center ">
          <Image
            src="/images/img1.jpg"
            alt="img1"
            width={500}
            height={500}
            className="h-[500px] object-contain"
          />
<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between md:justify-around">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
