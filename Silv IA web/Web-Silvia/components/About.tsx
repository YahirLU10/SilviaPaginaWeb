
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { EyeIcon, TargetIcon } from './icons';
import { Card } from './ui/Card';

export const About = React.forwardRef<HTMLElement>((props, ref) => {
  useScrollAnimation();

  const painPoints = [
    {
      id: 'respuesta',
      title: 'Respuestas lentas',
      question: '¿Te escriben y respondes horas después?',
      detail:
        'Cuando la respuesta llega tarde, el prospecto se enfría o se va con alguien más. La solución suele ser atención 24/7 y respuestas guiadas con IA.',
    },
    {
      id: 'seguimiento',
      title: 'Cero seguimiento',
      question: '¿Se quedan leads “en visto” o sin tarea asignada?',
      detail:
        'Si el seguimiento depende de memoria, se pierden ventas. Lo resolvemos con CRM, recordatorios y un pipeline visible para el equipo.',
    },
    {
      id: 'reportes',
      title: 'Reportes manuales',
      question: '¿Sigues cerrando semana con Excel y capturas repetidas?',
      detail:
        'Los reportes manuales consumen tiempo y generan errores. Automatizamos captura, consolidación y reportes para que tengas números a tiempo.',
    },
  ] as const;

  const [activePainId, setActivePainId] = useState<(typeof painPoints)[number]['id']>(
    painPoints[0].id
  );

  const activePain = painPoints.find((p) => p.id === activePainId) ?? painPoints[0];

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28">
      <div className="text-center mb-16 fade-in-section">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-cyan">La estrategia</h2>
        <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
          Implementamos IA aplicada y automatización para quitarte carga operativa y convertir más: menos trabajo manual, más control y mejor respuesta al cliente.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="fade-in-section" style={{ transitionDelay: '200ms' }}>
          <Card>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-cyan-500/10 mr-4 border border-cyan-500/30">
                <TargetIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Enfoque</h3>
            </div>
            <p className="text-slate-400">
              Partimos de tu proceso real (ventas, atención y operación). Identificamos cuellos de botella y priorizamos automatizaciones con impacto medible.
            </p>
          </Card>
        </div>
        <div className="fade-in-section" style={{ transitionDelay: '400ms' }}>
          <Card>
            <div className="flex items-center mb-4">
               <div className="p-3 rounded-full bg-cyan-500/10 mr-4 border border-cyan-500/30">
                <EyeIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Resultado</h3>
            </div>
            <p className="text-slate-400">
              Dejamos sistemas listos para operar: captura de leads, seguimiento y reportes automáticos para que tu negocio avance aunque no estés conectado.
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-12 fade-in-section" style={{ transitionDelay: '600ms' }}>
        <Card>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white">¿Te suena familiar?</h3>
            <p className="mt-2 text-slate-400">
              Elige el punto que más te pega hoy. Te mostramos por qué pasa y cómo lo resolvemos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-4">
              {painPoints.map((p) => {
                const isActive = p.id === activePainId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePainId(p.id)}
                    className={`text-left p-4 rounded-xl border transition ${
                      isActive
                        ? 'bg-cyan-500/10 border-cyan-500/40'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <p className="text-sm text-slate-400">{p.title}</p>
                    <p className="mt-2 font-semibold text-white">{p.question}</p>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-1 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <p className="text-sm text-slate-400">Detalle</p>
              <p className="mt-2 font-semibold text-white">{activePain.title}</p>
              <p className="mt-3 text-slate-300">{activePain.detail}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
});