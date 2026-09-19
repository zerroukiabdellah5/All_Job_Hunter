export const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Career Hunter - Enterprise DACH & Benelux Job Intelligence</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Inter & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
          colors: {
            slate: {
              850: '#151f32',
              900: '#0f172a',
              950: '#020617',
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #020617;
      color: #f8fafc;
    }
    .glass-panel {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(51, 65, 85, 0.5);
    }
    .glass-panel-active {
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(16, 185, 129, 0.45);
      box-shadow: 0 0 25px -5px rgba(16, 185, 129, 0.15);
    }
    .glow-rocket {
      filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.7)) drop-shadow(0 0 20px rgba(56, 189, 248, 0.4));
    }
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.6);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(51, 65, 85, 0.7);
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(16, 185, 129, 0.5);
    }
  </style>
</head>
<body class="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-emerald-500/30 selection:text-emerald-200">

  <!-- 1. TOP NAVIGATION BAR -->
  <header class="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40 px-4 lg:px-6 flex items-center justify-between">
    <!-- Brand & Glowing Rocket Logo -->
    <div class="flex items-center gap-3">
      <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-cyan-500/20 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.35)]">
        <!-- SVG Rocket Icon with Glow -->
        <svg class="w-5 h-5 text-emerald-400 glow-rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
        <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
        <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
            AI Career Hunter
            <span class="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              v2.6 Enterprise
            </span>
          </span>
        </div>
        <p class="text-[11px] text-slate-400 font-medium hidden sm:block">
          Intelligent DACH &amp; Benelux Talent Pipeline
        </p>
      </div>
    </div>

    <!-- Live Status Badge + Market Focus Selector -->
    <div class="flex items-center gap-3">
      <!-- Live system status badge ("🟢 Memory Active: 5 Docs") -->
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 shadow-sm cursor-default">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="text-xs font-semibold tracking-wide">
          Memory Active: <span class="text-emerald-400 font-mono">5 Docs</span>
        </span>
      </div>

      <!-- Market focus selector (Germany 70% / Benelux 30%) -->
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200">
        <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
        </svg>
        <div class="flex items-center gap-1.5 text-xs font-medium">
          <span class="text-slate-400">Market Focus:</span>
          <span id="market-text-de" class="text-emerald-400 font-semibold font-mono">Germany 70%</span>
          <span class="text-slate-500">/</span>
          <span id="market-text-bnl" class="text-cyan-400 font-semibold font-mono">Benelux 30%</span>
        </div>
      </div>
    </div>
  </header>

  <!-- DASHBOARD 3-COLUMN WORKSPACE -->
  <div class="flex-1 flex flex-col lg:flex-row overflow-hidden">

    <!-- 2. LEFT SIDEBAR: Quick Controls, Sources, Profile Summary (ZAB_DAB2026_3493) -->
    <aside class="w-full lg:w-80 shrink-0 bg-slate-950/90 border-r border-slate-800 p-4 space-y-4 overflow-y-auto">
      
      <!-- Profile Summary Card (showing ZAB_DAB2026_3493 reference) -->
      <div class="rounded-xl glass-panel p-4 border border-slate-800">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-bold text-sm shadow border border-emerald-400/40">
            AM
          </div>
          <div>
            <h3 class="text-sm font-bold text-white tracking-tight">Dr. Alexander Mercer</h3>
            <p class="text-[11px] text-slate-400">Principal Cloud & AI Architect</p>
          </div>
        </div>

        <!-- ZAB Accreditation Box -->
        <div class="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.1)]">
          <div class="flex items-center justify-between text-[11px] text-slate-300 mb-1">
            <span class="text-slate-400 font-medium">Formal ZAB Accreditation:</span>
            <span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/40">VERIFIED</span>
          </div>
          <div class="flex items-center justify-between font-mono bg-slate-950 px-2 py-1.5 rounded border border-slate-800">
            <span class="text-xs font-bold text-emerald-400 tracking-wider">ZAB_DAB2026_3493</span>
            <span class="text-[10px] text-slate-400">KMK M.Sc. Eq.</span>
          </div>
          <p class="text-[10px] text-slate-400 mt-1.5 leading-snug">
            Zentralstelle für ausländisches Bildungswesen (ZAB) - Verified Equivalent M.Sc. Informatics
          </p>
        </div>

        <div class="grid grid-cols-2 gap-2 mt-3 text-[11px]">
          <div class="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <div class="text-[10px] text-slate-500 font-mono">VISA STATUS</div>
            <div class="text-emerald-400 font-medium font-mono text-[11px]">§ 18g EU Blue Card</div>
          </div>
          <div class="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <div class="text-[10px] text-slate-500 font-mono">LANGUAGE</div>
            <div class="text-slate-200 font-medium text-[11px]">B2/C1 Deutsch • C2 EN</div>
          </div>
        </div>
      </div>

      <!-- Quick controls for AI API Key -->
      <div class="rounded-xl glass-panel p-4 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-white tracking-wide uppercase">AI Engine & API Key</span>
          <span class="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">Active Vault</span>
        </div>
        
        <div>
          <label class="text-[11px] text-slate-400 block mb-1">Reasoning Model</label>
          <select class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 font-mono">
            <option>Gemini 2.5 Pro (Deep Context DIN 5008)</option>
            <option>Gemini 2.5 Flash (Ultra Fast)</option>
          </select>
        </div>

        <div>
          <label class="text-[11px] text-slate-400 block mb-1">AI API Key (Encrypted Vault)</label>
          <div class="relative">
            <input type="password" value="AIzaSyD-Gemini25Pro-KeyVault-2026" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-slate-200">
          </div>
        </div>
      </div>

      <!-- Scanning sources -->
      <div class="rounded-xl glass-panel p-4 border border-slate-800 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-white tracking-wide uppercase">Scanning Sources</span>
          <span class="text-[10px] text-emerald-400 font-mono">Daemon 528/hr</span>
        </div>

        <div class="space-y-2">
          <!-- StepStone -->
          <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span class="text-xs font-medium text-slate-200">StepStone.de API</span>
            </div>
            <span class="text-[10px] font-mono text-slate-400">142/hr</span>
          </div>

          <!-- BA (Bundesagentur für Arbeit) -->
          <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span class="text-xs font-medium text-slate-200">Bundesagentur für Arbeit</span>
            </div>
            <span class="text-[10px] font-mono text-slate-400">98/hr</span>
          </div>

          <!-- Make it in Germany -->
          <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span class="text-xs font-medium text-slate-200">Make it in Germany</span>
            </div>
            <span class="text-[10px] font-mono text-emerald-400 font-semibold">Fast-Track</span>
          </div>

          <!-- LinkedIn Benelux -->
          <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span class="text-xs font-medium text-slate-200">LinkedIn Benelux</span>
            </div>
            <span class="text-[10px] font-mono text-slate-400">185/hr</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- 3. MAIN CENTER WORKSPACE: "Job Intelligence & Live Scraper Feed" -->
    <main class="flex-1 p-4 lg:p-6 overflow-y-auto space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-slate-800">
        <div>
          <h1 class="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            Job Intelligence & Live Scraper Feed
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          </h1>
          <p class="text-xs text-slate-400">Real-time incoming job postings across Frankfurt, Munich, Amsterdam & Benelux</p>
        </div>
        <div class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
          Showing Curated Matches (ZAB Ref: ZAB_DAB2026_3493)
        </div>
      </div>

      <!-- CARD 1: Siemens Healthineers (Frankfurt) - StepStone -->
      <div class="rounded-xl glass-panel-active p-5 space-y-3 transition-all duration-300">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              SH
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-white">Senior Cloud & Generative AI Infrastructure Architect</h3>
                <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">NEW</span>
              </div>
              <div class="flex items-center gap-3 mt-1 text-xs text-slate-300 flex-wrap">
                <span class="font-semibold text-slate-200">Siemens Healthineers AG</span>
                <span>•</span>
                <span class="text-slate-300">🇩🇪 Frankfurt am Main, Germany</span>
                <span>•</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-500/15 text-blue-300 border border-blue-500/30">StepStone</span>
                <span>•</span>
                <span class="text-slate-400 font-mono text-[11px]">12m ago</span>
              </div>
            </div>
          </div>
          <!-- Match Score -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
            🔥 98% Match
          </div>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">
          Lead the next-generation sovereign medical cloud infrastructure. Architecting resilient multi-tenant orchestration, LLM inference endpoints, and automated CI/CD for hospital diagnostic pipelines.
        </p>

        <!-- Expandable Deep-Dive Section: Recruiter / Hiring Team Metadata -->
        <div class="bg-slate-950/90 rounded-lg p-3.5 border border-slate-800 space-y-2 mt-2">
          <div class="flex items-center justify-between text-xs border-b border-slate-800 pb-1.5">
            <span class="font-bold text-emerald-400 uppercase tracking-wide text-[11px]">Recipient Company & Recruiter Intelligence</span>
            <span class="font-mono text-[10px] text-slate-400">DIN 5008 Addressee Confirmed</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div>
              <div class="text-[10px] text-slate-500 font-mono uppercase">Decision Maker / Hiring Lead</div>
              <div class="font-bold text-white mt-0.5">Dr. Florian Becker</div>
              <div class="text-slate-400 text-[11px]">Head of Talent Acquisition & Digital Engineering</div>
              <div class="text-slate-400 text-[11px]">florian.becker@siemens-healthineers.com • +49 69 797 2200</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 font-mono uppercase">Corporate Entity & Address</div>
              <div class="font-semibold text-slate-300 mt-0.5">Siemens Healthineers AG</div>
              <div class="text-slate-400 text-[11px] font-mono">Speicherstraße 55, 60327 Frankfurt am Main, Germany</div>
              <div class="text-emerald-400 text-[11px] mt-0.5">Visa: Direct § 18g EU Blue Card fast-track via BAMF</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 2: ASML Holding N.V. (Amsterdam / Eindhoven) - LinkedIn -->
      <div class="rounded-xl glass-panel p-5 space-y-3 hover:border-slate-700 transition-all duration-300">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              ASML
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Lead Distributed Systems Engineer (High-Throughput EU Core)</h3>
              <div class="flex items-center gap-3 mt-1 text-xs text-slate-300 flex-wrap">
                <span class="font-semibold text-slate-200">ASML Holding N.V.</span>
                <span>•</span>
                <span class="text-slate-300">🇳🇱 Eindhoven / Amsterdam, Netherlands</span>
                <span>•</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30">LinkedIn</span>
                <span>•</span>
                <span class="text-slate-400 font-mono text-[11px]">35m ago</span>
              </div>
            </div>
          </div>
          <!-- Match Score -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm bg-emerald-500/15 text-emerald-400 border-emerald-500/40">
            🔥 95% Match
          </div>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">
          Architect the control computation fabric for extreme ultraviolet (EUV) lithography systems. Processing sub-millisecond telemetry feeds across massive node arrays.
        </p>

        <!-- Deep-Dive Section -->
        <div class="bg-slate-950/90 rounded-lg p-3.5 border border-slate-800 space-y-2 mt-2">
          <div class="flex items-center justify-between text-xs border-b border-slate-800 pb-1.5">
            <span class="font-bold text-emerald-400 uppercase tracking-wide text-[11px]">Recipient Company & Recruiter Intelligence</span>
            <span class="font-mono text-[10px] text-slate-400">Kennismigrant / 30% Ruling Fast Track</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div>
              <div class="text-[10px] text-slate-500 font-mono uppercase">Decision Maker</div>
              <div class="font-bold text-white mt-0.5">Wouter van Dijk</div>
              <div class="text-slate-400 text-[11px]">Lead Tech Recruiter - D&E Software</div>
              <div class="text-slate-400 text-[11px]">wouter.vandijk@asml.com • +31 40 268 3000</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 font-mono uppercase">Corporate Entity & Address</div>
              <div class="font-semibold text-slate-300 mt-0.5">ASML Holding N.V.</div>
              <div class="text-slate-400 text-[11px] font-mono">De Run 6501, 5504 DR Veldhoven, Netherlands</div>
              <div class="text-cyan-400 text-[11px] mt-0.5">30% Tax Ruling Facility & Fast-Track Sponsorship</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 3: SAP SE - Make it in Germany -->
      <div class="rounded-xl glass-panel p-5 space-y-3 hover:border-slate-700 transition-all duration-300">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="w-11 h-11 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-xs shrink-0">
              SAP
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Principal Machine Learning Engineer (Skilled Immigration Fast-Track)</h3>
              <div class="flex items-center gap-3 mt-1 text-xs text-slate-300 flex-wrap">
                <span class="font-semibold text-slate-200">SAP SE</span>
                <span>•</span>
                <span class="text-slate-300">🇩🇪 Walldorf / Munich, Germany</span>
                <span>•</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Make it in Germany</span>
                <span>•</span>
                <span class="text-slate-400 font-mono text-[11px]">2h ago</span>
              </div>
            </div>
          </div>
          <!-- Match Score -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm bg-emerald-500/15 text-emerald-400 border-emerald-500/40">
            🔥 94% Match
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">
          Orchestrating enterprise foundation models across the SAP Business Technology Platform (BTP). Serving tens of thousands of global enterprise clients with strict latency guarantees.
        </p>
      </div>

      <!-- CARD 4: Deutsche Telekom - BA (Bundesagentur für Arbeit) -->
      <div class="rounded-xl glass-panel p-5 space-y-3 hover:border-slate-700 transition-all duration-300">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="w-11 h-11 rounded-xl bg-pink-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              DT
            </div>
            <div>
              <h3 class="text-base font-bold text-white">Staff Platform Engineer & Sovereign Cloud Strategist</h3>
              <div class="flex items-center gap-3 mt-1 text-xs text-slate-300 flex-wrap">
                <span class="font-semibold text-slate-200">Deutsche Telekom AG</span>
                <span>•</span>
                <span class="text-slate-300">🇩🇪 Bonn / Cologne, Germany</span>
                <span>•</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">BA</span>
                <span>•</span>
                <span class="text-slate-400 font-mono text-[11px]">1h ago</span>
              </div>
            </div>
          </div>
          <!-- Match Score -->
          <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm bg-emerald-500/15 text-emerald-400 border-emerald-500/40">
            🔥 92% Match
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">
          Building Europe’s sovereign telecommunications cloud layer adhering to GAIA-X and BSI IT-Grundschutz standards.
        </p>
      </div>
    </main>

    <!-- 4. RIGHT PANEL: "AI Action Center & Cover Letter Generator" -->
    <aside class="w-full lg:w-96 xl:w-[420px] shrink-0 bg-slate-950/90 border-l border-slate-800 p-4 lg:p-5 flex flex-col space-y-4">
      
      <div class="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <h2 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            AI Action Center
          </h2>
          <p class="text-[11px] text-slate-400">Cover Letter Generator & Real-time Audit</p>
        </div>
        <span class="font-mono text-xs font-bold text-emerald-400 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded">
          Fit: 98%
        </span>
      </div>

      <!-- Real-time Decision Badge: 🟢 APPLY NOW / 🔴 SKIP -->
      <div class="p-3.5 rounded-xl border bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] space-y-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
            <span class="font-mono text-sm font-extrabold tracking-wider text-emerald-300">
              🟢 APPLY NOW
            </span>
          </div>
          <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
            Automated Audit
          </span>
        </div>
        <p class="text-xs leading-relaxed text-slate-300">
          Perfect 98% profile alignment: Match on Kubernetes/GCP architecture, EU Blue Card pre-verified (Ref: ZAB_DAB2026_3493), and C1 English / B2 Technical German.
        </p>
        <div class="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-400 font-mono">
          <span>Accreditation: ZAB_DAB2026_3493</span>
          <span>Blue Card § 18g Ready</span>
        </div>
      </div>

      <!-- Fully formatted, professional tailored Cover Letter preview box -->
      <div class="flex-1 flex flex-col min-h-0 space-y-2">
        <div class="flex items-center justify-between text-[11px] text-slate-400">
          <span class="font-mono text-slate-300">Tailored DIN 5008 Letter Preview</span>
          <span class="text-emerald-400 text-[10px] font-mono">Siemens Healthineers AG</span>
        </div>

        <div class="relative flex-1 rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 overflow-hidden flex flex-col">
          <div id="cover-letter-preview" class="overflow-y-auto flex-1 font-mono text-[11px] text-slate-200 leading-relaxed whitespace-pre-wrap select-text selection:bg-emerald-500/30">Alexander Mercer
