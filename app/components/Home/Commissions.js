import React from 'react'
import CommissionCard from './CommissionCard'

const commissions = [
  {
    title: 'Les Zinzins du Théâtre',
    image: '/images/img2.jpg',
    description: `Une commission qui s'occupe de créer les conditions de formation, de production et de diffusion de pièces de théâtre et de spectacles d'animation.`
  },
  {
    title: 'Les Zinzins du Cinéma',
    image: '/images/img1.jpg',
    description: `Ciné-club animé par des membres passionnés de cinéma, qui organisent des projections, débats et rencontres autour du 7e art.`
  },
  {
    title: 'Les Zinzins de la Lecture',
    image: '/images/img6.jpg',
    description: `Réunit enfants, jeunes et adultes passionnés de livres pour échanger et débattre autour de lectures diverses.`
  },
  {
    title: 'Les Zinzins de la Musique',
    image: '/images/background-hero.jpg',
    description: `Commission dédiée à la promotion de la musique à travers des ateliers, concerts et créations musicales collectives.`
  },
  {
    title: 'Les Zinzins de la Nature',
    image: '/images/img5.jpg',
    description: `Œuvre pour l’assainissement, l’écotourisme et la sensibilisation écologique à travers des actions de terrain.`
  },
  {
    title: 'Bénévolat',
    image: '/images/benevolat.jpg',
    description: `Actions solidaires au profit d’enfants, personnes âgées et familles, grâce à des campagnes, dons et visites sociales.`
  }
]

function Commissions() {
  return (
    <div className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Nos Commissions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {commissions.map((item, index) => (
          <CommissionCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Commissions
