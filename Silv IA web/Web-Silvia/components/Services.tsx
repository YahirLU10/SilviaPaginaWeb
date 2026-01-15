
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';
import { BrainCircuitIcon, CodeIcon, ServerIcon, SmartHomeIcon, ShoppingCartIcon } from './icons';

const servicesData = [
  {
    icon: <BrainCircuitIcon className="w-8 h-8 text-cyan-400" />,
    title: 'Captura Inteligente (Chatbots & IA)',
    items: [
      'Atención inmediata 24/7 para no perder prospectos',
      'Calificación automática de leads y preguntas frecuentes',
      'Agendado de citas y seguimiento sin intervención manual',
    ],
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-cyan-400" />,
    title: 'Cerebro del Negocio (CRM)',
    items: [
      'Centraliza clientes, conversaciones y oportunidades en un solo lugar',
      'Recordatorios y tareas para que el equipo no olvide dar seguimiento',
      'Pipeline claro para saber qué vender y cuándo',
    ],
  },
  {
    icon: <ServerIcon className="w-8 h-8 text-cyan-400" />,
    title: 'Reportes Automáticos (Operación & Ventas)',
    items: [
      'Reportes diarios/semanales sin Excel manual',
      'Dashboards con métricas para tomar decisiones rápido',
      'Alertas y notificaciones cuando algo se sale de control',
    ],
  },
  {
    icon: <SmartHomeIcon className="w-8 h-8 text-cyan-400" />,
    title: 'Integraciones (Tu sistema habla con tus herramientas)',
    items: [
      'Conecta WhatsApp, correo, formularios y tus sistemas internos',
      'Automatiza tareas repetitivas entre plataformas',
      'Evita doble captura y errores humanos',
    ],
  },
   {
    icon: <ShoppingCartIcon className="w-8 h-8 text-cyan-400" />,
    title: 'Infraestructura Lista para Operar (Soporte & Seguridad)',
    items: [
      'Redes, telefonía y soporte para que todo sea estable',
      'Buenas prácticas de seguridad para proteger tu operación',
      'Un solo proveedor responsable de extremo a extremo',
    ],
  },
];

const Checkmark = () => (
    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM10.44 16.5L6.5 12.56L7.91 11.15L10.44 13.68L16.09 8.03L17.5 9.44L10.44 16.5Z" fill="currentColor"/>
    </svg>
);


export const Services = React.forwardRef<HTMLElement>((props, ref) => {
  useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-20 sm:py-28">
      <div className="text-center mb-16 fade-in-section">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-cyan">La solución (servicios productizados)</h2>
        <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
          Paquetes claros que atacan lo que más duele: respuesta lenta, cero seguimiento y reportes manuales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={service.title} className="fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
            <Card className="h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 mr-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <ul className="space-y-3 mt-4 text-slate-400">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <Checkmark />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
});
