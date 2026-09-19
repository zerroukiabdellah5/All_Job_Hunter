import React, { useState } from 'react';
import { 
  KeyRound, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  Sparkles, 
  RefreshCw, 
  Database, 
  Radio, 
  UserCheck, 
  CheckCircle2, 
  Award, 
  ExternalLink,
  Cpu,
  Layers
} from 'lucide-react';
import { ScanningSource, UserProfile } from '../types';

interface LeftSidebarProps {
  userProfile: UserProfile;
  sources: ScanningSource[];
  onToggleSource: (id: string) => void;
  onTriggerSync: () => void;
  isSyncing: boolean;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  userProfile,
  sources,
  onToggleSource,
  onTriggerSync,
  isSyncing
}) => {
  const [apiKey, setApiKey] = useState('AIzaSyD-Gemini25Pro-KeyVaultSecured-2026');
  const [showKey, setShowKey] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gemini-2.5-pro');
  const [keySavedToast, setKeySavedToast] = useState(false);

  const handleSaveKey = () => {
    setKeySavedToast(true);
    setTimeout(() => setKeySavedToast(false), 2000);
  };

  return (
    <aside className="w-full lg:w-80 shrink-0 bg-slate-950/90 border-r border-slate-800/80 p-4 space-y-5 overflow-y-auto flex flex-col h-[calc(100vh-4rem)]">
      
      {/* 1. Profile Summary Card - Showing ZAB_DAB2026_3493 */}
      <div className="rounded-xl glass-panel p-4 border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-bold text-sm shadow-md border border-emerald-400/40">
              AM
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                {userProfile.fullName}
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              </h2>
              <p className="text-[11px] text-slate-400 leading-tight">
                {userProfile.title}
              </p>
            </div>
          </div>
        </div>

        {/* Required Reference Highlight Badge: ZAB_DAB2026_3493 */}
        <div className="mt-3 p-2.5 rounded-lg bg-slate-900/90 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.1)]">
          <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1">
            <span className="flex items-center gap-1 font-medium text-slate-400">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              ZAB Formal Accreditation:
            </span>
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/40">
              VERIFIED
            </span>
          </div>
          
          <div className="flex items-center justify-between font-mono bg-slate-950 px-2 py-1.5 rounded border border-slate-800 mt-1">
            <span className="text-xs font-bold text-emerald-400 tracking-wider">
              {userProfile.referenceId}
            </span>
            <span className="text-[10px] text-slate-400">
              KMK M.Sc. Eq.
            </span>
          </div>

          <p className="text-[10px] text-slate-400 mt-1.5 leading-snug">
            {userProfile.credentialTitle}
          </p>
        </div>

        {/* Legal & Language Badges */}
        <div className="grid grid-cols-2 gap-2 mt-3 text-[11px]">
          <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="text-[10px] text-slate-400 font-mono">VISA WORK STATUS</div>
            <div className="text-emerald-400 font-medium font-mono text-[11px] mt-0.5">
              § 18g EU Blue Card
            </div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="text-[10px] text-slate-400 font-mono">GERMAN LEVEL</div>
            <div className="text-slate-200 font-medium text-[11px] mt-0.5">
              {userProfile.germanLevel}
            </div>
          </div>
        </div>
      </div>

      {/* 2. AI Quick Controls & API Key Vault */}
      <div className="rounded-xl glass-panel p-4 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">AI Engine &amp; API Key</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
            Active Vault
          </span>
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1 font-medium">
            Gemini / Reasoning Model
          </label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
          >
            <option value="gemini-2.5-pro">Gemini 2.5 Pro (Deep Context Reasoning)</option>
            <option value="gemini-2.5-flash">Gemini 2.5 Flash (Ultra Low Latency)</option>
            <option value="custom-claude-35">Claude 3.5 Sonnet (DIN 5008 Specialist)</option>
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Enterprise API Key</span>
            {keySavedToast && (
              <span className="text-[10px] text-emerald-400 animate-pulse">Vault Updated!</span>
            )}
          </div>
          <div className="relative flex items-center">
            <input
              type={showKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Paste AI API Key..."
              className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-8 pr-16 py-1.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-emerald-500"
            />
            <KeyRound className="w-3.5 h-3.5 text-slate-500 absolute left-2.5" />
            <div className="absolute right-1.5 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="p-1 text-slate-400 hover:text-slate-200"
                title={showKey ? 'Hide Key' : 'Reveal Key'}
              >
                {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={handleSaveKey}
                className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded transition-colors"
              >
                Set
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 border-t border-slate-800">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            DIN 5008 Compliance Mode
          </span>
          <span className="text-emerald-400 font-mono text-[10px]">ENFORCED</span>
        </div>
      </div>

      {/* 3. Live Scanning Sources - StepStone, BA, Make it in Germany, etc. */}
      <div className="rounded-xl glass-panel p-4 border border-slate-800 space-y-3 flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">Scanning Sources</span>
          </div>
          <button
            onClick={onTriggerSync}
            disabled={isSyncing}
            className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800/90 hover:bg-slate-800 text-[11px] font-medium text-slate-300 hover:text-emerald-300 border border-slate-700 transition-colors disabled:opacity-60"
            title="Trigger manual scraper synchronization across all portals"
          >
            <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-emerald-400' : ''}`} />
            <span>{isSyncing ? 'Syncing...' : 'Scan Now'}</span>
          </button>
        </div>

        <div className="space-y-2">
          {sources.map((source) => (
            <div
              key={source.id}
              className={`p-2.5 rounded-lg border transition-all duration-200 ${
                source.active
                  ? 'bg-slate-900/80 border-slate-700/80'
                  : 'bg-slate-950/40 border-slate-800/40 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${source.active ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
                  <span className="text-xs font-medium text-slate-200 truncate max-w-[150px]">
                    {source.name}
                  </span>
                </div>
                
                {/* Toggle */}
                <button
                  type="button"
                  onClick={() => onToggleSource(source.id)}
                  className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${
                    source.active ? 'bg-emerald-600' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-white transition-transform ${
                      source.active ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono">
                <span>{source.ratePerHr} jobs/hr</span>
                <span className="text-slate-500">Scraped {source.lastScraped}</span>
                <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                  {source.region}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            Active Scraper Daemon
          </span>
          <span className="font-mono text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-300">
            528/hr rate
          </span>
        </div>
      </div>

    </aside>
  );
};
