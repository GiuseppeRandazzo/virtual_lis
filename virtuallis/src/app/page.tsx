"use client";

import { useState } from "react";
import { Fab } from "@/components/ui/Fab";

export default function Home() {
  //Stato che controlla se il widget è aperto o chiuso
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleWidget = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <main className="lis-min-h-screen lis-p-8 md:lis-p-24">
      {/* Contenuto fittizio per simulare una pagina della Pubblica Amministrazione */}
      <div className="lis-max-w-3xl lis-mx-auto">
        <h1 className="lis-text-4xl lis-font-medium lis-mb-6 lis-text-night">
          Comune di Esempio
        </h1>
        <p className="lis-text-lg lis-mb-4">
          Benvenuto nel portale del cittadino. Attiva Virtuallis per avere la
          traduzione in Lingua dei Segni Italiana (LIS).
        </p>

        {/* Placeholder per evidenziare dove apparirà il pannello */}
        {isWidgetOpen && (
          <div className="lis-mt-8 lis-p-6 lis-bg-white lis-rounded-xl lis-shadow-md lis-border-2 lis-border-primary lis-text-center">
            [Pannello Interprete LIS: Avatar 3D e status]
          </div>
        )}
      </div>

      {/* Il nostro FAB posizionato in modo fisso */}
      <Fab isOpen={isWidgetOpen} onClick={toggleWidget} />
    </main>
  );
}
