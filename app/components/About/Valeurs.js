import React from 'react'
import ValeursCard from './ValeursCard'
import { withBase } from '@/utils/basePath'

function Valeurs() {
  return (
    <div className=''>
      <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12'>
    <div>
        <ValeursCard 
        image={withBase('/images/i1.png')} 
        title='Notre Amour pour la culture'
        />
    </div>
        <div>
        <ValeursCard 
        image={withBase('/images/i2.png')}
        title='Notre Passion'
        />
    </div>
        <div>
        <ValeursCard 
        image={withBase('/images/i3.png')}
        title='Patrie'
        />
    </div>
        <div>
        <ValeursCard 
        image={withBase('/images/i4.png')}
        title='Notre Zinzinttitude'
        />
    </div>

      </div>
    </div>
  )
}

export default Valeurs
