import React from 'react'

function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('/images/background-hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-[.67]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h2 className="text-4xl font-extrabold text-white">Association</h2>
        <h1 className="text-7xl font-extrabold text-red-700">Numidi Arts</h1>
        <h2 className="text-2xl font-extrabold">Les Zinzins de la Culture</h2>
        <p className="mt-4 max-w-xl">Une jeunesse en action pour réenchanter la cité!</p>
        <a href='https://forms.gle/FPAPyQxFeCnZxiFbA' className='mt-6 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg
    bg-transparent text-red-600 rounded-lg font-medium border-2 border-red-700
    shadow-none hover:bg-red-700  transition-[box-shadow,color] hover:text-white duration-500 ease-in-out
    focus:outline-none focus:ring-0'>
          Rejoignez-nous
        </a>
      </div>
    </div>
  )
}

export default Hero
