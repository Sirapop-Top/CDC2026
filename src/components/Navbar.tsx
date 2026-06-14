import React from 'react';
import { content } from '../data/content';

interface NavbarProps {
  language: 'en' | 'th';
  setLanguage: (lang: 'en' | 'th') => void;
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, currentView, setCurrentView }) => {
  const getHeaderTitle = () => {
    if (currentView === 'dashboard') {
      return content.dashboard.welcomeTitle[language];
    }
    const match = currentView.match(/^m(\d)$/);
    if (match) {
      const idx = parseInt(match[1]) as 1 | 2 | 3 | 4 | 5 | 6;
      return content[`m${idx}`].title[language];
    }
    return content.meta.title[language];
  };

  return (
    <header className="border-b border-border-dark bg-bg-dark/85 backdrop-blur-md px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sticky top-0 z-50">
      {/* Title & View context */}
      <div className="cursor-pointer" onClick={() => setCurrentView('dashboard')}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-fin-green animate-pulse glow-green"></span>
          <span className="text-xs uppercase tracking-wider font-mono text-fin-gray">
            CDC 2026 pre-study system v1.0
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-1">
          {getHeaderTitle()}
        </h1>
      </div>

      {/* Action Bars (Language & Profile) */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-end">
        {/* Bilingual Toggle Button */}
        <div className="flex items-center gap-2 bg-bg-card border border-border-dark p-1 rounded-lg">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all duration-300 flex items-center gap-1.5 ${
              language === 'en'
                ? 'bg-fin-green text-bg-darkest shadow-md font-bold'
                : 'text-fin-gray hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('th')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all duration-300 flex items-center gap-1.5 ${
              language === 'th'
                ? 'bg-fin-green text-bg-darkest shadow-md font-bold'
                : 'text-fin-gray hover:text-white'
            }`}
          >
            TH
          </button>
        </div>

        {/* Mock user badge */}
        <div className="hidden sm:flex items-center gap-3 border-l border-border-dark pl-4">
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold text-white">Guest Student</span>
            <span className="text-[10px] font-mono text-fin-green">PRE-STUDY ACTIVE</span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-bg-card border border-border-dark flex items-center justify-center text-fin-green font-bold font-mono">
            CDC
          </div>
        </div>
      </div>
    </header>
  );
};
