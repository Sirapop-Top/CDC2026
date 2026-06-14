import React, { useState, useMemo, useEffect } from 'react';
import { LineChart, BookOpen, CheckCircle, Circle, Award, DollarSign, Percent, Clock, PiggyBank, Sparkles, BarChart3 } from 'lucide-react';
import { content, referenceBooks } from '../data/content';

interface Module6Props {
  language: 'en' | 'th';
  onComplete: (completed: boolean) => void;
  isCompleted: boolean;
  completedBooks: Record<string, boolean>;
  onToggleBook: (id: string) => void;
}

const formatNumber = (n: number): string => {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
};

export const Module6: React.FC<Module6Props> = ({
  language,
  onComplete,
  isCompleted,
  completedBooks,
  onToggleBook,
}) => {
  const m6Content = content.m6;

  // Filter book resources for this module
  const m6Books = referenceBooks.filter((b) => b.module === 'm6');

  // SIP Calculator State
  const [monthlyContrib, setMonthlyContrib] = useState(500);
  const [annualYield, setAnnualYield] = useState(15);
  const [years, setYears] = useState(15);
  const [hasInteracted, setHasInteracted] = useState(false);

  const { dataPoints, totalContributed, totalInterest, futureValue } = useMemo(() => {
    const monthlyRate = annualYield / 100 / 12;
    const totalMonths = years * 12;
    const dataPoints: { month: number; contributed: number; total: number }[] = [];
    let total = 0;
    
    for (let m = 1; m <= totalMonths; m++) {
      total = (total + monthlyContrib) * (1 + monthlyRate);
      if (m % 12 === 0 || m === totalMonths) {
        dataPoints.push({
          month: m,
          contributed: monthlyContrib * m,
          total: total,
        });
      }
    }

    const last = dataPoints[dataPoints.length - 1] || { contributed: 0, total: 0 };
    return {
      dataPoints,
      totalContributed: last.contributed,
      totalInterest: Math.max(0, last.total - last.contributed),
      futureValue: last.total,
    };
  }, [monthlyContrib, annualYield, years]);

  // Trigger completion only after user interaction (not on mount)
  useEffect(() => {
    if (hasInteracted) {
      onComplete(true);
    }
  }, [hasInteracted, onComplete]);

  // SVG dimensions
  const svgWidth = 750;
  const svgHeight = 350;
  const padLeft = 85;
  const padRight = 30;
  const padTop = 30;
  const padBottom = 50;
  
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;

  const chartData = useMemo(() => {
    if (dataPoints.length === 0) {
      return {
        contributionPath: '',
        totalPath: '',
        contributionAreaPath: '',
        interestAreaPath: '',
        yTicks: [],
        xTicks: [],
      };
    }

    const maxVal = Math.max(...dataPoints.map((d) => d.total), 1);
    const toY = (val: number) => padTop + chartH - (val / maxVal) * chartH;
    const toX = (index: number) => padLeft + (index / (dataPoints.length - 1 || 1)) * chartW;

    // Build line paths
    let contributionLine = '';
    let totalLine = '';
    dataPoints.forEach((dp, i) => {
      const x = toX(i);
      const cmd = i === 0 ? 'M' : 'L';
      contributionLine += `${cmd}${x.toFixed(1)},${toY(dp.contributed).toFixed(1)} `;
      totalLine += `${cmd}${x.toFixed(1)},${toY(dp.total).toFixed(1)} `;
    });

    // Build contribution area (polygon from contribution line down to x-axis)
    const contArea = [
      `${toX(0).toFixed(1)},${(padTop + chartH).toFixed(1)}`,
      ...dataPoints.map((dp, i) => `${toX(i).toFixed(1)},${toY(dp.contributed).toFixed(1)}`),
      `${toX(dataPoints.length - 1).toFixed(1)},${(padTop + chartH).toFixed(1)}`,
    ].join(' ');

    // Build interest area (polygon between total line and contribution line)
    let intArea = '';
    dataPoints.forEach((dp, i) => {
      const x = toX(i);
      const cmd = i === 0 ? 'M' : 'L';
      intArea += `${cmd}${x.toFixed(1)},${toY(dp.total).toFixed(1)} `;
    });
    for (let i = dataPoints.length - 1; i >= 0; i--) {
      intArea += `L${toX(i).toFixed(1)},${toY(dataPoints[i].contributed).toFixed(1)} `;
    }
    intArea += 'Z';

    // Y-axis ticks
    const tickCount = 5;
    const yTicks: number[] = [];
    for (let i = 0; i <= tickCount; i++) {
      yTicks.push((maxVal / tickCount) * i);
    }

    // X-axis ticks
    const xTicks: { month: number; label: string }[] = [];
    const step = Math.max(1, Math.floor(dataPoints.length / 8));
    for (let i = 0; i < dataPoints.length; i += step) {
      xTicks.push({ month: dataPoints[i].month, label: `${Math.round(dataPoints[i].month / 12)}y` });
    }
    const last = dataPoints[dataPoints.length - 1];
    if (last && !xTicks.find((t) => t.month === last.month)) {
      xTicks.push({ month: last.month, label: `${Math.round(last.month / 12)}y` });
    }

    return {
      contributionPath: contributionLine.trim(),
      totalPath: totalLine.trim(),
      contributionAreaPath: contArea,
      interestAreaPath: intArea,
      yTicks,
      xTicks,
    };
  }, [dataPoints, chartW, chartH, padLeft, padTop]);

  const maxVal = useMemo(() => Math.max(...dataPoints.map((d) => d.total), 1), [dataPoints]);
  const toY = (val: number) => padTop + chartH - (val / maxVal) * chartH;
  const toXIndex = (index: number) => padLeft + (index / (dataPoints.length - 1 || 1)) * chartW;

  return (
    <div className="space-y-8 text-white pb-12">
      {/* ─── MODULE HEADER ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
              <LineChart className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-green-400">MODULE 06</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            {m6Content.title[language]}
          </h1>
          <p className="text-fin-gray text-sm md:text-base max-w-3xl leading-relaxed">
            {m6Content.subtitle[language]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ─── LEFT: READINGS & SYLLABUS TEXT (2 COLS) ─── */}
        <div className="lg:col-span-2 space-y-8">
          {/* REFERENCE BOOKS */}
          <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
            <h2 className="text-md font-bold font-mono text-white mb-4 flex items-center gap-2 border-b border-[#202836] pb-3">
              <BookOpen className="w-5 h-5 text-green-400" />
              {language === 'en' ? 'MODULE MATERIALS' : 'เอกสารและหนังสือประจำบทเรียน'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {m6Books.map((book) => {
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
                          <span className="text-[10px] font-mono text-green-400 font-bold block mb-1">
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
              <Award className="w-5 h-5 text-green-400" />
              {language === 'en' ? 'Capital Harvesting & Allocations' : 'การเก็บเกี่ยวทุนและการกระจายพอร์ต'}
            </h2>
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{m6Content.p1[language]}</p>
              <p>{m6Content.p2[language]}</p>
              <p>{m6Content.p3[language]}</p>
            </div>
          </section>
        </div>

        {/* ─── RIGHT: SIP COMPOSING VISUALIZER CONTROLS (1 COL) ─── */}
        <div>
          <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              <h2 className="text-md font-bold font-mono text-white mb-1 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                {m6Content.visualizerTitle[language]}
              </h2>
              <p className="text-fin-gray text-xs mb-6 leading-relaxed">
                {m6Content.visualizerDesc[language]}
              </p>

              {/* Monthly Contribution */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-[#8a99ad] font-mono flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#2979ff]" />
                    {m6Content.inputs.monthlyContrib[language]}
                  </label>
                  <span className="text-white font-mono text-xs font-semibold bg-[#0e1117] px-2 py-0.5 rounded border border-[#202836]">
                    ${formatNumber(monthlyContrib)}
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={monthlyContrib}
                  onChange={(e) => { setMonthlyContrib(Number(e.target.value)); setHasInteracted(true); }}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#2979ff] bg-[#202836]"
                />
              </div>

              {/* Annual Yield */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-[#8a99ad] font-mono flex items-center gap-1">
                    <Percent className="w-3.5 h-3.5 text-[#00e676]" />
                    {m6Content.inputs.annualYield[language]}
                  </label>
                  <span className="text-white font-mono text-xs font-semibold bg-[#0e1117] px-2 py-0.5 rounded border border-[#202836]">
                    {annualYield.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={0.5}
                  value={annualYield}
                  onChange={(e) => { setAnnualYield(Number(e.target.value)); setHasInteracted(true); }}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#00e676] bg-[#202836]"
                />
              </div>

              {/* Years */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-[#8a99ad] font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ffb300]" />
                    {m6Content.inputs.years[language]}
                  </label>
                  <span className="text-white font-mono text-xs font-semibold bg-[#0e1117] px-2 py-0.5 rounded border border-[#202836]">
                    {years} {language === 'en' ? 'yrs' : 'ปี'}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => { setYears(Number(e.target.value)); setHasInteracted(true); }}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#ffb300] bg-[#202836]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── GRAPHICAL CHART DISPLAY (FULL WIDTH) ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#ffca28] mb-4">
          {language === 'en' ? 'SIP Capital Compounding Trajectory' : 'แผนภาพแสดงสัดส่วนการเติบโตดอกเบี้ยทบต้นสะสม'}
        </h3>

        {/* SVG Area Chart */}
        <div className="rounded-xl overflow-hidden border border-[#202836]">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Background */}
            <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="#0e1117" />

            {/* Grid lines */}
            {chartData.yTicks?.map((tick, i) => {
              const y = toY(tick);
              return (
                <g key={`grid-y-${i}`}>
                  <line x1={padLeft} y1={y} x2={svgWidth - padRight} y2={y} stroke="#202836" strokeWidth="1" />
                  <text x={padLeft - 8} y={y + 4} textAnchor="end" fill="#8a99ad" fontSize="9" fontFamily="monospace">
                    ${formatNumber(tick)}
                  </text>
                </g>
              );
            })}

            {/* X-axis grid + labels */}
            {chartData.xTicks?.map((tick, i) => {
              const dpIndex = dataPoints.findIndex((dp) => dp.month === tick.month);
              if (dpIndex < 0) return null;
              const x = toXIndex(dpIndex);
              return (
                <g key={`grid-x-${i}`}>
                  <line x1={x} y1={padTop} x2={x} y2={padTop + chartH} stroke="#202836" strokeWidth="1" strokeDasharray="4,4" />
                  <text x={x} y={svgHeight - padBottom + 20} textAnchor="middle" fill="#8a99ad" fontSize="9" fontFamily="monospace">
                    {tick.label}
                  </text>
                </g>
              );
            })}

            {/* Contribution area (blue, bottom) */}
            {chartData.contributionAreaPath && <path d={chartData.contributionAreaPath} fill="#2979ff" fillOpacity="0.25" />}

            {/* Interest area (green, between total and contribution) */}
            {chartData.interestAreaPath && <path d={chartData.interestAreaPath} fill="#00e676" fillOpacity="0.25" />}

            {/* Contribution line */}
            {chartData.contributionPath && <path d={chartData.contributionPath} fill="none" stroke="#2979ff" strokeWidth="2" />}

            {/* Total value line */}
            {chartData.totalPath && <path d={chartData.totalPath} fill="none" stroke="#00e676" strokeWidth="2" />}

            {/* Axes */}
            <line x1={padLeft} y1={padTop} x2={padLeft} y2={padTop + chartH} stroke="#202836" strokeWidth="1.5" />
            <line x1={padLeft} y1={padTop + chartH} x2={svgWidth - padRight} y2={padTop + chartH} stroke="#202836" strokeWidth="1.5" />

            {/* Legend */}
            <rect x={padLeft + 15} y={padTop + 8} width="12" height="12" rx="2" fill="#2979ff" fillOpacity="0.6" />
            <text x={padLeft + 33} y={padTop + 18} fill="#8a99ad" fontSize="10" fontFamily="monospace">
              {language === 'en' ? 'Deposited Capital' : 'เงินต้นสะสม'}
            </text>
            <rect x={padLeft + 195} y={padTop + 8} width="12" height="12" rx="2" fill="#00e676" fillOpacity="0.6" />
            <text x={padLeft + 213} y={padTop + 18} fill="#8a99ad" fontSize="10" fontFamily="monospace">
              {language === 'en' ? 'Compounded Earnings' : 'ผลตอบแทนสะสม'}
            </text>

            {/* End-point markers */}
            {dataPoints.length > 0 && (
              <>
                <circle
                  cx={toXIndex(dataPoints.length - 1)}
                  cy={toY(dataPoints[dataPoints.length - 1].total)}
                  r="4"
                  fill="#00e676"
                  stroke="#0e1117"
                  strokeWidth="2"
                />
                <circle
                  cx={toXIndex(dataPoints.length - 1)}
                  cy={toY(dataPoints[dataPoints.length - 1].contributed)}
                  r="4"
                  fill="#2979ff"
                  stroke="#0e1117"
                  strokeWidth="2"
                />
              </>
            )}
          </svg>
        </div>

        {/* Results Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
          {/* Total Capital Contributed */}
          <div className="bg-[#0e1117] rounded-xl border border-[#202836] p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-[#2979ff]">
              <PiggyBank className="w-5 h-5" />
              <span className="text-[#8a99ad] text-xs uppercase">{m6Content.outputs.totalContributed[language]}</span>
            </div>
            <p className="text-xl font-bold text-[#2979ff]">${formatNumber(totalContributed)}</p>
          </div>

          {/* Compound Interest Earned */}
          <div className="bg-[#0e1117] rounded-xl border border-[#202836] p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-[#00e676]">
              <Sparkles className="w-5 h-5" />
              <span className="text-[#8a99ad] text-xs uppercase">{m6Content.outputs.totalInterest[language]}</span>
            </div>
            <p className="text-xl font-bold text-[#00e676]">${formatNumber(totalInterest)}</p>
          </div>

          {/* Future Portfolio Value */}
          <div className="bg-[#0e1117] rounded-xl border border-[#00e676]/30 p-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e676]/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-2 text-[#00e676]">
                <LineChart className="w-5 h-5" />
                <span className="text-[#8a99ad] text-xs uppercase">{m6Content.outputs.futureValue[language]}</span>
              </div>
              <p className="text-2xl font-bold text-[#00e676]">${formatNumber(futureValue)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── COMPLETION STATUS BANNER ─── */}
      {isCompleted && (
        <div className="border border-green-500/30 bg-green-500/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                {language === 'en' ? 'MODULE 06 COMPLETION CONFIRMED' : 'ยืนยันการเรียนรู้โมดูล 06 สำเร็จ'}
              </h3>
              <p className="text-xs text-fin-gray">
                {language === 'en'
                  ? 'SIP Compounding calculator customized. Strategic asset allocation principles verified.'
                  : 'รันระบบคำนวณสะสมถัวเฉลี่ยดอกเบี้ยทบต้นเรียบร้อย ทฤษฎีปรับสมดุลพอร์ตและเก็บเกี่ยวเงินออมเสร็จสิ้น'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onComplete(false)}
            className="text-xs font-mono text-green-400 hover:text-green-300 underline bg-transparent border-0 cursor-pointer"
          >
            {language === 'en' ? 'RESET MODULE PROGRESS' : 'รีเซ็ตความคืบหน้าโมดูลนี้'}
          </button>
        </div>
      )}
    </div>
  );
};
