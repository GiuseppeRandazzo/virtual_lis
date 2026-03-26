"use client";

import React from "react";

interface WidgetPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WidgetPanel: React.FC<WidgetPanelProps> = ({
  isOpen,
  onClose,
}) => {
  // Se non è aperto, non renderizziamo nulla per il momento
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="virtuallis-title"
      aria-modal="true"
      className="lis:fixed lis:bottom-28 lis:right-6 lis:z-40 lis:flex lis:h-[500px] lis:w-[320px] lis:flex-col lis:overflow-hidden lis:rounded-[10px] lis:bg-night lis:shadow-2xl lis:ring-1 lis:ring-white/10">
      {/* HEADER (Colore fisso #0C447C richiesto da specifiche) */}
      <div className="lis:flex lis:items-center lis:justify-between lis:bg-[#0C447C] lis:px-4 lis:py-3">
        <h2
          id="virtuallis-title"
          className="lis:m-0 lis:text-base lis:font-medium lis:text-white lis:uppercase lis:tracking-[1px]">
          Interprete LIS
        </h2>
        <button
          onClick={onClose}
          aria-label="Chiudi pannello"
          className="lis:flex lis:h-8 lis:w-8 lis:items-center lis:justify-center lis:rounded-full lis:text-soft hover:lis:bg-white/10 hover:lis:text-white focus:lis:outline-none focus:lis:ring-2 focus:lis:ring-accent">
          ✕
        </button>
      </div>

      {/* BODY DEL WIDGET (Sfondo Night) */}
      <div className="lis:relative lis:flex lis:flex-1 lis:items-center lis:justify-center">
        {/* Qui dentro andrà inserito in futuro il Canvas di Three.js con l'Avatar */}
        <p className="lis:text-sm lis:text-soft lis:text-center lis:px-6">
          Avatar 3D in caricamento...
        </p>
      </div>

      {/* STATUS BAR ANIMATA (In basso, colore Accent) */}
      <div className="lis:h-1 lis:w-full lis:bg-[#0C447C]">
        <div className="lis:h-full lis:w-1/3 lis:bg-accent lis:animate-pulse"></div>
      </div>
    </div>
  );
};
