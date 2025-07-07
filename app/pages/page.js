import React from 'react'
import ContactForm from '../components/ContactForm'
//TODO change path to contact page
function ContactPage() {
  return (
    <div>
<section className="min-h-screen flex flex-col justify-center sm:justify-start  ">
        <div className='container mx-auto px-4 sm:px-20 py-10 rounded max-w-4xl bg-red-100 opacity-75'>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 uppercase leading-tight">
  Contactez nous
  <span className="block sm:inline-block bg-green w-20 sm:w-40 h-1 mt-2 sm:mt-0 sm:ml-2"></span>
</h2>

        <ContactForm/>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
