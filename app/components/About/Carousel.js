'use client'

import { useState, useEffect } from 'react'
import Card from './Card'
import { withBase } from '@/utils/basePath'
import { useSearchParams } from 'next/navigation'

const cards = [
  { key:'cinema', image: withBase('/images/Cinema.png'), title: 'Les Zinzins du Cinéma', description: "Les Zinzins du Cinéma sont les ciné-clubs, dont la gestion est assurée par des membres actifs de l'association Numidi-Arts, qui partagent une passion commune pour le Cinéma.\nCela inclut les ciné-clubs suivants: \n• 'Zinzins du Cinéma' à la Cinémathèque chaque Samedi, \n• 'Ciné-Likoum' à la Maison de la culture Malek Haddad chaque Jeudi, \n• 'Ciné-Môme' pour les enfants, \n• 'Ciné Ramdhan', \n• 'Ciné-Barra' ciné-club en plein air." },
  { key:'lecture', image: withBase('/images/lecture.jpg'), title: 'Les Zinzins de la Lecture', description: "Une commission dont la mission consiste à réunir enfants, jeunes et adultes, passionnées de livres et de littérature pour débattre, échanger, partager des expériences de lecture, des opinions sur des auteurs qu'on a aimé ou non, en compagnie de certains auteurs dans une ambiance conviviale et enrichissante. " },
  { key:'theatre', image: withBase('/images/Theatre.png'), title: 'Les Zinzins du Théâtre', description: "Une commission qui s'occupe de créer les conditions de formation de production et de diffusion de pièces de théâtre et de spectacles d'animation.\n La commission a permis de produire notamment les pièces suivantes: \n-Joutha Ala Rassif.\n-La Pastèque.\n-Les Quatres Saisons.\n-Basta." },
  { key:'kermesse', image: withBase('/images/kermesse.jpg'), title: 'Kermesses', description: "L'association vous propose des Kermesses pour les jeunes étudiantes et étudiants. La kermesse est une fête foraine en plein air. Elle est faite de jeux divers amusants, de stands, d'une scène, de karaoké, d'une radio et d'une buvette. Les jeux proposés sont pour enfants ou pour adultes. On peut citer pour l'exemple:\n-Le chamboule-tout.\n-La planche savonneuse.\n-Le parcours de miroirs.\n-La course de sacs.\n-Le lancer de palets.\nEt bien plus encore"},
  { key:'nature', image: withBase('/images/nature.jpg'), title: 'Les Zinzins de la Nature', description: "Cette commission se donne comme mission l'assainissement et l'embellissement des espaces verts publics dans la wilaya de Constantine. \nElle propose aussi des sorties ecotouristiques et des randonnées pédestres."},
  { key:'benevolat', image: withBase('/images/benevolate.jpg'), title: 'Bénévolat', description: "Se sentir utile et faire quelque chose pour les autres est le moteur des bénévoles de l'association Numidi-Arts. Notre but est d'offrir un petit peu de joie dans les coeurs des enfants, des vieux, des familles dans le besoin. Même à partir de rien on peut tout faire, il suffit d'être solidaires, d'avoir beuacoup de volonté et un grand coeur, c'est ce qui a permit la réussite de plusieurs opérations:\n-Visite de la pédiatrie au CHU.\n-Visite de Diar Er'rahma.\n-Fournitures Scolaires.\n-Koufat Ramadan.\n-Mouton de l'aid."},
  { key:'musique', image: withBase('/images/musique.jpg'), title: 'Les Zinzins de la Musique', description: "Cette commission réunit les passionnés de sons et d'instruments. Elle propose des rencontres, concerts, ateliers et concours autour des différents genres musicaux, ainsi que des moments de partage et de création.\nQue vous soyez musicien, amateur ou simple curieux, rejoignez-nous pour échanger, apprendre et vibrer au rythme de la musique."}
]

export default function Carousel() {
  const searchParam = useSearchParams()
  const cardkey = searchParam.get('card')
  const initIndex = cardkey ? cards.findIndex(c => c.key === cardkey) : 0

  const [current, setCurrent] = useState(initIndex === -1 ? 0 : initIndex)
  const [direction, setDirection] = useState(null) 
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (cardkey) {
      const index = cards.findIndex(c => c.key === cardkey)
      if (index !== -1) setCurrent(index)
    }
  }, [cardkey])

  const changeSlide = (newIndex, dir) => {
    if (animating) return 
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(newIndex)
      setAnimating(false)
    }, 300) 
  }

  const nextSlide = () =>
    changeSlide((current + 1) % cards.length, 'right')
  const prevSlide = () =>
    changeSlide((current - 1 + cards.length) % cards.length, 'left')

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      
      <div className="block sm:hidden w-full flex flex-col gap-10">
        {cards.map(card => (
          <Card
            key={card.key}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="hidden sm:flex relative w-full items-center justify-center max-w-4xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 z-10 bg-white text-gray-700 hover:bg-gray-100 p-2 shadow-sm rounded-full transition-transform active:scale-90"
        >
          ❮
        </button>

        <div
          className={`transition-all duration-300 ease-in-out w-full ${
            animating
              ? direction === 'right'
                ? 'translate-x-10 opacity-0'
                : '-translate-x-10 opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          <Card
            key={cards[current].key}
            image={cards[current].image}
            title={cards[current].title}
            description={cards[current].description}
          />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 z-10 bg-white text-gray-700 hover:bg-gray-100 p-2 shadow-sm rounded-full transition-transform active:scale-90"
        >
          ❯
        </button>
      </div>
    </div>
  )
}
