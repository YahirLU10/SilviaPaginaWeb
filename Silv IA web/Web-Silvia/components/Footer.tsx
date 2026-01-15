
import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} SilvIA. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Sinaloa, México</p>
      </div>
    </footer>
  );
};
