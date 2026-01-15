
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { GemIcon } from './icons';

const valuesData = [
  'Diagnóstico antes de proponer',
  'Implementación por etapas',
  'Automatización medible',
  'Seguridad y buenas prácticas',
  'Soporte y acompañamiento',
  'Transparencia en tiempos y entregables',
  'Pensado para crecer (escalable)'
];

export const Values = React.forwardRef<HTMLElement>((props, ref) => {
  useScrollAnimation();
  return (
    <section id="nosotros" ref={ref} className="py-20 sm:py-28">
      <div className="text-center mb-16 fade-in-section">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-cyan">Confianza</h2>
        <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
          Te decimos qué automatizar primero, cuánto impacto tiene y cómo lo implementamos sin interrumpir tu operación.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {valuesData.map((value, index) => (
          <div key={value} className="fade-in-section" style={{ transitionDelay: `${index * 100}ms` }}>
            <Card className="text-center h-full flex flex-col items-center justify-center">
              <GemIcon className="w-8 h-8 text-cyan-400 mb-3"/>
              <h3 className="font-semibold text-white">{value}</h3>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
});