import Link from 'next/link'
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
   <main>
    <h1>hello </h1>
    <p>nav bar</p>
    
    <p>section hero</p>
    <p>next event seciton</p>
    <p>qui sommes nous?</p>
    <p>nos commissions</p>
    <Link href="/pages">pages</Link>
    <ProductCard/>
    <p>media</p>
    <p>footer</p>
   </main>
  );
}
