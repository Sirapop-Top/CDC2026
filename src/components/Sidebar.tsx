import React, { useMemo } from 'react';
import { 
  LayoutDashboard, 
  Brain, 
  TrendingUp, 
  GitMerge, 
  ShieldCheck, 
  Coins, 
  LineChart, 
  Menu,
  X,
  BookOpen
} from 'lucide-react';

interface SidebarProps {
  language: 'en' | 'th';
  currentView: string;
  setCurrentView: (view: string) => void;
  completedBooks: Record<string, boolean>;
  completedModules: Record<string, boolean>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  language,
  currentView,
  setCurrentView,
  completedBooks,
  completedModules
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Compute total books read to show in the sidebar progress bar
  const stats = useMemo(() => {
    const readCount = Object.values(completedBooks).filter(Boolean).length;
    const progress = (readCount / 10) * 100;
    return {
      readCount,
      progress
    };
  }, [completedBooks]);

  const menuItems = [
    {
      id: 'dashboard',
      label: { en: 'Executive Summary', th: 'แดชบอร์ดสรุป' },
      icon: LayoutDashboard,
      color: 'text-fin-blue hover:bg-fin-blue/10'
    },
    {
      id: 'm1',
      label: { en: 'M1: Awakening', th: 'M1: ปลุกความคิด' },
      icon: Brain,
      color: 'text-purple-400 hover:bg-purple-400/10'
    },
    {
      id: 'm2',
      label: { en: 'M2: Foundation', th: 'M2: รากฐานเทคนิค' },
      icon: TrendingUp,
      color: 'text-teal-400 hover:bg-teal-400/10'
    },
    {
      id: 'm3',
      label: { en: 'M3: Builder', th: 'M3: นักสร้างระบบ' },
      icon: GitMerge,
      color: 'text-orange-400 hover:bg-orange-400/10'
    },
    {
      id: 'm4',
      label: { en: 'M4: Manager', th: 'M4: การคุมความเสี่ยง' },
      icon: ShieldCheck,
      color: 'text-red-400 hover:bg-red-400/10'
    },
    {
      id: 'm5',
      label: { en: 'M5: Bitcoin & Markets', th: 'M5: บิตคอยน์ & แมคโคร' },
      icon: Coins,
      color: 'text-yellow-400 hover:bg-yellow-400/10'
    },
    {
      id: 'm6',
      label: { en: 'M6: Pro Tools', th: 'M6: เครื่องมือออมหุ้น' },
      icon: LineChart,
      color: 'text-fin-green hover:bg-fin-green/10'
    }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (id: string) => {
    setCurrentView(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-fin-green text-bg-darkest p-3 rounded-full shadow-lg border border-border-dark flex items-center justify-center cursor-pointer hover:bg-fin-green/90 transition-all active:scale-95"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          onClick={toggleSidebar}
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40
        w-72 bg-bg-dark border-r border-border-dark flex flex-col justify-between
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        transition-transform duration-300 ease-in-out h-screen overflow-y-auto
      `}>
        {/* Brand Header */}
        <div className="p-6 border-b border-border-dark">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fin-green to-fin-blue flex items-center justify-center font-bold text-bg-darkest shadow-md shadow-fin-green/10 font-mono text-lg">
              CDC
            </div>
            <div>
              <h2 className="text-md font-extrabold text-white tracking-wider font-mono">
                CHALOKE.COM
              </h2>
              <span className="text-[10px] font-mono text-fin-green tracking-widest uppercase">
                Systematic 2026
              </span>
            </div>
          </div>
        </div>

        {/* Live Study Status Card */}
        <div className="p-4 mx-4 mt-6 bg-[#08090c] border border-border-dark rounded-xl">
          <div className="flex items-center gap-2 mb-2 text-fin-gray text-xs font-mono">
            <BookOpen size={14} className="text-fin-green" />
            <span>{language === 'en' ? 'CURRICULUM READING' : 'การอ่านตำราหลักสูตร'}</span>
          </div>
          <div className="text-xl font-bold font-mono text-white leading-tight">
            {stats.readCount} / 10 <span className="text-xs text-[#8a99ad] font-normal">{language === 'en' ? 'read' : 'เล่ม'}</span>
          </div>
          <div className="w-full bg-border-dark h-2 rounded-full mt-3 overflow-hidden border border-[#202836]">
            <div 
              className="bg-fin-green h-full rounded-full transition-all duration-500 shadow-sm shadow-fin-green/50"
              style={{ width: `${stats.progress}%` }}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <div className="text-[10px] uppercase font-mono text-fin-gray px-3 mb-2 tracking-wider">
            {language === 'en' ? 'Study Curriculum' : 'หลักสูตรการศึกษา'}
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            // Check if module is completed (either manually or automatically)
            const isCompleted = item.id !== 'dashboard' && completedModules[item.id];
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium
                  transition-all duration-200 group cursor-pointer
                  ${isActive 
                    ? 'bg-bg-card border-l-4 border-fin-green text-white font-bold' 
                    : 'text-fin-gray hover:text-white hover:bg-bg-card/50'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon 
                    size={18} 
                    className={`
                      transition-transform duration-200 group-hover:scale-110
                      ${isActive ? 'text-fin-green' : 'text-fin-gray group-hover:text-white'}
                    `} 
                  />
                  <span className="tracking-tight text-left">
                    {item.label[language]}
                  </span>
                </div>
                {item.id !== 'dashboard' && isCompleted && (
                  <span className="w-2 h-2 rounded-full bg-fin-green glow-green" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer / Syllabus Version */}
        <div className="p-6 border-t border-border-dark bg-bg-darkest/40">
          <div className="text-[10px] font-mono text-fin-gray">
            <div className="flex justify-between mb-1">
              <span>{language === 'en' ? 'Syllabus Phase' : 'ระดับหลักสูตร'}:</span>
              <span className="text-white font-bold">PRE-STUDY</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>{language === 'en' ? 'Study Companion' : 'ตัวช่วยเหลือการเรียน'}:</span>
              <span className="text-fin-green font-bold">ACTIVE</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
