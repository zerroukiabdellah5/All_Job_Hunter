import React, { useState } from 'react';
import { Rocket, Sliders, ChevronDown, Check, Sparkles, FileText, Code2, Globe2 } from 'lucide-react';
import { MarketFocus, UserProfile } from '../types';

interface TopNavbarProps {
  userProfile: UserProfile;
  marketFocus: MarketFocus;
  onMarketFocusChange: (focus: MarketFocus) => void;
  onOpenMemoryModal: () => void;
  onOpenHtmlExport: () => void;
  isScrapingActive: boolean;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  userProfile,
  marketFocus,
  onMarketFocusChange,
  onOpenMemoryModal,
  onOpenHtmlExport,
  isScrapingActive
}) => {
  const [showMarketDropdown, setShowMarketDropdown] = useState(false);

  const presets = [
    { label: 'Germany 70% / Benelux 30% (Default)', de: 70, be: 30 },
    { label: 'Germany 100% (DACH Focused)', de: 100, be: 0 },
    { label: 'Benelux 60% / Germany 40%', de: 40, be: 60 },
    { label: 'Equal Split (50% / 50%)', de: 50, be: 50 },
  ];

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40 px-4 lg:px-6 flex items-center justify-between">
      {/* Brand & Glowing Rocket Logo */}
      <div className="flex items-center gap-3">
        <div className="relative group cursor-pointer flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-cyan-500/20 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] group-hover:border-emerald-400">
            <Rocket className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300 glow-rocket" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                AI Career Hunter
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  v2.6 Enterprise
                </span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Intelligent DACH &amp; Benelux Talent Pipeline
            </p>
          </div>
        </div>
      </div>

      {/* Center & Controls: Status Badge + Market Focus Selector */}
      <div className="flex items-center gap-3">
        {/* Memory Active Live Badge */}
        <button
          onClick={onOpenMemoryModal}
          id="btn-memory-badge"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-all duration-200 shadow-sm group"
          title="Click to view loaded context memory documents"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide">
            Memory Active: <span className="text-emerald-400 font-mono">{userProfile.activeMemoryDocs} Docs</span>
          </span>
          <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors ml-0.5" />
        </button>

        {/* Market Focus Selector (Germany 70% / Benelux 30%) */}
        <div className="relative">
          <button
            onClick={() => setShowMarketDropdown(!showMarketDropdown)}
            id="btn-market-selector"
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 transition-all duration-200"
          >
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <span className="text-slate-400">Market Focus:</span>
              <span className="text-emerald-400 font-semibold font-mono">
                DE {marketFocus.germanyPercent}%
              </span>
              <span className="text-slate-500">/</span>
              <span className="text-cyan-400 font-semibold font-mono">
                BNL {marketFocus.beneluxPercent}%
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" />
          </button>

          {showMarketDropdown && (
            <div 
              className="absolute right-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-700/90 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
              onMouseLeave={() => setShowMarketDropdown(false)}
            >
              <div className="px-2 py-1.5 border-b border-slate-800 mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">Select Market Distribution</span>
                <span className="text-[10px] text-emerald-400 font-mono">Real-time weights</span>
              </div>
              <div className="space-y-1">
                {presets.map((preset, idx) => {
                  const isSelected = marketFocus.germanyPercent === preset.de && marketFocus.beneluxPercent === preset.be;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        onMarketFocusChange({ germanyPercent: preset.de, beneluxPercent: preset.be });
                        setShowMarketDropdown(false);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        isSelected 
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span>{preset.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Slider for custom split */}
              <div className="mt-3 pt-2.5 border-t border-slate-800 px-2">
                <div className="flex justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
                  <span>Germany: {marketFocus.germanyPercent}%</span>
                  <span>Benelux: {marketFocus.beneluxPercent}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={marketFocus.germanyPercent}
                  onChange={(e) => {
                    const de = parseInt(e.target.value);
                    onMarketFocusChange({ germanyPercent: de, beneluxPercent: 100 - de });
                  }}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Scraper Daemon Pulse indicator */}
        <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400">
          <div className={`w-2 h-2 rounded-full ${isScrapingActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
          <span>Daemon: {isScrapingActive ? 'Poll 3.0s' : 'Idle'}</span>
        </div>

        {/* View/Export Single-File HTML Button */}
        <button
          onClick={onOpenHtmlExport}
          id="btn-export-single-html"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 text-xs font-semibold transition-all duration-200 shadow-sm"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Standalone Single-File HTML</span>
          <span className="md:hidden">HTML</span>
        </button>
      </div>
    </header>
  );
};
