// TODO fix this page
import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Association Numidi Arts</h1>
          <p className="mt-1 text-sm text-gray-600">Coordonnées</p>
        </header>

        <section className="space-y-6">
          <div>
            <h2 className="text-lg font-medium">Adresse</h2>
            <p className="mt-1 text-gray-700">Replacez ici l'adresse complète de l'association<br/>(ex: 12 Rue Exemple, 25000 Constantine, Algérie)</p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Téléphone</h2>
            <p className="mt-1 text-gray-700">+213 XX XX XX XX (ou remplacez par le numéro officiel)</p>
          </div>

          <div>
            <h2 className="text-lg font-medium">E‑mail</h2>
            <p className="mt-1 text-gray-700">contact@numidi-arts.example.com</p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Site web</h2>
            <p className="mt-1 text-gray-700">https://numidi-arts.example.com</p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Réseaux sociaux</h2>
            <ul className="mt-1 list-inside list-none space-y-1 text-gray-700">
              <li>Facebook: facebook.com/numidi-arts</li>
              <li>Instagram: instagram.com/numidi_arts</li>
              <li>Twitter/X: twitter.com/numidi_arts</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
