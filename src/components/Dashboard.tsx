import React, { useMemo, useState } from 'react';
import {
  Brain,
  TrendingUp,
  GitMerge,
  ShieldCheck,
  Coins,
  LineChart,
  CheckCircle,
  Circle,
  Quote,
  BookOpen,
  Sparkles,
  BarChart3,
  Library,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { content, referenceBooks } from '../data/content';

interface DashboardProps {
  language: 'en' | 'th';
  setCurrentView: (view: string) => void;
  completedBooks: Record<string, boolean>;
  completedModules: Record<string, boolean>;
  onToggleBook: (id: string) => void;
  onResetAll: () => void;
}

const moduleColors: Record<string, string> = {
  m1: '#ab47bc', // Purple
  m2: '#26a69a', // Teal
  m3: '#ffa726', // Orange
  m4: '#ef5350', // Red
  m5: '#ffca28', // Amber
  m6: '#66bb6a', // Green
};

const moduleIcons: Record<string, React.ReactNode> = {
  m1: <Brain className="w-5 h-5" />,
  m2: <TrendingUp className="w-5 h-5" />,
  m3: <GitMerge className="w-5 h-5" />,
  m4: <ShieldCheck className="w-5 h-5" />,
  m5: <Coins className="w-5 h-5" />,
  m6: <LineChart className="w-5 h-5" />,
};

const moduleInfo: Record<string, { en: string; th: string }> = {
  m1: { en: 'M1: Awakening', th: 'M1: ปลุกความคิด' },
  m2: { en: 'M2: Foundation', th: 'M2: รากฐานเทคนิค' },
  m3: { en: 'M3: Builder', th: 'M3: นักสร้างระบบ' },
  m4: { en: 'M4: Manager', th: 'M4: การคุมความเสี่ยง' },
  m5: { en: 'M5: Bitcoin & Markets', th: 'M5: บิตคอยน์ & อนุพันธ์' },
  m6: { en: 'M6: Pro Tools', th: 'M6: เครื่องมือสะสมทุน' },
};

const moduleDetails: Record<string, { books: number; feature: { en: string; th: string } }> = {
  m1: { books: 2, feature: { en: 'Psychology Quiz', th: 'แบบทดสอบจิตวิทยา' } },
  m2: { books: 2, feature: { en: 'Chart Pattern Gallery', th: 'คลังแสดงรูปแบบกราฟ' } },
  m3: { books: 2, feature: { en: 'Expectancy Simulator', th: 'ตัวจำลองค่าคาดหวัง' } },
  m4: { books: 1, feature: { en: 'Position Sizer Calculator', th: 'เครื่องคำนวณขนาดไม้' } },
  m5: { books: 1, feature: { en: 'BTC/Satoshi Converter', th: 'แปลงหน่วยบิตคอยน์' } },
  m6: { books: 2, feature: { en: 'SIP Compounding Chart', th: 'กราฟดอกเบี้ยทบต้น' } },
};

const wisdomQuotes = [
  {
    en: "The goal of a successful trader is to make the best trades. Money is secondary.",
    th: "เป้าหมายของนักเทรดที่ประสบความสำเร็จคือการเทรดให้ดีที่สุด เรื่องเงินเป็นเพียงผลพลอยได้",
    author: "Alexander Elder",
  },
  {
    en: "In trading, the money goes to the disciplined.",
    th: "ในโลกของการเทรด เงินจะไหลจากคนใจร้อนไปหาคนที่มีวินัยเสมอ",
    author: "Mark Douglas",
  },
  {
    en: "Risk comes from not knowing what you are doing.",
    th: "ความเสี่ยงเกิดขึ้นจากการที่คุณไม่เข้าใจในสิ่งที่คุณกำลังทำอย่างแท้จริง",
    author: "Warren Buffett",
  },
  {
    en: "The key to trading success is emotional discipline.",
    th: "กุญแจสำคัญสู่ความสำเร็จในการเทรดคือการควบคุมอารมณ์และจิตใจให้มีวินัย",
    author: "Victor Sperandeo",
  },
];

export const Dashboard: React.FC<DashboardProps> = ({
  language,
  setCurrentView,
  completedBooks,
  completedModules,
  onToggleBook,
  onResetAll,
}) => {
  const [expandedBookId, setExpandedBookId] = useState<string | null>(null);

  const booksReadCount = useMemo(
    () => Object.values(completedBooks).filter(Boolean).length,
    [completedBooks]
  );

  const modulesCompletedCount = useMemo(
    () => Object.values(completedModules).filter(Boolean).length,
    [completedModules]
  );

  const overallProgress = useMemo(
    () => Math.round(((booksReadCount + modulesCompletedCount) / 16) * 100),
    [booksReadCount, modulesCompletedCount]
  );

  const handleModuleClick = (key: string) => {
    setCurrentView(key);
  };

  const toggleBookExpand = (id: string) => {
    setExpandedBookId(prev => (prev === id ? null : id));
  };

  const dashboardContent = content.dashboard;

  return (
    <div className="space-y-8 pb-12 text-white">
      {/* ─── WELCOME HERO SECTION ─── */}
      <div className="relative rounded-2xl p-[1px] overflow-hidden" style={{
        background: 'linear-gradient(135deg, #00e676, #2979ff)',
      }}>
        <div className="relative rounded-2xl bg-bg-card px-6 py-10 sm:px-10 sm:py-12 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-fin-green animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-fin-green">
                CDC SYSTEMATIC CURRICULUM
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
              {dashboardContent.welcomeTitle[language]}
            </h1>
            <p className="text-fin-gray text-sm sm:text-base leading-relaxed">
              {dashboardContent.welcomeDesc[language]}
            </p>
          </div>
        </div>
      </div>

      {/* ─── STUDY PROGRESS STATISTICS ─── */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-mono">
          <BarChart3 className="w-5 h-5 text-fin-amber" />
          {dashboardContent.statsCardTitle[language]}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Books */}
          <div className="bg-[#151a22] border border-[#202836] rounded-xl p-5 text-center">
            <p className="text-xs text-fin-gray font-mono uppercase tracking-wider mb-2">
              {dashboardContent.quickStats.totalBooks[language]}
            </p>
            <p className="text-3xl font-bold font-mono text-white">10</p>
          </div>
          {/* Books Read */}
          <div className="bg-[#151a22] border border-[#202836] rounded-xl p-5 text-center">
            <p className="text-xs text-fin-gray font-mono uppercase tracking-wider mb-2">
              {dashboardContent.booksReadLabel[language]}
            </p>
            <p className="text-3xl font-bold font-mono text-[#00e676]">{booksReadCount} / 10</p>
          </div>
          {/* Modules Tasks Completed */}
          <div className="bg-[#151a22] border border-[#202836] rounded-xl p-5 text-center">
            <p className="text-xs text-fin-gray font-mono uppercase tracking-wider mb-2">
              {dashboardContent.modulesCompletedLabel[language]}
            </p>
            <p className="text-3xl font-bold font-mono text-[#2979ff]">{modulesCompletedCount} / 6</p>
          </div>
          {/* Overall progress */}
          <div className="bg-[#151a22] border border-[#202836] rounded-xl p-5 text-center">
            <p className="text-xs text-fin-gray font-mono uppercase tracking-wider mb-2">
              {language === 'en' ? 'Syllabus Progress' : 'ความคืบหน้ารวม'}
            </p>
            <p className="text-3xl font-bold font-mono text-[#ffb300]">{overallProgress}%</p>
          </div>
        </div>
      </section>

      {/* ─── STUDY CURRICULUM MODULES ─── */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Library className="w-5 h-5 text-fin-blue" />
          <h2 className="text-lg font-bold text-white">
            {dashboardContent.progressHeader[language]}
          </h2>
        </div>
        <p className="text-fin-gray text-sm mb-6">
          {dashboardContent.progressSub[language]}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(['m1', 'm2', 'm3', 'm4', 'm5', 'm6'] as const).map((key) => {
            const isComplete = !!completedModules[key];
            const color = moduleColors[key];
            const detail = moduleDetails[key];

            return (
              <button
                key={key}
                onClick={() => handleModuleClick(key)}
                className="group relative text-left rounded-xl border border-border-dark bg-bg-card p-5 transition-all duration-200 hover:scale-[1.02] hover:bg-bg-card-hover focus:outline-none focus:ring-1 focus:ring-fin-blue/40 cursor-pointer"
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${color}20, 0 0 30px ${color}08`;
                  (e.currentTarget as HTMLElement).style.borderColor = color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-lg"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {moduleIcons[key]}
                  </div>
                  {isComplete ? (
                    <span className="text-[10px] font-mono bg-fin-green/10 text-fin-green border border-fin-green/20 px-2.5 py-0.5 rounded-full">
                      {language === 'en' ? '✓ DONE' : '✓ ผ่าน'}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono bg-fin-gray/10 text-fin-gray border border-fin-gray/20 px-2.5 py-0.5 rounded-full">
                      {language === 'en' ? 'PENDING' : 'ค้างอยู่'}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest mb-1 block" style={{ color }}>
                  {key.toUpperCase()}
                </span>
                <h3 className="text-sm font-semibold text-white group-hover:text-fin-green transition-colors mb-3">
                  {moduleInfo[key][language]}
                </h3>

                <div className="flex items-center gap-3 border-t border-border-dark pt-3 mt-3">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-fin-gray">
                    <BookOpen size={10} />
                    <span>{detail.books} {language === 'en' ? 'books' : 'เล่ม'}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-fin-gray">
                    <Sparkles size={10} />
                    <span>{detail.feature[language]}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── FEATURED BOOKS CATALOG ─── */}
      <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-fin-green" />
          {dashboardContent.featuredBooks[language]}
        </h2>
        <p className="text-fin-gray text-xs mb-8">{dashboardContent.curriculumSummary[language]}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {referenceBooks.map((book) => {
            const isRead = !!completedBooks[book.id];
            const isExpanded = expandedBookId === book.id;
            const mColor = moduleColors[book.module as keyof typeof moduleColors] || '#2979ff';

            return (
              <div
                key={book.id}
                className={`border rounded-xl bg-[#0e1117] transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isRead ? 'border-[#00e676]/40 shadow-md shadow-[#00e676]/5' : 'border-[#202836] hover:border-[#2979ff]/40'
                }`}
              >
                {/* Header card details */}
                <div className="p-5 flex justify-between items-start gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md text-white font-bold" style={{ backgroundColor: mColor }}>
                        {book.module.toUpperCase()}
                      </span>
                      <span className="text-[10px] font-mono text-fin-gray">{book.author}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white font-mono leading-tight">{book.title}</h3>
                  </div>

                  {/* Manual Mark Read Action Button */}
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

                {/* Summary Section (Expandable) */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#202836]/60 bg-[#151a22]/40 text-xs leading-relaxed space-y-4">
                    <div>
                      <p className="text-fin-gray italic">"{book.summary[language]}"</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-fin-green font-mono uppercase tracking-wider text-[10px]">
                        {language === 'en' ? 'Key Takeaways' : 'ประเด็นสำคัญ'}
                      </p>
                      <ul className="space-y-1.5 list-disc pl-4 text-gray-300">
                        {book.keyPoints[language].map((pt, index) => (
                          <li key={index}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Footer action toggle details */}
                <button
                  onClick={() => toggleBookExpand(book.id)}
                  className="px-5 py-2.5 bg-[#0e1117]/85 border-t border-[#202836]/60 flex items-center justify-center gap-1.5 text-xs text-[#8a99ad] hover:text-white transition-colors w-full cursor-pointer font-mono"
                >
                  {isExpanded ? (
                    <>
                      <span>{language === 'en' ? 'HIDE TAKEAWAYS' : 'ซ่อนข้อมูลหลัก'}</span>
                      <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      <span>{language === 'en' ? 'SHOW SUMMARY TAKEAWAYS' : 'อ่านบทสรุปย่อ'}</span>
                      <ChevronDown size={14} />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── WISDOM QUOTES SECTION ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Wisdom Quotes */}
        <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
          <Quote className="absolute -top-1 -right-1 w-20 h-20 text-fin-green/5" />
          <h3 className="text-sm font-mono text-fin-green uppercase tracking-wider mb-6 flex items-center gap-2">
            <Quote size={16} />
            {dashboardContent.quotesTitle[language]}
          </h3>
          <div className="space-y-6">
            {wisdomQuotes.slice(0, 2).map((q, i) => (
              <div key={i} className="space-y-1 relative z-10">
                <p className="text-sm italic text-gray-200">
                  &ldquo;{q[language]}&rdquo;
                </p>
                <span className="text-[10px] font-mono text-fin-green">— {q.author}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Study Highlights & Reset actions */}
        <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono text-[#2979ff] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles size={16} />
              {dashboardContent.recentHighlightsLabel[language]}
            </h3>
            <p className="text-xs text-[#8a99ad] leading-relaxed mt-4">
              {dashboardContent.highlightsDesc[language]}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-[#202836] flex justify-end">
            <button
              onClick={onResetAll}
              className="bg-[#ff3d00]/15 hover:bg-[#ff3d00]/25 text-[#ff3d00] border border-[#ff3d00]/30 font-bold font-mono py-2 px-5 rounded-lg text-xs cursor-pointer active:scale-95 transition-all"
            >
              {language === 'en' ? 'RESET ALL STUDY PROGRESS' : 'รีเซ็ตความคืบหน้าการศึกษาทั้งหมด'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
