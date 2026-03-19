/*Fab sta per Floating Action Button, è un componente UI molto comune nelle interfacce moderne, soprattutto su dispositivi mobili.
In questo caso, il nostro Fab sarà un pulsante rotondo che si posiziona in basso a destra dello schermo e permette agli utenti di aprire o chiudere l'interprete 3D LIS.
Il suo design è pensato per essere facilmente riconoscibile e accessibile, con un'icona che rappresenta le mani (simbolo della lingua dei segni) e un'animazione al passaggio del mouse per migliorare l'esperienza utente.*/

"use client"; //Questo è un componente client-side obbligatorio in Next.js App Router per i componenti che hanno interattività (es. onClick)

import React from "react";

interface FabProps {
  onClick: () => void;
  isOpen: boolean;
}

export const Fab: React.FC<FabProps> = ({ onClick, isOpen }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        isOpen ? "Chiudi interprete 3D Lis" : "Apri interprete 3D Lis"
      }
      aria-expanded={isOpen}
      className={`lis-fixed lis-bottom-6 lis-right-6 lis-z-50
        lis-flex lis-h-16 lis-w-16 lis-items-center lis-justify-center
        lis-rounded-full lis-bg-primary lis-text-white lis-shadow-lg
        lis-transition-transform lis-duration-300 lis-ease-in-out
        hover:lis-scale-105 hover:lis-bg-accent
        focus:lis-outline-none focus:lis-ring-4 focus:lis-ring-accent focus:lis-ring-offset-2 focus:lis-ring-offset-neutral`}>
      {/* Per adesso mettiamo un'icona testuale/placehholder (delle "mani").
            verrà successivamente sostituita con la SVG dell'icona reale di virtuallis inline */}
      <span className="lis-text-2x1" aria-hidden="true">
        {isOpen ? "✕" : "✌️"}
      </span>
    </button>
  );
};
