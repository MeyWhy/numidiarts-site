import React from 'react'

function ContactForm() {
  return (
   <form action={""}>
    <div className='flex flex-wrap sm:flex-nowrap gap-6 my-3'>
        <div className='w-full sm:w-1/2'>
        <input type='text' placeholder='Nom' className='w-full text-lg px-4 py-1.5 mt-5 rounded shadow-md outline-none'/>
        </div>
         <div className='w-full sm:w-1/2'>
        <input type='text' placeholder='Prénom' className='w-full text-lg px-4 py-1.5 mt-5 rounded shadow-md outline-none'/>
        </div>

        <div className='w-full'>
        <input type='email' placeholder='E-mail' className='w-full text-lg px-4 py-1.5 mt-5 rounded shadow-md outline-none'/>
        </div>
         </div>
         <div className='my-3'>
        <textarea className='w-full text-lg px-4 py-1.5 mt-5 rounded shadow-md outline-none min-h-32'></textarea>
        </div>
   <div className='flex justify-end mt-6'>
    <button type='submit' className='btn btn-neutral btn-outline text-black hover:text-white transition-all ease-linear font-semibold'> 
    Send Message
    </button>
   </div>
   </form>
  )
}

export default ContactForm
