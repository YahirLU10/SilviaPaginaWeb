
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const valueProps = [
    'Respuestas en minutos, no en horas',
    'Seguimiento automático a prospectos',
    'Control del pipeline y ventas',
    'Reportes sin Excel manual',
    'Implementación y soporte de extremo a extremo'
];

export const ValueProposition = () => {
    useScrollAnimation();

    return (
        <section id="value-proposition" className="py-20 sm:py-28">
            <div className="fade-in-section text-center p-8 md:p-12 rounded-2xl bg-slate-900/50 border border-cyan-500/20 relative overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.1)_0%,_transparent_40%)] animate-pulse"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-cyan-400">Propuesta de Valor</h2>
                    <p className="mt-4 text-xl text-white max-w-2xl mx-auto font-semibold">
                        En SilvIA construimos sistemas que se notan en la operación: más velocidad, más control y menos trabajo manual.
                    </p>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {valueProps.map((prop, index) => (
                            <div key={index} className="bg-slate-800/50 p-3 rounded-lg text-center text-sm font-medium border border-slate-700">
                                {prop}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};