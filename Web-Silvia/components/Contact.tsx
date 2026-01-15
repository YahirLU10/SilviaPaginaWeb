import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

import { BsWhatsapp } from "react-icons/bs";

type ContactProps = Record<string, never>;

export const Contact = React.forwardRef<HTMLElement, ContactProps>(
  (_props, ref) => {
    useScrollAnimation();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;

      try {
        setIsSubmitting(true);
        setStatus("Enviando...");

        const res = await fetch("/api/auditoria.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        setStatus("¡Listo! Recibimos tu solicitud. Te contactaremos pronto.");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        console.error(err);
        setStatus(
          "No se pudo enviar en este momento. Intenta de nuevo o contáctanos por WhatsApp."
        );
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section id="contact" ref={ref} className="py-20 sm:py-28">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-cyan">
            Acción: auditoría gratis
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            Cuéntanos qué estás haciendo manual hoy y te regresamos un plan
            claro de automatización (rápido, medible y sin humo).
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in-section">
          <Card>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Envíanos un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-400 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-400 mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-400 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Enviando..."
                      : "Solicitar auditoría gratis"}
                  </Button>
                </form>
                {status && (
                  <p className="mt-4 text-center text-green-400">{status}</p>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Otras formas de contacto
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/526675029030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/80 transition border border-slate-700"
                  >
                    <BsWhatsapp size={24} className="text-blue-400 mr-3" />
                    <p className="font-semibold text-white">WhatsApp</p>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }
);

Contact.displayName = "Contact";
