import React, { useState, useEffect } from "react";

import logoUrl from "../src/SilvIAICO.webp";

const Logo = () => (
  <div className="flex items-center">
    <img src={logoUrl} alt="SilvIA Logo" className="h-12 w-12 mr-3" />
    <span
      style={{ fontFamily: "Inter, sans-serif", fontSize: "28px" }}
      className="font-black text-cyan-400 leading-none"
    >
      Silv<span className="text-white">IA</span>
    </span>
  </div>
);

interface HeaderProps {
  refs: {
    about: React.RefObject<HTMLElement>;
    services: React.RefObject<HTMLElement>;
    solutions: React.RefObject<HTMLElement>;
    values: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
}

export const Header: React.FC<HeaderProps> = ({ refs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLElement> | null
  ) => {
    e.preventDefault();
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Inicio", ref: null },
    { href: "#services", label: "Servicios", ref: refs.services },
    { href: "#solutions", label: "Soluciones", ref: refs.solutions },
    { href: "#nosotros", label: "Confianza", ref: refs.values },
    { href: "#contact", label: "Contacto", ref: refs.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-950/85 backdrop-blur-lg border-b border-blue-900/60"
          : "bg-blue-950/35 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="flex-shrink-0"
            onClick={(e) => handleNavClick(e, null)}
          >
            <Logo />
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.ref)}
                    className="text-slate-200 hover:text-cyan-300 transition-colors duration-300 font-medium cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-cyan-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950/95 backdrop-blur-lg border-t border-blue-900/60">
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.ref)}
                  className="block py-3 text-slate-200 hover:text-cyan-300 transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