Leopoldstraße 142
80804 München
E-Mail: a.mercer.architect@tech-lead.eu
Telefon: +49 (0) 89 4529 8812

Siemens Healthineers AG
Herrn Dr. Florian Becker
Head of Talent Acquisition & Digital Engineering
Speicherstraße 55
60327 Frankfurt am Main

München, 19. September 2026

Bewerbung als Senior Cloud & Generative AI Infrastructure Architect
Referenz: SH-FRA-2026-CLOUD | Profil-Akkreditierung: ZAB_DAB2026_3493

Sehr geehrter Herr Dr. Becker,

mit großem Interesse verfolge ich die Vorreiterrolle der Siemens Healthineers AG bei der Etablierung souveräner, hochverfügbarer Cloud- und KI-Infrastrukturen im europäischen Gesundheitssektor. Als Cloud Architect mit über 9 Jahren Erfahrung in der Orchestrierung verteilter Kubernetes-Cluster und skalierbarer LLMOps-Pipelines bewerbe ich mich mit Begeisterung auf die ausgeschriebene Position in Frankfurt am Main.

Mein beruflicher Hintergrund umfasst die Konzeption und den produktiven Betrieb von Multi-Tenant-GCP- und Hybrid-Umgebungen unter strengen Datenschutz- und Hochsicherheitsauflagen. Durch die offizielle Feststellung der Gleichwertigkeit meines Hochschulabschlusses durch die Zentralstelle für ausländisches Bildungswesen (ZAB Aktenzeichen: ZAB_DAB2026_3493) sowie die Erfüllung aller Voraussetzungen für die beschleunigte EU Blue Card (§ 18g AufenthG) ist ein unmittelbarer, rechtssicherer Eintritt ohne bürokratische Verzögerungen gewährleistet.

