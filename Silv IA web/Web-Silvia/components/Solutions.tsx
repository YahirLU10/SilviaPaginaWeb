import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Card } from "./ui/Card";

import empresasImage from "../src/para-empresas.webp";
import localesImage from "../src/para-locales.webp";
import callCenterImage from "../src/para-call-center.webp";

const solutionsData = [
  {
    title: "Para Empresas",
    description:
      "Si tu operación ya creció, necesitas control: seguimiento comercial, reportes automáticos y automatizaciones que reduzcan retrabajo y errores.",
    image: empresasImage,
  },
  {
    title: "Para Negocios Locales",
    description:
      "Si atiendes por WhatsApp o redes, no pierdas más prospectos: respuestas rápidas, agenda automática y seguimiento sin estar pegado al teléfono.",
    image: localesImage,
  },
  {
    title: "Para Call Centers",
    description:
      "Si tu meta es vender más con el mismo equipo: CRM claro, tareas de seguimiento, métricas y automatizaciones para elevar conversión y productividad.",
    image: callCenterImage,
  },
];

export const Solutions = React.forwardRef<HTMLElement>((props, ref) => {
  useScrollAnimation();

  return (
    <section id="solutions" ref={ref} className="py-20 sm:py-28">
      <div className="text-center mb-16 fade-in-section">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-cyan">
          Para quién es
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
          Elige el escenario que más se parece a tu negocio. La meta es la
          misma: menos trabajo manual y más ventas con control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutionsData.map((solution, index) => (
          <div
            key={solution.title}
            className="fade-in-section"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Card className="group h-full flex flex-col overflow-hidden p-0">
              <div className="relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover rounded-t-xl ring-1 ring-white/10 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-slate-400 flex-grow">
                  {solution.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
});
