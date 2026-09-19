import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, ExternalLink, Sparkles } from 'lucide-react';
import { standaloneHtmlCode } from '../data/standaloneHtmlCode';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(standaloneHtmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-career-hunter-dashboard.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-4xl h-[85vh] rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Pure HTML5 + Tailwind CSS (via CDN) Standalone Code
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Ready to deploy / open in browser
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Single-file self-contained HTML including all 4 dashboard regions, Inter typography, glowing rocket, and DIN 5008 cover letter engine.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Code Content Container */}
        <div className="flex-1 p-4 bg-slate-950 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between pb-2 text-xs text-slate-400 font-mono">
            <span>File: ai-career-hunter-dashboard.html</span>
            <span>Size: ~{Math.round(standaloneHtmlCode.length / 1024)} KB</span>
          </div>

          <pre className="flex-1 overflow-auto p-4 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed selection:bg-emerald-500/30">
            <code>{standaloneHtmlCode}</code>
          </pre>
        </div>

        {/* Action Footer */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="text-xs text-slate-400 hidden sm:block">
            Contains Tailwind CDN, Inter Google Font, responsive grid, and interactive scripts.
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied Full HTML!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy HTML Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Download .html File</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
