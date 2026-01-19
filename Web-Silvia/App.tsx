import React, { useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ValueProposition } from "./components/ValueProposition";
import { Solutions } from "./components/Solutions";
import { Values } from "./components/Values";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { BsWhatsapp } from "react-icons/bs";

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const refs = {
    about: aboutRef,
    services: servicesRef,
    solutions: solutionsRef,
    values: valuesRef,
    contact: contactRef,
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 animated-grid"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>

      <div className="relative z-20">
        <Header refs={refs} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Hero />
          <About ref={aboutRef} />
          <Services ref={servicesRef} />
          <ValueProposition />
          <Solutions ref={solutionsRef} />
          <Values ref={valuesRef} />
          <Contact ref={contactRef} />
        </main>
        <Footer />

        <a
          href="https://wa.me/526675029030"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed right-5 bottom-20 z-50 rounded-full p-4 bg-[#25D366] text-slate-900 shadow-[0_0_8px_rgba(37,211,102,0.9),0_0_25px_rgba(37,211,102,0.6),0_0_50px_rgba(37,211,102,0.35)] hover:scale-110 transition-transform"
        >
          <BsWhatsapp size={26} />
        </a>
      </div>
    </div>
  );
}

export default App;
