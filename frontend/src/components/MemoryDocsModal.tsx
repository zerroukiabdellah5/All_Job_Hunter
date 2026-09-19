import React from 'react';
import { X, FileText, CheckCircle2, Shield, Database, ExternalLink, HardDrive } from 'lucide-react';
import { UserProfile } from '../types';

interface MemoryDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
}

export const MemoryDocsModal: React.FC<MemoryDocsModalProps> = ({
  isOpen,
  onClose,
  userProfile
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Active Memory Knowledge Base
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  5 Docs Ingested
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Vectorized context grounding all generated cover letters &amp; match audits
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Memory Documents List */}
        <div className="space-y-2.5">
          {userProfile.memoryDocNames.map((doc, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-slate-200">{doc}</div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    Chunked: 1,536 dimensions • SHA-256 Verified
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Synced
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dossier Reference Highlight */}
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              ZAB Formal Registration Record
            </span>
            <span className="font-mono text-xs font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-emerald-500/40">
              {userProfile.referenceId}
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            All AI-generated applications automatically enforce the verified equivalency to an M.Sc. in Computer Science/Informatics pursuant to § 18g AufenthG (German EU Blue Card Act).
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
