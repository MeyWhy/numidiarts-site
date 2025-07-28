'use client'

import { useState } from 'react'
import Card from './Card'

const cards = [
  {
    image: '/images/Cinema.png',
    title: 'Les Zinzins du Cinéma',
    description: 'Une expérience immersive sous les étoiles.'
  },
   {
    image: '/images/lecture.jpg',
    title: 'Les Zinzins de la Lecture',
    description: 'Une expérience immersive sous les étoiles.'
  },
     {
    image: '/images/Theatre.png',
    title: 'Les Zinzins du Théâtre',
    description: 'Une expérience immersive sous les étoiles.'
  },
  {
    image: '/images/kermesse.jpg',
    title: 'Kermesses',
    description: 'Une journée pleine de jeux et de rires.'
  },
  {
    image: '/images/nature.jpg',
    title: 'Les Zinzins de la Nature',
    description: 'Redécouvrir le plaisir de lire ensemble.'
  },
  {
    image: '/images/bénévolat.jpg',
    title: 'Bénévolat',
    description: 'Exploration et sensibilisation à l’environnement.'
  }
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 ">

      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-10 z-10 bg-white text-gray-700 hover:bg-gray-100 p-2 shadow-sm"
        >
          ❮
        </button>

        <Card
          image={cards[current].image}
          title={cards[current].title}
          description={cards[current].description}
        />

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-10 z-10 bg-white text-gray-700 hover:bg-gray-100 p-2 shadow-sm"
        >
          ❯
        </button>
      </div>
    </div>
  )
}
