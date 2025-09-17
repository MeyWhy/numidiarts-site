// TODO fix this page
import React from 'react'

export default function Page() {
  return (
    <main className='flex justify-center bg-gray-50 p-6'>
      <div className='w-1/2 max-w-3xl bg-white shadow-lg rounded-2xl p-8'>
        <header className='mb-6'>
          <h1 className='text-3xl font-semibold'>Association Numidi Arts</h1>
          <p className='mt-1 text-sm text-gray-600'>Coordonnées</p>
        </header>

        <section className='space-y-6'>
      
          <div>
            <h2 className='text-lg font-medium flex items-center gap-2'>
            
             <svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
  <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z'/>
</svg>

              Téléphone
            </h2>
            <p className='mt-1 text-gray-700'>+213 553 318 775 53</p>
          </div>

          <div>
            <h2 className='text-lg font-medium flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8m-18 8h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z'
                />
              </svg>
              E-mail
            </h2>
            <p className='mt-1 text-gray-600'>numidiafounoun@gmail.com</p>
          </div>

          <div>
            <h2 className='text-lg font-medium'>Réseaux sociaux</h2>
            <ul className='mt-2 list-none space-y-2 text-gray-700'>
              <li className='flex items-center gap-2'>
         
              <svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
  <path fill-rule='evenodd' d='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z' clip-rule='evenodd'/>
</svg>

                <a
                  href='https://facebook.com/numidi-arts'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  facebook.com/numidi-arts
                </a>
              </li>

              <li className='flex items-center gap-2'>
               <svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
  <path fill='currentColor' fill-rule='evenodd' d='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z' clip-rule='evenodd'/>
</svg>

                <a
                  href='https://instagram.com/' //ADD INSTA TODO
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  instagram.com/numidi_arts
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
