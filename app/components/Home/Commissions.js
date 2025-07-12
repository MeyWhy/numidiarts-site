import React from 'react'
import Image from 'next/image'
function Commissions() {
  return (
    <div className='md:mx-3 my-15 '>
      <h1 className='text-2xl mb-6 pl-25 font-medium'>Nos Commissions</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>
        <div className="card card-md bg-base-100 w-90">
  <figure>
    <Image
      src="/images/img1.jpg"
      alt="zinzins du théâtre"
      width={330}
      height={330}
      className='rounded-xl' />
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title">Les Zinzins du Théâtre</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <button className="btn btn-sm text-white bg-red-400 rounded-4xl hover:bg-red-600 ">Read More &gt;</button>
    </div>
  </div>
</div>
{/*Cinema */}
 <div className="card card-md bg-base-100 w-90 ">
  <figure>
    <Image
      src="/images/img1.jpg"
      alt="zinzins du cinéma"
       width={330}
      height={330}
      className='rounded-xl' />
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title">Les Zinzins du Cinéma</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <button className="btn btn-sm text-white bg-red-400 rounded-4xl hover:bg-red-600 ">Read More &gt;</button>
    </div>
  </div>
</div>
{/*Musique */}
 <div className="card card-md bg-base-100 w-90 ">
  <figure>
    <Image
      src="/images/img1.jpg"
      alt="zinzins de la musique"
       width={330}
      height={330}
      className='rounded-xl'/>
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title">Les Zinzins de la Musique</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <button className="btn btn-sm text-white bg-red-400 rounded-4xl hover:bg-red-600 ">Read More &gt;</button>
    </div>
  </div>
</div>
{/*Lecture */}
 <div className="card card-md bg-base-100 w-90 ">
  <figure>
    <Image
      src="/images/img1.jpg"
      alt="zinzins de la lecture"
      width={330}
      height={330}
      className='rounded-xl'/>
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title">Les Zinzins de la lecture</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <button className="btn btn-sm text-white bg-red-400 rounded-4xl hover:bg-red-600 ">Read More &gt;</button>
    </div>
  </div>
</div>
{/*Nature */}
 <div className="card card-md bg-base-100 w-90 ">
  <figure>
    <Image
      src="/images/img1.jpg"
      alt="zinzins de la nature"
       width={330}
      height={330}
      className='rounded-xl'/>
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title">Les Zinzins de la Nature</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <button className="btn btn-sm text-white bg-red-400 rounded-4xl hover:bg-red-600 ">Read More &gt;</button>
    </div>
  </div>
</div>
{/*Bénévolat */}
 <div className="card card-md bg-base-100 w-90 ">
  <figure>
    <Image
      src="/images/img1.jpg"
      alt="zinzins du bénévolat"
       width={330}
      height={330}
      className='rounded-xl' />
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title">Bénévolat</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <button className="btn btn-sm text-white bg-red-400 rounded-4xl hover:bg-red-600 ">Read More &gt;</button>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Commissions
