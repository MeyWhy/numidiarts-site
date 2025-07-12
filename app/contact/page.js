import React from 'react'

function Page() {
  return (
   <div className='bg-gray-50 min-h-screen flex items-center justify-center px-4'>
    <form className='bg-red-50 px-6 py-3 my-3 rounded-xl w-full max-w-3xl mx-auto space-y-6'>
      <div className='pt-3'>
        <h1 className='text-3xl uppercase font-semibold text-gray-900'>Contactez-nous</h1>
      </div>
      <div className='flex space-x-4'>
    <div className='w-1/2'>
        <label htmlFor='nom'>Nom</label>
        <input type='text' placeholder='Votre Nom' className=' bg-white border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-gray-600'/>
      </div>
       <div className='w-1/2'> 
        <label htmlFor='prenom'>Prénom</label>
        <input type='text' placeholder='Votre Prénom' className=' bg-white border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-gray-600'/>
      </div>
      </div>
      
       <div className=''>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='Votre E-mail' className='bg-white border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-gray-600'/>
        </div>
        <div className=''>
          <label htmlFor='message'>Message</label>
        <textarea placeholder='Votre Message' className=' bg-white border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-gray-600'></textarea>
        </div>
        <div className='flex justify-end'>
    <button type='submit' className='btn btn-neutral btn-soft text-black hover:bg-blue-100 hover:border-none hover:shadow-sm transition-all ease-linear font-semibold'> 
    Envoyer
    </button>
   </div>
    </form>
   </div>
  )
}

export default Page