Besonders hervorzuheben aus meinen bisherigen Projekten:
• Automatisierung von Zero-Downtime Terraform-Infrastrukturen für Latenzkritische Inferenz-Workloads mit einer Einsparung von 38 % Infrastrukturkosten.
• Aufbau von Kubernetes-basierten API-Gateways für über 4,5 Millionen tägliche Transaktionen mit 99,99 % SLA.
• Sichere Verhandlungssicherheit in Englisch (C2) sowie fundiertes berufsbezogenes Deutsch (B2/C1).

Ich freue mich darauf, meine Expertise in Ihr Frankfurter Team einzubringen und stehe Ihnen für ein persönliches oder virtuelles Gespräch jederzeit gerne zur Verfügung.

Mit freundlichen Grüßen

Alexander Mercer</div>
        </div>

        <!-- Buttons: "Copy to Clipboard" and "Download .txt" -->
        <div class="grid grid-cols-2 gap-2 pt-1">
          <button onclick="copyLetter()" id="btn-copy" class="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all">
            <span id="copy-btn-label">Copy to Clipboard</span>
          </button>
          <button onclick="downloadLetter()" class="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <span>Download .txt</span>
          </button>
        </div>
      </div>

    </aside>

  </div>

  <script>
    function copyLetter() {
      const text = document.getElementById('cover-letter-preview').innerText;
      navigator.clipboard.writeText(text).then(() => {
        const btnLabel = document.getElementById('copy-btn-label');
        btnLabel.innerText = 'Copied to Clipboard!';
        btnLabel.style.color = '#34d399';
        setTimeout(() => {
          btnLabel.innerText = 'Copy to Clipboard';
          btnLabel.style.color = '';
        }, 2200);
      });
    }

    function downloadLetter() {
      const text = document.getElementById('cover-letter-preview').innerText;
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CoverLetter_Siemens_Healthineers_DIN5008_ZAB_DAB2026_3493.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  </script>
</body>
</html>
`;
