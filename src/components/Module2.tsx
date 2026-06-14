import React, { useState } from 'react';
import { TrendingUp, BookOpen, CheckCircle, Circle, Award, BarChart3, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { content, referenceBooks, patternData } from '../data/content';

interface Module2Props {
  language: 'en' | 'th';
  onComplete: (completed: boolean) => void;
  isCompleted: boolean;
  completedBooks: Record<string, boolean>;
  onToggleBook: (id: string) => void;
}

export const Module2: React.FC<Module2Props> = ({
  language,
  onComplete,
  isCompleted,
  completedBooks,
  onToggleBook,
}) => {
  const m2Content = content.m2;

  // Filter book resources for this module
  const m2Books = referenceBooks.filter((b) => b.module === 'm2');

  // Interactive pattern selection state
  const [expandedPatternId, setExpandedPatternId] = useState<string | null>(null);
  const [viewedPatterns, setViewedPatterns] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cdc_viewed_patterns');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handlePatternClick = (id: string) => {
    setExpandedPatternId((prev) => (prev === id ? null : id));
    if (!viewedPatterns.includes(id)) {
      const updated = [...viewedPatterns, id];
      setViewedPatterns(updated);
      try {
        localStorage.setItem('cdc_viewed_patterns', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      
      // If all patterns are viewed, auto-complete
      if (updated.length === patternData.length) {
        onComplete(true);
      }
    }
  };

  const resetPatternProgress = () => {
    setViewedPatterns([]);
    setExpandedPatternId(null);
    try {
      localStorage.removeItem('cdc_viewed_patterns');
    } catch (e) {
      console.error(e);
    }
    onComplete(false);
  };

  // SVGs for the technical patterns
  const renderPatternSvg = (id: string) => {
    const strokeWidth = 2.5;
    const gridDef = (patternId: string) => (
      <defs>
        <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
      </defs>
    );
    switch (id) {
      case 'hs': // Head & Shoulders
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-hs')}
            <rect width="100%" height="100%" fill="url(#grid-hs)" />
            {/* Neckline */}
            <line x1="50" y1="100" x2="250" y2="100" stroke="#ff3d00" strokeWidth="2" strokeDasharray="4" />
            <text x="218" y="93" fill="#ff3d00" fontSize="9" fontFamily="monospace" fontWeight="bold">NECKLINE</text>
            {/* Price Line */}
            <path d="M 30 115 L 70 80 L 100 100 L 150 40 L 190 100 L 220 80 L 260 125" fill="none" stroke="#26a69a" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Labels */}
            <circle cx="70" cy="80" r="4" fill="#ab47bc" />
            <text x="60" y="72" fill="#ab47bc" fontSize="9" fontFamily="monospace" fontWeight="bold">LS</text>
            <circle cx="150" cy="40" r="4" fill="#ab47bc" />
            <text x="138" y="32" fill="#ab47bc" fontSize="9" fontFamily="monospace" fontWeight="bold">HEAD</text>
            <circle cx="220" cy="80" r="4" fill="#ab47bc" />
            <text x="210" y="72" fill="#ab47bc" fontSize="9" fontFamily="monospace" fontWeight="bold">RS</text>
            {/* Breakdown Indicator */}
            <circle cx="235" cy="110" r="4" fill="#ff3d00" />
            <path d="M 235 114 L 235 130" stroke="#ff3d00" strokeWidth="2" />
            <text x="155" y="130" fill="#ff3d00" fontSize="9" fontFamily="monospace" fontWeight="bold">BREAKDOWN ↓</text>
          </svg>
        );
      case 'db': // Double Bottom
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-db')}
            <rect width="100%" height="100%" fill="url(#grid-db)" />
            {/* Neckline/Resistance */}
            <line x1="50" y1="65" x2="250" y2="65" stroke="#ffca28" strokeWidth="2" strokeDasharray="4" />
            <text x="198" y="57" fill="#ffca28" fontSize="9" fontFamily="monospace" fontWeight="bold">NECKLINE</text>
            {/* Price Line */}
            <path d="M 40 40 L 90 115 L 145 65 L 200 115 L 255 45" fill="none" stroke="#2979ff" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Bottom 1 and Bottom 2 */}
            <circle cx="90" cy="115" r="4" fill="#00e676" />
            <text x="68" y="132" fill="#00e676" fontSize="8" fontFamily="monospace" fontWeight="bold">BOTTOM 1</text>
            <circle cx="200" cy="115" r="4" fill="#00e676" />
            <text x="178" y="132" fill="#00e676" fontSize="8" fontFamily="monospace" fontWeight="bold">BOTTOM 2</text>
            {/* Neckline peak */}
            <circle cx="145" cy="65" r="4" fill="#ffca28" />
            {/* Breakout Arrow */}
            <text x="240" y="36" fill="#00e676" fontSize="9" fontFamily="monospace" fontWeight="bold">↑ BREAK</text>
          </svg>
        );
      case 'impulse': // 5-Wave Impulse
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-imp')}
            <rect width="100%" height="100%" fill="url(#grid-imp)" />
            {/* Wave Lines */}
            <path d="M 30 130 L 70 85 L 100 110 L 180 40 L 210 75 L 270 25" fill="none" stroke="#00e676" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Wave Number Labels */}
            <text x="73" y="80" fill="#00e676" fontSize="11" fontFamily="monospace" fontWeight="bold">①</text>
            <text x="97" y="125" fill="#8a99ad" fontSize="11" fontFamily="monospace" fontWeight="bold">②</text>
            <text x="156" y="35" fill="#00e676" fontSize="11" fontFamily="monospace" fontWeight="bold">③(Max)</text>
            <text x="210" y="92" fill="#8a99ad" fontSize="11" fontFamily="monospace" fontWeight="bold">④</text>
            <text x="260" y="20" fill="#00e676" fontSize="11" fontFamily="monospace" fontWeight="bold">⑤</text>
            {/* No Overlap Rule Line */}
            <line x1="70" y1="85" x2="210" y2="85" stroke="#ff3d00" strokeWidth="1" strokeDasharray="3" />
            <text x="100" y="81" fill="#ff3d00" fontSize="8" fontFamily="monospace">W4 no-overlap zone</text>
          </svg>
        );
      case 'correction': // ABC Correction
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-cor')}
            <rect width="100%" height="100%" fill="url(#grid-cor)" />
            {/* Wave Lines */}
            <path d="M 40 30 L 110 105 L 180 60 L 250 135" fill="none" stroke="#ff3d00" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Labels */}
            <text x="112" y="118" fill="#ff3d00" fontSize="12" fontFamily="monospace" fontWeight="bold">A</text>
            <text x="182" y="50" fill="#8a99ad" fontSize="12" fontFamily="monospace" fontWeight="bold">B</text>
            <text x="252" y="148" fill="#ff3d00" fontSize="12" fontFamily="monospace" fontWeight="bold">C</text>
            {/* Wave A Low */}
            <line x1="110" y1="105" x2="250" y2="105" stroke="#8a99ad" strokeWidth="1" strokeDasharray="2" />
            <text x="118" y="101" fill="#8a99ad" fontSize="8" fontFamily="monospace">Wave A Low</text>
            {/* Entry zone highlight */}
            <circle cx="250" cy="135" r="5" fill="#00e676" fillOpacity="0.3" stroke="#00e676" strokeWidth="1.5" />
            <text x="238" y="148" fill="#00e676" fontSize="8" fontFamily="monospace">BUY</text>
          </svg>
        );
      case 'dt': // Double Top
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-dt')}
            <rect width="100%" height="100%" fill="url(#grid-dt)" />
            {/* Neckline/Support */}
            <line x1="50" y1="85" x2="250" y2="85" stroke="#ff3d00" strokeWidth="2" strokeDasharray="4" />
            <text x="198" y="77" fill="#ff3d00" fontSize="9" fontFamily="monospace" fontWeight="bold">NECKLINE</text>
            {/* Price Line */}
            <path d="M 40 110 L 90 35 L 145 85 L 200 35 L 255 115" fill="none" stroke="#26a69a" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Peak 1 and Peak 2 */}
            <circle cx="90" cy="35" r="4" fill="#ff3d00" />
            <text x="70" y="27" fill="#ff3d00" fontSize="8" fontFamily="monospace" fontWeight="bold">PEAK 1</text>
            <circle cx="200" cy="35" r="4" fill="#ff3d00" />
            <text x="180" y="27" fill="#ff3d00" fontSize="8" fontFamily="monospace" fontWeight="bold">PEAK 2</text>
            {/* Neckline trough */}
            <circle cx="145" cy="85" r="4" fill="#ffca28" />
            {/* Breakdown Arrow */}
            <text x="240" y="130" fill="#ff3d00" fontSize="9" fontFamily="monospace" fontWeight="bold">BREAKDOWN ↓</text>
          </svg>
        );
      case 'ihs': // Inverse Head & Shoulders
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-ihs')}
            <rect width="100%" height="100%" fill="url(#grid-ihs)" />
            {/* Neckline */}
            <line x1="50" y1="50" x2="250" y2="50" stroke="#00e676" strokeWidth="2" strokeDasharray="4" />
            <text x="218" y="43" fill="#00e676" fontSize="9" fontFamily="monospace" fontWeight="bold">NECKLINE</text>
            {/* Price Line */}
            <path d="M 30 35 L 70 70 L 100 50 L 150 110 L 190 50 L 220 70 L 260 25" fill="none" stroke="#2979ff" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Labels */}
            <circle cx="70" cy="70" r="4" fill="#ab47bc" />
            <text x="60" y="82" fill="#ab47bc" fontSize="9" fontFamily="monospace" fontWeight="bold">ILS</text>
            <circle cx="150" cy="110" r="4" fill="#ab47bc" />
            <text x="138" y="122" fill="#ab47bc" fontSize="9" fontFamily="monospace" fontWeight="bold">HEAD</text>
            <circle cx="220" cy="70" r="4" fill="#ab47bc" />
            <text x="210" y="82" fill="#ab47bc" fontSize="9" fontFamily="monospace" fontWeight="bold">IRS</text>
            {/* Breakout Indicator */}
            <circle cx="238" cy="40" r="4" fill="#00e676" />
            <path d="M 238 40 L 238 25" stroke="#00e676" strokeWidth="2" />
            <text x="235" y="20" fill="#00e676" fontSize="9" fontFamily="monospace" fontWeight="bold">↑ BREAKOUT</text>
          </svg>
        );
      case 'bf': // Bull Flag
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-bf')}
            <rect width="100%" height="100%" fill="url(#grid-bf)" />
            {/* Flagpole */}
            <path d="M 50 130 L 100 40" fill="none" stroke="#00e676" strokeWidth={strokeWidth} strokeLinecap="round" />
            {/* Flag boundaries */}
            <line x1="100" y1="40" x2="180" y2="70" stroke="#ffca28" strokeWidth="1.5" strokeDasharray="3" />
            <line x1="90" y1="60" x2="170" y2="90" stroke="#ffca28" strokeWidth="1.5" strokeDasharray="3" />
            {/* Price Line inside channel */}
            <path d="M 100 40 L 120 70 L 140 50 L 160 80 L 180 62 L 220 30" fill="none" stroke="#26a69a" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            {/* Labels */}
            <text x="40" y="90" fill="#00e676" fontSize="8" fontFamily="monospace" fontWeight="bold">POLE</text>
            <text x="130" y="32" fill="#ffca28" fontSize="8" fontFamily="monospace" fontWeight="bold">FLAG</text>
            {/* Breakout Arrow */}
            <text x="210" y="22" fill="#00e676" fontSize="9" fontFamily="monospace" fontWeight="bold">↑ BREAK</text>
          </svg>
        );
      case 'at': // Ascending Triangle
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-at')}
            <rect width="100%" height="100%" fill="url(#grid-at)" />
            {/* Boundaries */}
            <line x1="50" y1="50" x2="230" y2="50" stroke="#ffca28" strokeWidth="2" />
            <line x1="50" y1="120" x2="230" y2="50" stroke="#2979ff" strokeWidth="2" />
            {/* Price Path */}
            <path d="M 50 115 L 80 50 L 115 95 L 150 50 L 180 75 L 210 50 L 245 35" fill="none" stroke="#00e676" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <text x="90" y="42" fill="#ffca28" fontSize="8" fontFamily="monospace" fontWeight="bold">RESISTANCE</text>
            <text x="60" y="112" fill="#2979ff" fontSize="8" fontFamily="monospace" fontWeight="bold">SUPPORT</text>
            <text x="238" y="27" fill="#00e676" fontSize="9" fontFamily="monospace" fontWeight="bold">↑ BREAKOUT</text>
          </svg>
        );
      case 'rw': // Rising Wedge
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-rw')}
            <rect width="100%" height="100%" fill="url(#grid-rw)" />
            {/* Converging boundary lines */}
            <line x1="50" y1="90" x2="220" y2="30" stroke="#ffca28" strokeWidth="1.5" />
            <line x1="50" y1="120" x2="220" y2="50" stroke="#ffca28" strokeWidth="1.5" />
            {/* Price Path */}
            <path d="M 55 115 L 90 73 L 125 93 L 160 51 L 190 71 L 220 48 L 245 105" fill="none" stroke="#ff3d00" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <text x="100" y="115" fill="#ffca28" fontSize="8" fontFamily="monospace">Rising Wedge</text>
            <text x="215" y="120" fill="#ff3d00" fontSize="9" fontFamily="monospace" fontWeight="bold">BREAKDOWN ↓</text>
          </svg>
        );
      case 'fw': // Falling Wedge
        return (
          <svg className="w-full h-40 bg-[#08090c] rounded-xl border border-[#202836]" viewBox="0 0 300 150">
            {gridDef('grid-fw')}
            <rect width="100%" height="100%" fill="url(#grid-fw)" />
            {/* Converging boundary lines */}
            <line x1="50" y1="40" x2="220" y2="90" stroke="#ffca28" strokeWidth="1.5" />
            <line x1="50" y1="100" x2="220" y2="105" stroke="#ffca28" strokeWidth="1.5" />
            {/* Price Path */}
            <path d="M 55 45 L 90 92 L 125 65 L 160 96 L 190 80 L 220 100 L 250 55" fill="none" stroke="#00e676" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <text x="100" y="45" fill="#ffca28" fontSize="8" fontFamily="monospace">Falling Wedge</text>
            <text x="238" y="45" fill="#00e676" fontSize="9" fontFamily="monospace" fontWeight="bold">↑ BREAKOUT</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 text-white pb-12">
      {/* ─── MODULE HEADER ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400">MODULE 02</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            {m2Content.title[language]}
          </h1>
          <p className="text-fin-gray text-sm md:text-base max-w-3xl leading-relaxed">
            {m2Content.subtitle[language]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ─── LEFT: READINGS & SYLLABUS TEXT (2 COLS) ─── */}
        <div className="lg:col-span-2 space-y-8">
          {/* REFERENCE BOOKS */}
          <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
            <h2 className="text-md font-bold font-mono text-white mb-4 flex items-center gap-2 border-b border-[#202836] pb-3">
              <BookOpen className="w-5 h-5 text-teal-400" />
              {language === 'en' ? 'MODULE MATERIALS' : 'เอกสารและหนังสือประจำบทเรียน'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {m2Books.map((book) => {
                const isRead = !!completedBooks[book.id];
                return (
                  <div
                    key={book.id}
                    className={`border rounded-xl bg-[#0e1117] transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                      isRead ? 'border-[#00e676]/40 shadow-sm shadow-[#00e676]/5' : 'border-[#202836]'
                    }`}
                  >
                    <div className="p-5 flex-1 space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="text-[10px] font-mono text-teal-400 font-bold block mb-1">
                            {book.author}
                          </span>
                          <h3 className="text-sm font-bold text-white font-mono leading-tight">{book.title}</h3>
                        </div>
                        <button
                          onClick={() => onToggleBook(book.id)}
                          className="shrink-0 p-1 hover:bg-[#151a22] rounded-lg transition-colors cursor-pointer"
                          title={language === 'en' ? 'Toggle Read' : 'สลับสถานะอ่านแล้ว'}
                        >
                          {isRead ? (
                            <CheckCircle size={22} className="text-fin-green fill-fin-green/10" />
                          ) : (
                            <Circle size={22} className="text-fin-gray/40 hover:text-white" />
                          )}
                        </button>
                      </div>
                      <p className="text-fin-gray text-xs leading-relaxed italic">
                        "{book.summary[language]}"
                      </p>
                    </div>

                    <div className="px-5 py-3.5 bg-[#151a22]/30 border-t border-[#202836]/60 text-xs">
                      <p className="font-bold text-[#ffca28] font-mono uppercase tracking-wider text-[10px] mb-2">
                        {language === 'en' ? 'Key Insights' : 'ข้อคิดหลัก'}
                      </p>
                      <ul className="space-y-1.5 list-disc pl-4 text-gray-300">
                        {book.keyPoints[language].map((pt, index) => (
                          <li key={index}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CURRICULUM TEXT SUMMARY */}
          <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 space-y-4">
            <h2 className="text-md font-bold font-mono text-white mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" />
              {language === 'en' ? 'Technical Principles Summary' : 'สรุปทฤษฎีเทคนิคหลัก'}
            </h2>
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{m2Content.p1[language]}</p>
              <p>{m2Content.p2[language]}</p>
              <p>{m2Content.p3[language]}</p>
            </div>
          </section>
        </div>

        {/* ─── RIGHT: INTERACTIVE SVG PATTERN GALLERY (1 COL) ─── */}
        <div>
          <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-md font-bold font-mono text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-teal-400" />
                  {m2Content.patternGalleryTitle[language]}
                </h2>
                <span className="text-[10px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/25 px-2 py-0.5 rounded">
                  {viewedPatterns.length} / {patternData.length}
                </span>
              </div>
              <p className="text-fin-gray text-xs mb-6 leading-relaxed">
                {m2Content.patternGalleryDesc[language]}
              </p>

              <div className="space-y-4">
                {patternData.map((pattern) => {
                  const isExpanded = expandedPatternId === pattern.id;
                  const isViewed = viewedPatterns.includes(pattern.id);

                  return (
                    <div
                      key={pattern.id}
                      className={`border rounded-xl bg-[#0e1117] transition-all overflow-hidden ${
                        isExpanded ? 'border-teal-500/50' : 'border-[#202836] hover:border-[#8a99ad]/20'
                      }`}
                    >
                      {/* Pattern Card Header Header */}
                      <button
                        onClick={() => handlePatternClick(pattern.id)}
                        className="w-full text-left p-4 flex justify-between items-center bg-[#0e1117] cursor-pointer hover:bg-[#151a22]/30 transition-colors"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider">
                            {isViewed ? '✓ VIEWED' : '• UNREAD'}
                          </span>
                          <h3 className="text-xs font-bold text-white font-mono leading-tight">
                            {pattern.name[language]}
                          </h3>
                        </div>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {/* Expanded SVG and rules */}
                      {isExpanded && (
                        <div className="p-4 border-t border-[#202836]/60 bg-[#151a22]/45 space-y-4">
                          {renderPatternSvg(pattern.id)}
                          
                          <p className="text-xs text-fin-gray leading-relaxed">
                            {pattern.desc[language]}
                          </p>

                          <div className="space-y-3 border-t border-[#202836]/40 pt-3">
                            <div>
                              <p className="text-[10px] font-mono text-[#ffca28] uppercase tracking-wider font-bold mb-1">
                                {m2Content.validationRules[language]}
                              </p>
                              <ul className="space-y-1 text-xs text-gray-300">
                                {pattern.validation.map((v, i) => (
                                  <li key={i} className="flex gap-1.5 items-start">
                                    <Check size={12} className="text-fin-green shrink-0 mt-0.5" />
                                    <span>{v[language]}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="text-[10px] font-mono text-[#ff3d00] uppercase tracking-wider font-bold mb-1">
                                {m2Content.invalidationRules[language]}
                              </p>
                              <ul className="space-y-1 text-xs text-gray-300">
                                {pattern.invalidation.map((v, i) => (
                                  <li key={i} className="flex gap-1.5 items-start">
                                    <X size={12} className="text-[#ff3d00] shrink-0 mt-0.5" />
                                    <span>{v[language]}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {viewedPatterns.length > 0 && (
                <button
                  onClick={resetPatternProgress}
                  className="w-full bg-[#202836] hover:bg-[#2d3748] text-white font-mono py-2 px-4 rounded-xl transition cursor-pointer text-xs flex items-center justify-center gap-1.5 mt-6"
                >
                  <span>{language === 'en' ? 'RESET VIEW PROGRESS' : 'รีเซ็ตสถานะการเข้าดู'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── COMPLETION STATUS BANNER ─── */}
      {isCompleted && (
        <div className="border border-teal-500/30 bg-teal-500/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                {language === 'en' ? 'MODULE 02 COMPLETION CONFIRMED' : 'ยืนยันการเรียนรู้โมดูล 02 สำเร็จ'}
              </h3>
              <p className="text-xs text-fin-gray">
                {language === 'en'
                  ? 'All core technical structures and invalidation rules have been viewed. You are ready to model expectancy.'
                  : 'ทบทวนรูปแบบกราฟและกฎเกณฑ์ครบถ้วนแล้ว คุณพร้อมที่จะวิเคราะห์ค่าคาดหวังในโมดูลถัดไป'}
              </p>
            </div>
          </div>
          <button
            onClick={resetPatternProgress}
            className="text-xs font-mono text-teal-400 hover:text-teal-300 underline bg-transparent border-0 cursor-pointer"
          >
            {language === 'en' ? 'RESET MODULE PROGRESS' : 'รีเซ็ตความคืบหน้าโมดูลนี้'}
          </button>
        </div>
      )}
    </div>
  );
};
