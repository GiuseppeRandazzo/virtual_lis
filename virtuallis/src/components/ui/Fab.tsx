/*Fab sta per Floating Action Button, è un componente UI molto comune nelle interfacce moderne, soprattutto su dispositivi mobili.
In questo caso, il nostro Fab sarà un pulsante rotondo che si posiziona in basso a destra dello schermo e permette agli utenti di aprire o chiudere l'interprete 3D LIS.
Il suo design è pensato per essere facilmente riconoscibile e accessibile, con un'icona che rappresenta le mani (simbolo della lingua dei segni) e un'animazione al passaggio del mouse per migliorare l'esperienza utente.*/

"use client"; //Questo è un componente client-side obbligatorio in Next.js App Router per i componenti che hanno interattività (es. onClick)

import React from "react";

// Questo file gestisce il Floating Action Button
// Aggiornato per essere fully-compliant WCAG 2.1 AA

interface FabProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Fab({ isOpen, onClick }: FabProps) {
  return (
    <button
      // aria-expanded comunica allo screen reader se il widget controllato è aperto o chiuso
      aria-expanded={isOpen}
      // aria-label descrive vocalmente la funzione del pulsante
      aria-label={isOpen ? "Chiudi interprete LIS" : "Apri interprete LIS"}
      // aria-haspopup dice che il clic aprirà o controllerà un overlay
      aria-haspopup="dialog"
      onClick={onClick}
      className={`
        lis:fixed lis:bottom-6 lis:right-6 
        lis:w-16 lis:h-16 lis:rounded-full 
        lis:bg-[var(--lis-color-primary)] 
        lis:text-[var(--lis-color-white)] 
        lis:shadow-lg lis:flex lis:items-center lis:justify-center 
        lis:hover:bg-[var(--lis-color-accent)] lis:transition-colors lis:z-50
        /* Il Focus Ring è ESSENZIALE per l'accessibilità da tastiera: */
        focus:lis:outline-none focus:lis:ring-4 focus:lis:ring-[var(--lis-color-night)] focus:lis:ring-offset-2
        ${isOpen ? "lis:rotate-90" : "lis:rotate-0"}
      `}>
      {/* Se il widget è aperto mostriamo un'icona X, altrimenti l'icona icona del linguaggio dei segni (o simili) */}
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v5" />
          <path d="M11 11V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7" />
          <path d="M4 11v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5" />
          <path d="M12 11v9a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-9" />
        </svg>
      )}
    </button>
  );
}
