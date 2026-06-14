import React, { useState, useMemo, useEffect } from 'react';
import { ShieldCheck, BookOpen, CheckCircle, Circle, Award, AlertTriangle } from 'lucide-react';
import { content, referenceBooks } from '../data/content';

interface Module4Props {
  language: 'en' | 'th';
  onComplete: (completed: boolean) => void;
  isCompleted: boolean;
  completedBooks: Record<string, boolean>;
  onToggleBook: (id: string) => void;
}

export const Module4: React.FC<Module4Props> = ({
  language,
  onComplete,
  isCompleted,
  completedBooks,
  onToggleBook,
}) => {
  const m4Content = content.m4;

  // Filter book resources for this module
  const m4Books = referenceBooks.filter((b) => b.module === 'm4');

  // Calculator State
  const [accountSize, setAccountSize] = useState<string>('10000');
  const [riskPercent, setRiskPercent] = useState<string>('1');
  const [entryPrice, setEntryPrice] = useState<string>('100');
  const [stopLoss, setStopLoss] = useState<string>('95');

  const results = useMemo(() => {
    const size = parseFloat(accountSize);
    const risk = parseFloat(riskPercent) / 100;
    const entry = parseFloat(entryPrice);
    const sl = parseFloat(stopLoss);

    if (
      isNaN(size) ||
      isNaN(risk) ||
      isNaN(entry) ||
      isNaN(sl) ||
      sl >= entry ||
      size <= 0 ||
      entry <= 0 ||
      sl <= 0
    ) {
      return null;
    }

    const dollarRisk = size * risk;
    const stopLossDist = (entry - sl) / entry;
    const positionValue = dollarRisk / stopLossDist;
    const positionUnits = positionValue / entry;
    const leverage = positionValue / size;

    return {
      positionUnits,
      positionValue,
      dollarRisk,
      stopLossDist: stopLossDist * 100,
      leverage,
    };
  }, [accountSize, riskPercent, entryPrice, stopLoss]);

  // Trigger completion upon successful calculation
  useEffect(() => {
    if (results) {
      onComplete(true);
    }
  }, [results, onComplete]);

  return (
    <div className="space-y-8 text-white pb-12">
      {/* ─── MODULE HEADER ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-red-400">MODULE 04</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            {m4Content.title[language]}
          </h1>
          <p className="text-fin-gray text-sm md:text-base max-w-3xl leading-relaxed">
            {m4Content.subtitle[language]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ─── LEFT: READINGS & SYLLABUS TEXT (2 COLS) ─── */}
        <div className="lg:col-span-2 space-y-8">
          {/* REFERENCE BOOKS */}
          <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
            <h2 className="text-md font-bold font-mono text-white mb-4 flex items-center gap-2 border-b border-[#202836] pb-3">
              <BookOpen className="w-5 h-5 text-red-400" />
              {language === 'en' ? 'MODULE MATERIALS' : 'เอกสารและหนังสือประจำบทเรียน'}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {m4Books.map((book) => {
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
                          <span className="text-[10px] font-mono text-red-400 font-bold block mb-1">
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
              <Award className="w-5 h-5 text-red-400" />
              {language === 'en' ? 'Risk Management Framework' : 'โครงร่างบริหารควบคุมความเสี่ยง'}
            </h2>
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{m4Content.p1[language]}</p>
              <p>{m4Content.p2[language]}</p>
              <p>{m4Content.p3[language]}</p>
            </div>
          </section>
        </div>

        {/* ─── RIGHT: POSITION SIZING CALCULATOR (1 COL) ─── */}
        <div>
          <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              <h2 className="text-md font-bold font-mono text-white mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-400" />
                {m4Content.calculatorTitle[language]}
              </h2>
              <p className="text-fin-gray text-xs mb-6 leading-relaxed">
                {m4Content.calculatorDesc[language]}
              </p>

              {/* Inputs */}
              <div className="space-y-4 mb-6">
                <div className="space-y-1">
                  <label className="text-xs text-[#8a99ad] font-mono">{m4Content.inputs.accountSize[language]}</label>
                  <input
                    type="number"
                    value={accountSize}
                    onChange={(e) => setAccountSize(e.target.value)}
                    className="w-full bg-[#0e1117] border border-[#202836] rounded-lg p-2.5 text-white focus:border-red-500 outline-none font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#8a99ad] font-mono">{m4Content.inputs.riskPercent[language]}</label>
                  <input
                    type="number"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(e.target.value)}
                    className="w-full bg-[#0e1117] border border-[#202836] rounded-lg p-2.5 text-white focus:border-red-500 outline-none font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#8a99ad] font-mono">{m4Content.inputs.entryPrice[language]}</label>
                  <input
                    type="number"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                    className="w-full bg-[#0e1117] border border-[#202836] rounded-lg p-2.5 text-white focus:border-red-500 outline-none font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#8a99ad] font-mono">{m4Content.inputs.stopLoss[language]}</label>
                  <input
                    type="number"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(e.target.value)}
                    className="w-full bg-[#0e1117] border border-[#202836] rounded-lg p-2.5 text-white focus:border-red-500 outline-none font-mono text-xs"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-4 space-y-3.5">
                {results ? (
                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between items-center py-1.5 border-b border-[#202836]/40">
                      <span className="text-[#8a99ad]">{m4Content.outputs.maxDollarRisk[language]}</span>
                      <span className="font-mono font-bold text-[#ff3d00]">${results.dollarRisk.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-[#202836]/40">
                      <span className="text-[#8a99ad]">{m4Content.outputs.positionValue[language]}</span>
                      <span className="font-mono font-bold text-white">${results.positionValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-[#202836]/40">
                      <span className="text-[#8a99ad]">{m4Content.outputs.positionUnits[language]}</span>
                      <span className="font-mono font-bold text-[#00e676]">{results.positionUnits.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-[#202836]/40">
                      <span className="text-[#8a99ad]">{m4Content.outputs.stopLossDist[language]}</span>
                      <span className="font-mono font-bold text-white">{results.stopLossDist.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-[#8a99ad]">{m4Content.outputs.leverageRatio[language]}</span>
                      <span className="font-mono font-bold text-white">{results.leverage.toFixed(2)}x</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-center text-[#ff3d00] flex-col gap-2 py-4">
                    <AlertTriangle className="w-8 h-8 animate-pulse" />
                    <p className="text-xs font-mono">{m4Content.warnings.invalidStopLoss[language]}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CPR FORMULA + RISK VISUALIZATION CARD (FULL WIDTH BELOW GRID) ─── */}
      {results && (
        <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#ff3d00] mb-4">
            {language === 'en' ? '🔺 CPR Position Sizing Formula — Live Calculation' : '🔺 สูตร CPR กำหนดขนาดไม้เทรด — คำนวณแบบเรียลไทม์'}
          </p>
          <div className="flex flex-wrap gap-3 items-center font-mono text-sm mb-4">
            <span className="text-[#8a99ad]">Units =</span>
            <span className="bg-[#0e1117] border border-[#202836] px-3 py-1 rounded-lg">
              <span className="text-[#ff3d00]">${parseFloat(accountSize).toLocaleString('en-US')}</span>
              <span className="text-[#8a99ad] mx-1">×</span>
              <span className="text-[#ffca28]">{parseFloat(riskPercent)}%</span>
            </span>
            <span className="text-[#8a99ad]">÷</span>
            <span className="bg-[#0e1117] border border-[#202836] px-3 py-1 rounded-lg">
              <span className="text-[#2979ff]">(${parseFloat(entryPrice).toFixed(2)}</span>
              <span className="text-[#8a99ad] mx-1">−</span>
              <span className="text-[#ff3d00]">${parseFloat(stopLoss).toFixed(2)})</span>
            </span>
            <span className="text-[#8a99ad]">=</span>
            <span className="text-xl font-extrabold text-[#00e676]">{results.positionUnits.toFixed(4)} units</span>
          </div>

          {/* Risk Allocation Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-[#8a99ad] uppercase">
              <span>{language === 'en' ? 'Portfolio Risk Exposure' : 'การกระจายความเสี่ยงในพอร์ต'}</span>
              <span className="text-[#ff3d00]">{parseFloat(riskPercent).toFixed(1)}% AT RISK</span>
            </div>
            <div className="w-full h-3 bg-[#0e1117] border border-[#202836] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(parseFloat(riskPercent) * 10, 100)}%`,
                  background: parseFloat(riskPercent) > 3 ? '#ff3d00' : parseFloat(riskPercent) > 2 ? '#ffb300' : '#00e676',
                }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[#8a99ad]">
              <span>0%</span>
              <span className="text-[#00e676]">1-2% {language === 'en' ? 'SAFE ZONE' : 'โซนปลอดภัย'}</span>
              <span className="text-[#ff3d00]">10% {language === 'en' ? 'MAX RISK' : 'ความเสี่ยงสูงสุด'}</span>
            </div>
          </div>

          {/* High Leverage Warning */}
          {results.leverage > 3 && (
            <div className="mt-4 flex items-start gap-3 bg-[#ff3d00]/5 border border-[#ff3d00]/20 rounded-xl p-3.5">
              <AlertTriangle className="w-5 h-5 text-[#ff3d00] shrink-0 mt-0.5" />
              <p className="text-xs text-[#ff3d00] leading-relaxed font-mono">
                {m4Content.warnings.riskTooHigh[language]}
                {' '}
                {language === 'en'
                  ? `Current leverage: ${results.leverage.toFixed(2)}x. Reduce risk% or widen stop loss.`
                  : `เลเวอเรจปัจจุบัน: ${results.leverage.toFixed(2)}x. ลดค่าความเสี่ยง% หรือขยายระยะ Stop Loss`}
              </p>
            </div>
          )}
        </div>
      )}

      {/* ─── COMPLETION STATUS BANNER ─── */}
      {isCompleted && (
        <div className="border border-red-500/30 bg-red-500/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                {language === 'en' ? 'MODULE 04 COMPLETION CONFIRMED' : 'ยืนยันการเรียนรู้โมดูล 04 สำเร็จ'}
              </h3>
              <p className="text-xs text-fin-gray">
                {language === 'en'
                  ? 'Position sizing parameters computed successfully. Compassion for risk preservation is active.'
                  : 'ทำการคำนวณและบริหารอัตราความเสี่ยงขนาดสัญญาเรียบร้อย พร้อมคุ้มกันยอดเงินต้น'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onComplete(false)}
            className="text-xs font-mono text-red-400 hover:text-red-300 underline bg-transparent border-0 cursor-pointer"
          >
            {language === 'en' ? 'RESET MODULE PROGRESS' : 'รีเซ็ตความคืบหน้าโมดูลนี้'}
          </button>
        </div>
      )}
    </div>
  );
};
