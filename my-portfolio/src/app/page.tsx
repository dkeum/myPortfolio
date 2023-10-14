import Image from 'next/image'
import NavBar from './Navbar/Navbar'
import Hero from './components/hero/Hero'

export default function Home() {
  return (
    <div className="">
    
      <section id="Homepage">
        <NavBar/>
        <Hero/>
      </section>
      
      <section id="Services" className="text-yellow-200">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1 </section>
      <section>Portfolio2 </section>
      <section>Portfolio3 </section>
      <section id="Contact">Contact </section>
    </div>
  )
}
