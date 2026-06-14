import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Module1 } from './components/Module1';
import { Module2 } from './components/Module2';
import { Module3 } from './components/Module3';
import { Module4 } from './components/Module4';
import { Module5 } from './components/Module5';
import { Module6 } from './components/Module6';

function App() {
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  const [currentView, setCurrentView] = useState<string>('dashboard');

  // Book reading completion tracker
  const [completedBooks, setCompletedBooks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('cdc_completed_books');
      return saved ? JSON.parse(saved) : {
        housel: false,
        douglas: false,
        murphy: false,
        frost: false,
        tharp: false,
        pinescript: false,
        sizer: false,
        hull: false,
        bernstein: false,
        penfold: false
      };
    } catch {
      return {
        housel: false, douglas: false, murphy: false, frost: false, tharp: false,
        pinescript: false, sizer: false, hull: false, bernstein: false, penfold: false
      };
    }
  });

  // Module tasks completion tracker
  const [completedModules, setCompletedModules] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('cdc_completed_modules');
      return saved ? JSON.parse(saved) : {
        m1: false, m2: false, m3: false, m4: false, m5: false, m6: false
      };
    } catch {
      return { m1: false, m2: false, m3: false, m4: false, m5: false, m6: false };
    }
  });

  const toggleBookRead = (id: string) => {
    setCompletedBooks(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('cdc_completed_books', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const setModuleCompleted = (id: string, value: boolean) => {
    setCompletedModules(prev => {
      if (prev[id] === value) return prev;
      const updated = { ...prev, [id]: value };
      try {
        localStorage.setItem('cdc_completed_modules', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const resetAllProgress = () => {
    const blankBooks = {
      housel: false, douglas: false, murphy: false, frost: false, tharp: false,
      pinescript: false, sizer: false, hull: false, bernstein: false, penfold: false
    };
    const blankModules = { m1: false, m2: false, m3: false, m4: false, m5: false, m6: false };
    setCompletedBooks(blankBooks);
    setCompletedModules(blankModules);
    try {
      localStorage.setItem('cdc_completed_books', JSON.stringify(blankBooks));
      localStorage.setItem('cdc_completed_modules', JSON.stringify(blankModules));
      localStorage.removeItem('cdc_viewed_patterns');
    } catch (e) {
      console.error(e);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard
            language={language}
            setCurrentView={setCurrentView}
            completedBooks={completedBooks}
            completedModules={completedModules}
            onToggleBook={toggleBookRead}
            onResetAll={resetAllProgress}
          />
        );
      case 'm1':
        return (
          <Module1
            language={language}
            onComplete={(completed) => setModuleCompleted('m1', completed)}
            isCompleted={completedModules.m1}
            completedBooks={completedBooks}
            onToggleBook={toggleBookRead}
          />
        );
      case 'm2':
        return (
          <Module2
            language={language}
            onComplete={(completed) => setModuleCompleted('m2', completed)}
            isCompleted={completedModules.m2}
            completedBooks={completedBooks}
            onToggleBook={toggleBookRead}
          />
        );
      case 'm3':
        return (
          <Module3
            language={language}
            onComplete={(completed) => setModuleCompleted('m3', completed)}
            isCompleted={completedModules.m3}
            completedBooks={completedBooks}
            onToggleBook={toggleBookRead}
          />
        );
      case 'm4':
        return (
          <Module4
            language={language}
            onComplete={(completed) => setModuleCompleted('m4', completed)}
            isCompleted={completedModules.m4}
            completedBooks={completedBooks}
            onToggleBook={toggleBookRead}
          />
        );
      case 'm5':
        return (
          <Module5
            language={language}
            onComplete={(completed) => setModuleCompleted('m5', completed)}
            isCompleted={completedModules.m5}
            completedBooks={completedBooks}
            onToggleBook={toggleBookRead}
          />
        );
      case 'm6':
        return (
          <Module6
            language={language}
            onComplete={(completed) => setModuleCompleted('m6', completed)}
            isCompleted={completedModules.m6}
            completedBooks={completedBooks}
            onToggleBook={toggleBookRead}
          />
        );
      default:
        return (
          <Dashboard
            language={language}
            setCurrentView={setCurrentView}
            completedBooks={completedBooks}
            completedModules={completedModules}
            onToggleBook={toggleBookRead}
            onResetAll={resetAllProgress}
          />
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-bg-darkest">
      <Sidebar
        language={language}
        currentView={currentView}
        setCurrentView={setCurrentView}
        completedBooks={completedBooks}
        completedModules={completedModules}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          language={language}
          setLanguage={setLanguage}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
