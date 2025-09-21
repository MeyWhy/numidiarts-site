'use client'

import { useState } from 'react'
import Card from './Card'

const cards = [
  { image: '/images/Cinema.png', title: 'Les Zinzins du Cinéma', description: "Les Zinzins du Cinéma sont les ciné-clubs, dont la gestion est assurée par des membres actifs de l'association Numidi-Arts, qui partagent une passion commune pour le Cinéma.\nCela inclut les ciné-clubs suivants: \n-'Zinzins du Cinéma' à la Cinémathèque chaque Samedi, \n-'Ciné-Likoum' à la Maison de la culture Malek Haddad chaque Jeudi, \n-'Ciné-Môme' pour les enfants, \n-'Ciné Ramdhan', \n-'Ciné-Barra' ciné-club en plein air." },
  { image: '/images/lecture.jpg', title: 'Les Zinzins de la Lecture', description: "Une commission dont la mission consiste à réunir enfants, jeunes et adultes, passionnées de livres et de littérature pour débattre, échanger, partager des expériences de lecture, des opinions sur des auteurs qu'on a aimé ou non, en compagnie de certains auteurs dans une ambiance conviviale et enrichissante. " },
  { image: '/images/Theatre.png', title: 'Les Zinzins du Théâtre', description: "Une commission qui s'occupe de créer les conditions de formation de production et de diffusion de pièces de théâtre et de spectacles d'animation.\n La commission a permis de produire notamment les pièces suivantes: \n-Joutha Ala Rassif.\n-La Pastèque.\n-Les Quatres Saisons.\n-Basta." },
  { image: '/images/kermesse.jpg', title: 'Kermesses', description: "L'association vous propose des Kermesses pour les jeunes étudiantes et étudiants. La kermesse est une fête foraine en plein air. Elle est faite de jeux divers amusants, de stands, d'une scène, de karaoké, d'une radio et d'une buvette. Les jeux proposés sont pour enfants ou pour adultes. On peut citer pour l'exemple:\n-Le chamboule-tout.\n-La planche savonneuse.\n-Le parcours de miroirs.\n-La course de sacs.\n-Le lancer de palets.\nEt bien plus encore"},
  { image: '/images/nature.jpg', title: 'Les Zinzins de la Nature', description: "Cette commission se donne comme mission l'assainissement et l'embellissement des espaces verts publics dans la wilaya de Constantine. \nElle propose aussi des sorties ecotouristiques et des randonnées pédestres."},
  { image: '/images/bénévolat.jpg', title: 'Bénévolat', description: "Se sentir utile et faire quelque chose pour les autres est le moteur des bénévoles de l'association Numidi-Arts. Notre but est d'offrir un petit peu de joie dans les coeurs des enfants, des vieux, des familles dans le besoin. Même à partir de rien on peut tout faire, il suffit d'être solidaires, d'avoir beuacoup de volonté et un grand coeur, c'est ce qui a permit la réussite de plusieurs opérations:\n-Visite de la pédiatrie au CHU.\n-Visite de Diar Er'rahma.\n-Fournitures Scolaires.\n-Koufat Ramadan.\n-Mouton de l'aid."}
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % cards.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length)

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      <div className="relative w-full flex items-center justify-center max-w-4xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 z-10 bg-white text-gray-700 hover:bg-gray-100 p-2 shadow-sm rounded-full"
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
          className='absolute right-2 sm:right-6 z-10 bg-white text-gray-700 hover:bg-gray-100 p-2 shadow-sm rounded-full'
        >
          ❯
        </button>
      </div>
    </div>
  )
}
