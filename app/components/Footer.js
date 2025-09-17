import Link from 'next/link'
import React from 'react'
//TODO add links to social media
function Footer() {
  return (
    <div>
<footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <Link href='/about' className="link link-hover">L&apos;association</Link>
    <Link href='/contact' className="link link-hover">Contact</Link>
    <Link href='/' className="link link-hover">Politique de Confidentialité</Link>
    <Link href='/medias' className="link link-hover">Médias</Link>
  </nav>

  <aside>
    <p>Copyright Numidi Arts © {new Date().getFullYear()} - All right reserved by Mey Yaou</p>
  </aside>
</footer>

    </div>
  )
}

export default Footer
