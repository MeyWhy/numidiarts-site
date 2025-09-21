import Link from 'next/link'
import React from 'react'
function Footer() {
  return (
    <div>
<footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <Link href='/about' className="link link-hover">L&apos;association</Link>
    <Link href='/contact' className="link link-hover">Contact</Link>
    <Link href='/medias' className="link link-hover">Médias</Link>
  </nav>

  <aside>
    <p>Copyright Numidi Arts © {new Date().getFullYear()} - All right reserved by Mey Yaou</p>
   <p className="text-sm mt-2">
            Nous ne collectons aucune donnée, aucun cookie, sauf ceux éventuels de l’hébergeur ou de services externes comme Google.
          </p>
  </aside>
</footer>

    </div>
  )
}

export default Footer
