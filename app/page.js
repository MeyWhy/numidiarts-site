import Link from 'next/link'
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <p>next event seciton</p>
    <Presentation/>
    <p>nos commissions</p>
    <Link href="/pages">pages</Link>
    <ProductCard/>
    <p>media</p>
    <p>footer</p>
   </main>
  );
}
