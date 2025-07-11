import Link from 'next/link'
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Commissions from './components/Commissions';
import Media from './components/Media';
export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <p>next event seciton</p>
    <Presentation/>
    <Commissions/>
    <Media/>
   </main>
  );
}
