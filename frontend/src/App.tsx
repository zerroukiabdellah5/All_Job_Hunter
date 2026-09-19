import React, { useState, useEffect } from 'react';
import { TopNavbar } from './components/TopNavbar';
import { LeftSidebar } from './components/LeftSidebar';
import { JobWorkspace } from './components/JobWorkspace';
import { AIActionCenter } from './components/AIActionCenter';
import { MemoryDocsModal } from './components/MemoryDocsModal';
import { StandaloneHtmlModal } from './components/StandaloneHtmlModal';
import { 
  currentUserProfile, 
  initialScanningSources, 
  mockJobPostings 
} from './data/mockJobs';
import { JobPosting, MarketFocus, ScanningSource } from './types';

export default function App() {
  const [userProfile] = useState(currentUserProfile);
  const [sources, setSources] = useState<ScanningSource[]>(initialScanningSources);
  const [jobs, setJobs] = useState<JobPosting[]>(mockJobPostings);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(mockJobPostings[0]);
  const [marketFocus, setMarketFocus] = useState<MarketFocus>({
    germanyPercent: 70,
    beneluxPercent: 30,
  });

  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false);
  const [isHtmlExportOpen, setIsHtmlExportOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isScrapingActive, setIsScrapingActive] = useState(true);
  const [syncToast, setSyncToast] = useState<string | null>(null);

  // Toggle scanning source on/off
  const handleToggleSource = (id: string) => {
    setSources((prev) =>
      prev.map((src) =>
        src.id === id ? { ...src, active: !src.active } : src
      )
    );
  };

  // Trigger manual scraper sync
  const handleTriggerSync = () => {
    setIsSyncing(true);
    setSyncToast('Connecting to StepStone, BA API & Make it in Germany daemons...');
    
    setTimeout(() => {
      setIsSyncing(false);
      setSyncToast('Live Scraper Sync Complete: 6 DACH & Benelux vacancies verified with ZAB dossier!');
      setTimeout(() => setSyncToast(null), 3500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* 1. Top Navigation Bar */}
      <TopNavbar
        userProfile={userProfile}
        marketFocus={marketFocus}
        onMarketFocusChange={setMarketFocus}
        onOpenMemoryModal={() => setIsMemoryModalOpen(true)}
        onOpenHtmlExport={() => setIsHtmlExportOpen(true)}
        isScrapingActive={isScrapingActive}
      />

      {/* Sync Toast Notification */}
      {syncToast && (
        <div className="bg-emerald-900/90 text-emerald-200 border-b border-emerald-500/30 px-4 py-2 text-xs text-center font-mono flex items-center justify-center gap-2 animate-in fade-in duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{syncToast}</span>
        </div>
      )}

      {/* Main 3-Column SaaS Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* 2. Left Sidebar: AI API Key, Scanning Sources, Profile Summary (ZAB_DAB2026_3493) */}
        <LeftSidebar
          userProfile={userProfile}
          sources={sources}
          onToggleSource={handleToggleSource}
          onTriggerSync={handleTriggerSync}
          isSyncing={isSyncing}
        />

        {/* 3. Main Center Workspace: Job Intelligence & Live Scraper Feed */}
        <JobWorkspace
          jobs={jobs}
          selectedJobId={selectedJob?.id || ''}
          onSelectJob={(job) => setSelectedJob(job)}
          marketFocus={marketFocus}
        />

        {/* 4. Right Panel: AI Action Center & Cover Letter Generator */}
        <AIActionCenter
          selectedJob={selectedJob}
          userProfile={userProfile}
        />

      </div>

      {/* Memory Docs Inspector Modal ("🟢 Memory Active: 5 Docs") */}
      <MemoryDocsModal
        isOpen={isMemoryModalOpen}
        onClose={() => setIsMemoryModalOpen(false)}
        userProfile={userProfile}
      />

      {/* Standalone Single-File HTML Code Export Modal */}
      <StandaloneHtmlModal
        isOpen={isHtmlExportOpen}
        onClose={() => setIsHtmlExportOpen(false)}
      />

    </div>
  );
}
