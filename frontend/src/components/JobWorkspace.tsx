import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  SlidersHorizontal, 
  ArrowUpRight, 
  CheckCircle, 
  Flame, 
  Briefcase, 
  Users, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Compass, 
  FileCheck2,
  ExternalLink
} from 'lucide-react';
import { JobPosting, MarketFocus, PlatformSource } from '../types';

interface JobWorkspaceProps {
  jobs: JobPosting[];
  selectedJobId: string;
  onSelectJob: (job: JobPosting) => void;
  marketFocus: MarketFocus;
}

export const JobWorkspace: React.FC<JobWorkspaceProps> = ({
  jobs,
  selectedJobId,
  onSelectJob,
  marketFocus
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<'All' | 'Germany' | 'Netherlands' | 'Belgium' | 'Luxembourg'>('All');
  const [selectedSourceFilter, setSelectedSourceFilter] = useState<'All' | PlatformSource>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>('job-de-001'); // default first expanded
  const [minMatchScore, setMinMatchScore] = useState<number>(0);

  // Filter jobs based on search, market weights, country, and source
  const filteredJobs = jobs.filter((job) => {
    // Search query
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    // Country filter
    const matchesCountry = selectedCountryFilter === 'All' || job.region === selectedCountryFilter;

    // Source filter
    const matchesSource = selectedSourceFilter === 'All' || job.source === selectedSourceFilter;

    // Match score
    const matchesMinScore = job.matchScore >= minMatchScore;

    return matchesSearch && matchesCountry && matchesSource && matchesMinScore;
  });

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const getSourceBadgeColor = (source: PlatformSource) => {
    switch (source) {
      case 'StepStone':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'BA':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'Make it in Germany':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'LinkedIn':
        return 'bg-sky-500/15 text-sky-300 border-sky-500/30';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <main className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-5 h-[calc(100vh-4rem)]">
      
      {/* Workspace Header & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              Job Intelligence &amp; Live Scraper Feed
            </h1>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time scraped vacancies matching ZAB credentials &amp; EU Blue Card specifications
          </p>
        </div>

        {/* Live Counter Badge */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2 font-mono">
            <span className="text-slate-400">Live Ingest:</span>
            <span className="text-emerald-400 font-bold">{filteredJobs.length} Positions</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">DE {marketFocus.germanyPercent}% / BNL {marketFocus.beneluxPercent}%</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-3.5 rounded-xl border border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by title, company, Frankfurt, Amsterdam, Kubernetes, Python..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all font-sans"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-700/80 overflow-x-auto">
            {(['All', 'Germany', 'Netherlands', 'Belgium', 'Luxembourg'] as const).map((region) => (
              <button
                key={region}
                onClick={() => setSelectedCountryFilter(region)}
                className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCountryFilter === region
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {region === 'All' ? '🌍 All Regions' : 
                 region === 'Germany' ? '🇩🇪 Germany' :
                 region === 'Netherlands' ? '🇳🇱 Netherlands' :
                 region === 'Belgium' ? '🇧🇪 Belgium' : '🇱🇺 Luxembourg'}
              </button>
            ))}
          </div>
        </div>

        {/* Source Pills & Match Threshold Slider */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-mono text-[11px] mr-1">SOURCE:</span>
            {(['All', 'StepStone', 'BA', 'Make it in Germany', 'LinkedIn'] as const).map((source) => (
              <button
                key={source}
                onClick={() => setSelectedSourceFilter(source)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  selectedSourceFilter === source
                    ? 'bg-slate-200 text-slate-900 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {source === 'BA' ? 'BA (Arbeitsagentur)' : source}
              </button>
            ))}
          </div>

          {/* Score Threshold */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-[11px] font-mono">Min Match: {minMatchScore}%</span>
            <input
              type="range"
              min="0"
              max="90"
              step="10"
              value={minMatchScore}
              onChange={(e) => setMinMatchScore(parseInt(e.target.value))}
              className="w-24 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Incoming Job Postings Card List */}
      <div className="space-y-3.5">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 rounded-xl border border-dashed border-slate-800 glass-panel">
            <Briefcase className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-sm text-slate-400 font-medium">No matching job postings found for current filters</p>
            <p className="text-xs text-slate-600 mt-1">Try resetting the search keyword or market focus distribution</p>
          </div>
        ) : (
          filteredJobs.map((job) => {
            const isSelected = selectedJobId === job.id;
            const isExpanded = expandedCardId === job.id;
            const isHighScore = job.matchScore >= 85;

            return (
              <div
                key={job.id}
                onClick={() => onSelectJob(job)}
                className={`rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'glass-panel-active ring-1 ring-emerald-500/40'
                    : 'glass-panel hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                {/* Main Card Header & Summary Bar */}
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    
                    {/* Left: Company Logo Badge + Title + Location */}
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl ${job.companyLogoBg} flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0 border border-white/10`}
                      >
                        {job.companyLogoText}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-base font-bold text-white hover:text-emerald-300 transition-colors tracking-tight">
                            {job.title}
                          </h2>
                          {job.isNew && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                              NEW POSTING
                            </span>
                          )}
                        </div>

                        {/* Company Name, Location/City, Platform Source */}
                        <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-300 flex-wrap">
                          <span className="font-semibold text-slate-200 flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-slate-400" />
                            {job.company}
                          </span>

                          <span className="flex items-center gap-1 text-slate-300 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-rose-400" />
                            <span>{job.flag} {job.city}, {job.country}</span>
                          </span>

                          <span className="text-slate-500">•</span>

                          {/* Source Platform Badge */}
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-medium border ${getSourceBadgeColor(
                              job.source
                            )}`}
                          >
                            {job.source}
                          </span>

                          <span className="text-slate-500">•</span>

                          <span className="text-slate-400 font-mono text-[11px]">
                            {job.postedTimeAgo}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Match Score + Real-time Badge */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono font-bold text-sm ${
                            isHighScore
                              ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                              : 'bg-rose-500/15 text-rose-400 border-rose-500/40'
                          }`}
                        >
                          <Flame className={`w-4 h-4 ${isHighScore ? 'text-emerald-400' : 'text-rose-400'}`} />
                          <span>{job.matchScore}% Match</span>
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-slate-400">
                        {job.salaryRange}
                      </div>
                    </div>
                  </div>

                  {/* Middle Snippet & Tech Stack */}
                  <p className="text-xs text-slate-300 mt-3 line-clamp-2 leading-relaxed">
                    {job.jobDescriptionSnippet}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {job.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] font-mono">
                        {job.workMode}
                      </span>
                    </div>

                    {/* Deep-Dive Expand Button */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => toggleExpand(job.id, e)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/90 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700/80 transition-colors"
                      >
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Recruiter &amp; Entity Intelligence</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectJob(job);
                        }}
                        className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                          isSelected
                            ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                            : 'bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                        }`}
                      >
                        <span>{isSelected ? 'Loaded in AI Studio' : 'Load Cover Letter'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Deep-Dive Section: Structured Metadata of Recipient Company */}
                {isExpanded && (
                  <div 
                    className="bg-slate-950/80 border-t border-slate-800 p-4 sm:p-5 space-y-4 animate-in slide-in-from-top-2 duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileCheck2 className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          Structured Recruiter &amp; Company Metadata
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        DIN 5008 Addressee Ready
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      {/* Recruiter / Hiring Team Details */}
                      <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          Recruiter / Decision Maker
                        </div>
                        <div className="text-sm font-bold text-white">
                          {job.recruiter.name}
                        </div>
                        <div className="text-slate-300 font-medium text-xs">
                          {job.recruiter.title}
                        </div>
                        <div className="text-slate-400 text-[11px]">
                          Department: {job.recruiter.department}
                        </div>
                        
                        <div className="pt-2 flex flex-col gap-1 border-t border-slate-800 text-[11px] font-mono">
                          {job.recruiter.email && (
                            <span className="flex items-center gap-1.5 text-slate-300">
                              <Mail className="w-3 h-3 text-emerald-400" />
                              {job.recruiter.email}
                            </span>
                          )}
                          {job.recruiter.phone && (
                            <span className="flex items-center gap-1.5 text-slate-400">
                              <Phone className="w-3 h-3 text-slate-400" />
                              {job.recruiter.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Recipient Legal Entity & Location */}
                      <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          Formal Legal Entity &amp; Postal Address
                        </div>
                        <div className="text-sm font-bold text-slate-200">
                          {job.company}
                        </div>
                        <div className="text-slate-300 text-xs font-mono bg-slate-950 p-2 rounded border border-slate-800 leading-relaxed">
                          {job.recruiter.postalAddress}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Target Jurisdiction: <span className="text-emerald-400 font-semibold">{job.country} ({job.city})</span>
                        </div>
                      </div>
                    </div>

                    {/* Hiring Tone & Visa Support */}
                    <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px] block">Contact Context &amp; Tone:</span>
                        <span className="text-slate-200 font-medium">
                          {job.recruiter.directContactNotes}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px] block">Visa / Blue Card Pre-Verification:</span>
                        <span className="text-emerald-400 font-medium">
                          {job.visaSupport}
                        </span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </main>
  );
};
