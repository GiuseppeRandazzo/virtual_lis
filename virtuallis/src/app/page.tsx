"use client";

import { useState } from "react";
import { Fab } from "@/components/ui/Fab";
import { WidgetPanel } from "@/components/ui/WidgetPanel";

export default function Home() {
  //Stato che controlla se il widget è aperto o chiuso
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleWidget = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <main className="lis:min-h-screen lis:p-8 md:lis:p-24">
      {/* Contenuto fittizio per simulare una pagina della Pubblica Amministrazione */}
      <div className="lis:max-w-3xl lis:mx-auto">
        <h1 className="lis:text-4xl lis:font-medium lis:mb-6 lis:text-night">
          Comune di Esempio
        </h1>
        <p className="lis:text-lg lis:mb-4">
          Benvenuto nel portale del cittadino. Attiva Virtuallis per avere la
          traduzione in Lingua dei Segni Italiana (LIS).
        </p>
      </div>

      {/* Il nostro FAB posizionato in modo fisso */}
      <Fab isOpen={isWidgetOpen} onClick={toggleWidget} />

      {/* Il vero Pannello Interprete LIS */}
      <WidgetPanel isOpen={isWidgetOpen} onClose={toggleWidget} />
    </main>
  );
}
