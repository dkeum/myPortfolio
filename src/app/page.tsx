import Image from 'next/image'
import NavBar from './Navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/Parallax/Parallax'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/contact'
import Cursor from './components/Cursor/Cursor'

export default function Home() {
  return (
    <div className="">
      <Cursor/>
      <section id="Homepage">
        <NavBar/>
        <Hero/>
      </section>
      
      <section id="Services">
        <Parallax type="services"/>
      </section>
      
      <section><Services/></section>
      <section id="Portfolio"><Parallax type="Portfolio"/></section>
      <section><Portfolio type="Portfolio1"/></section>
      <section><Portfolio type="Portfolio2"/></section>
      <section><Portfolio type="Portfolio3"/></section>
      <section><Portfolio type="Portfolio4"/></section>
      <section id="Contact"><Contact/> </section>

    </div>
  )
}
