# Virtuallis

**Virtuallis** è un widget di accessibilità che integra un interprete LIS (Lingua dei Segni Italiana) virtuale tramite avatar 3D animato, destinato a siti della Pubblica Amministrazione italiana. Garantisce conformità alla Legge Stanca e alle linee guida WCAG 2.1 livello AA.

## Funzionalità Core
- Avatar 3D animato che traduce i contenuti in LIS on-demand (in lavorazione).
- Interfaccia UI non invasiva, isolata, con FAB (Floating Action Button) e Pannello Overlay accessibile da tastiera e Screen Reader.
- Stack Tecnologico 3D: **Three.js** e **React Three Fiber**.

## Architettura del Progetto
Il progetto al momento risiede all'interno del layer Next.js `virtuallis/` che funge da ambiente di test:

- **Next.js (App Router)**: Infrastruttura e test environment.
- **Tailwind CSS v4**: Gestione dello stile encapsulato (prefix `lis:`).
- **React Three Fiber**: Pipeline 3D e renderizzazione dell'avatar.

### Struttura delle Cartelle Principali (`virtuallis/src`)
* `app/`
  * `globals.css`: Setup font (Inter), tokens dei colori (`--lis-color-X`) e configurazione di importazione Tailwind CSS v4.
  * `page.tsx`: Pagina di test pubblica amministrazione.
  * `layout.tsx`: Layout di base e wrapper HTML.
* `components/`
  * `ui/`: Componenti dell'interfaccia 2D
    * `Fab.tsx`: Pulsante a sfera toggle, accessibile via tastiera (`focus:ring`).
    * `WidgetPanel.tsx`: Popup laterale (con animazione slide-up fluida) che ospita l'Avatar.
  * `3d/`: Componenti inerenti allo spazio 3D e al WebGL
    * `AvatarCanvas.tsx`: Il canvas 3D che carica le luci, la telecamera e il modello `.glb` riggato tramite `useanimations` e `useGLTF`.

## Istruzioni di Sviluppo

### 1. Avviare il progetto locale
Per avviare l'ambiente isolato:
```bash
cd virtuallis
npm install
npm run dev
```

### 2. Standard CSS
Tutto il CSS è "spaziato" per non collidere con i file ospitanti (siti della PA).
In Tailwind v4, tutte le chiamate utility usano il prefisso con i due punti:
* **Corretto:** `lis:bg-[var(--lis-color-primary)]`
* **Sbagliato:** `bg-primary`, `lis-bg-primary`

### 3. Pipeline Modelli 3D e Animazioni (Prossimi Passi)
1. L'avatar dovrà essere creato su **Blender** (o preso da librerie come Mixamo).
2. Esportato obbligatoriamente nel formato per il web: `.glb`.
3. Il file riporterà la mesh fusa (armatura/ossa) e le *Action* dell'animazione LIS ("saluto", "aiuto").
4. Verrà caricato nella cartella `virtuallis/public/models/` e instanziato dentro `AvatarCanvas.tsx` sfruttando `useGLTF`.

---
*Progetto documentato in tandem con l'assistente IA.*
