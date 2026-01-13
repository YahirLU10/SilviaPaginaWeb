
import React from 'react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section id="home" className="pt-14 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white">
          <span className="text-cyan-400">Tu negocio debería funcionar</span> en piloto automático, sin depender de trabajo manual constante.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
          Implementamos sistemas de IA, chatbots y CRMs que capturan clientes y automatizan reportes sin que tengas que mover un dedo.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Button asLink href="#contact" variant="primary" className="w-full sm:w-auto">
            Quiero una Auditoría de Automatización Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};