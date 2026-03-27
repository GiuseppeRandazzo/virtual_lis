"use client";

import React from "react";
import AvatarCanvas from "../3d/AvatarCanvas";

interface WidgetPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WidgetPanel({ isOpen, onClose }: WidgetPanelProps) {
  // Nota bene: Adesso NON usiamo più "if (!isOpen) return null;"
  // Vogliamo lasciare sempre il pannello nel codice per animarne lo scambio,
  // semplicemente esce fuori dallo schermo e diventa invisibile (pointer-events-none).

  return (
    <div
      className={`
        lis:fixed lis:bottom-24 lis:right-6 
        lis:w-[320px] lis:h-[480px] 
        lis:bg-[var(--lis-color-night)] lis:rounded-[10px] 
        lis:shadow-2xl lis:flex lis:flex-col lis:z-40 lis:overflow-hidden 
        lis:border lis:border-[var(--lis-color-primary)]
        lis:transition-all lis:duration-500 lis:ease-[cubic-bezier(0.16,1,0.3,1)]
        lis:origin-bottom-right
        ${
          isOpen
            ? "lis:translate-y-0 lis:opacity-100 lis:scale-100"
            : "lis:translate-y-12 lis:opacity-0 lis:scale-95 lis:pointer-events-none"
        }
      `}
      // Accessibilità basic: nascondiamo l'elemento intero agli screen reader se è chiuso
      aria-hidden={!isOpen}>
      {/* HEADER */}
      <div className="lis:flex lis:justify-between lis:items-center lis:p-4 lis:bg-[#0C447C]">
        <div className="lis:flex lis:items-center lis:gap-2">
          {/* Status dot animato */}
          <div className="lis:w-2 lis:h-2 lis:rounded-full lis:bg-[var(--lis-color-accent)] lis:animate-pulse"></div>
          <span className="lis:text-[var(--lis-color-white)] lis:font-medium lis:text-sm lis:uppercase lis:tracking-widest">
            Interprete LIS
          </span>
        </div>

        {/* Pulsante chiudi */}
        <button
          onClick={onClose}
          className="lis:text-[var(--lis-color-soft)] hover:lis:text-[var(--lis-color-white)] lis:transition-colors focus:lis:outline-none focus:lis:ring-2 focus:lis:ring-[var(--lis-color-accent)] lis:rounded"
          aria-label="Chiudi interprete LIS">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* BODY con AVATAR 3D Canvas */}
      <div className="lis:flex-1 lis:relative">
        {/* Manteniamo il canvas montato quando e in background così non ricarica il modello ogni volta */}
        <AvatarCanvas />
      </div>

      {/* STATUS BAR INFERIORE */}
      <div className="lis:h-8 lis:bg-[#0C447C] lis:flex lis:items-center lis:px-4 border-t border-[var(--lis-color-primary)]">
        <span className="lis:text-[var(--lis-color-soft)] lis:text-xs">
          In attesa di comandi...
        </span>
      </div>
    </div>
  );
}
