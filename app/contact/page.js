import React from 'react'

function Page() {
  return (
    <div className='bg-red-50 min-h-screen flex items-center justify-center px-4'>
      <form className='bg-white shadow-md rounded-2xl w-full max-w-2xl p-8 space-y-6'>
        
        <h1 className='text-4xl font-bold text-center text-gray-800 uppercase tracking-wide'>Contactez-nous</h1>
        
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'>
          <div className='w-full'>
            <label htmlFor='nom' className='block text-sm font-medium text-gray-700'>Nom</label>
            <input type='text' id='nom' placeholder='Votre nom' 
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150'/>
          </div>

          <div className='w-full'>
            <label htmlFor='prenom' className='block text-sm font-medium text-gray-700'>Prénom</label>
            <input type='text' id='prenom' placeholder='Votre prénom' 
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150'/>
          </div>
        </div>

        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>E-mail</label>
          <input type='email' id='email' placeholder='Votre e-mail' 
            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150'/>
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
          <textarea id='message' rows='5' placeholder='Votre message' 
            className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150 resize-none'></textarea>
        </div>

        <div className='flex justify-end'>
          <button type='submit' 
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-150'>
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
