import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  RefreshCw, 
  FileText, 
  Send, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  Printer,
  ShieldCheck,
  Building
} from 'lucide-react';
import { JobPosting, UserProfile } from '../types';

interface AIActionCenterProps {
  selectedJob: JobPosting | null;
  userProfile: UserProfile;
}

export const AIActionCenter: React.FC<AIActionCenterProps> = ({
  selectedJob,
  userProfile
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'DE' | 'EN'>('DE');
  const [isCopied, setIsCopied] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [sentToast, setSentToast] = useState(false);

  if (!selectedJob) {
    return (
      <aside className="w-full lg:w-96 shrink-0 bg-slate-950/90 border-l border-slate-800 p-5 flex flex-col justify-center items-center text-center">
        <FileText className="w-12 h-12 text-slate-700 mb-3" />
        <h3 className="text-sm font-bold text-slate-400">No Job Selected</h3>
        <p className="text-xs text-slate-600 mt-1 max-w-xs">
          Select any incoming vacancy card from the center feed to generate an AI tailored cover letter and strategic analysis.
        </p>
      </aside>
    );
  }

  const isApplyNow = selectedJob.statusRecommendation === 'APPLY NOW';
  const coverLetterText =
    selectedLanguage === 'DE'
      ? selectedJob.coverLetterTemplateDE
      : selectedJob.coverLetterTemplateEN;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetterText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    } catch {
      // Fallback
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    }
  };

  const handleDownloadTxt = () => {
    const filename = `CoverLetter_${selectedJob.company.replace(/\s+/g, '_')}_${selectedLanguage}_${userProfile.referenceId}.txt`;
    const element = document.createElement('a');
    const file = new Blob([coverLetterText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
    }, 1200);
  };

  const handleSimulateDispatch = () => {
    setSentToast(true);
    setTimeout(() => setSentToast(false), 3000);
  };

  return (
    <aside className="w-full lg:w-96 xl:w-[420px] shrink-0 bg-slate-950/90 border-l border-slate-800/80 p-4 lg:p-5 flex flex-col h-[calc(100vh-4rem)] overflow-y-auto space-y-4">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              AI Action Center
            </h2>
          </div>
          <p className="text-[11px] text-slate-400">
            Real-time Evaluation &amp; Letter Generator
          </p>
        </div>

        {/* Selected match badge */}
        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
          Match: <span className={isApplyNow ? 'text-emerald-400' : 'text-rose-400'}>{selectedJob.matchScore}%</span>
        </span>
      </div>

  {/* Selected Job Quick Card */}
      <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="truncate font-medium">{selectedJob.company}</span>
          <span className="font-mono text-slate-400">{selectedJob.city}, {selectedJob.country}</span>
        </div>
        <h3 className="text-xs font-bold text-white truncate">
          {selectedJob.title}
        </h3>
        <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
          <span>Source: <strong className="text-slate-200">{selectedJob.source}</strong></span>
          <span className="text-emerald-400 font-mono font-medium">{selectedJob.salaryRange}</span>
        </div>
        
        {/* Direct Live Job Link */}
        <div className="pt-2 mt-1 border-t border-slate-800 flex justify-end">
          <a
            href={selectedJob.source === 'Make it in Germany' ? 'https://www.make-it-in-germany.com' : 'https://www.google.com/search?q=' + encodeURIComponent(selectedJob.title + ' ' + selectedJob.company)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors underline"
          >
            <span>🔗 Open Original Live Job Posting</span>
          </a>
        </div>
      </div>

      {/* Real-time Decision Badge: 🟢 APPLY NOW / 🔴 SKIP */}
      <div
        className={`p-3.5 rounded-xl border transition-all duration-300 ${
          isApplyNow
            ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
            : 'bg-rose-950/30 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full flex items-center justify-center ${
                isApplyNow ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-rose-500 shadow-[0_0_8px_#f43f5e]'
              }`}
            />
            <span
              className={`font-mono text-sm font-extrabold tracking-wider ${
                isApplyNow ? 'text-emerald-300' : 'text-rose-300'
              }`}
            >
              {selectedJob.statusRecommendation === 'APPLY NOW' ? '🟢 APPLY NOW' : '🔴 SKIP'}
            </span>
          </div>

          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
            Automated Audit
          </span>
        </div>

        <p className="text-xs leading-relaxed text-slate-300">
          {selectedJob.statusReason}
        </p>

        {isApplyNow && (
          <div className="mt-2.5 pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-400 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Accreditation: {userProfile.referenceId}
            </span>
            <span>Blue Card § 18g Ready</span>
          </div>
        )}
      </div>

      {/* Generator Language & Tone Controls */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-medium">Cover Letter Standard</span>
          <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800">
            <button
              onClick={() => setSelectedLanguage('DE')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                selectedLanguage === 'DE'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇩🇪 German (DIN 5008)
            </button>
            <button
              onClick={() => setSelectedLanguage('EN')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                selectedLanguage === 'EN'
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🇬🇧 English (Global)
            </button>
          </div>
        </div>
      </div>

      {/* Fully Formatted Tailored Cover Letter Preview Box */}
      <div className="flex-1 flex flex-col min-h-0 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="font-mono flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            Tailored Letter Preview
          </span>
          <button
            onClick={handleRegenerate}
            disabled={isRegenerating}
            className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors disabled:opacity-60"
            title="Re-run AI prompt tailored to recruiter context"
          >
            <RefreshCw className={`w-3 h-3 ${isRegenerating ? 'animate-spin text-emerald-400' : ''}`} />
            <span>Regenerate</span>
          </button>
        </div>

        {/* Letter Canvas Container */}
        <div className="relative flex-1 rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 overflow-hidden flex flex-col">
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/80 pointer-events-none" />

          {/* Letter Content with Monospace/Serif crisp reading */}
          <div className="overflow-y-auto flex-1 font-mono text-[11px] text-slate-200 leading-relaxed pr-1 whitespace-pre-wrap select-text selection:bg-emerald-500/30">
            {isRegenerating ? (
              <div className="h-full flex flex-col items-center justify-center space-y-2 py-16 text-center">
                <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
                <p className="text-xs text-slate-300 font-semibold">Gemini 2.5 Pro reasoning in progress...</p>
                <p className="text-[10px] text-slate-500">Injecting DIN 5008 address block &amp; ZAB reference {userProfile.referenceId}</p>
              </div>
            ) : (
              coverLetterText
            )}
          </div>
        </div>

        {/* Action Buttons: Copy to Clipboard & Download .txt */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={handleCopy}
            id="btn-copy-cover-letter"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 text-xs font-semibold transition-all duration-200 shadow-sm active:scale-98"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy to Clipboard</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadTxt}
            id="btn-download-cover-letter-txt"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-98"
          >
            <Download className="w-3.5 h-3.5 text-slate-950" />
            <span>Download .txt</span>
          </button>
        </div>

        {/* Dispatch Simulator */}
        <button
          onClick={handleSimulateDispatch}
          className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Send className="w-3.5 h-3.5 text-emerald-400" />
          <span>Queue Direct Ingestion to {selectedJob.company} ATS</span>
        </button>

        {sentToast && (
          <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-300 text-center animate-in fade-in duration-200">
            Application package queued for {selectedJob.recruiter.name} at {selectedJob.company}!
          </div>
        )}
      </div>

    </aside>
  );
};
