import React, { useState, useCallback, useMemo } from 'react';
import { GitMerge, BookOpen, CheckCircle, Circle, Award, Activity, RefreshCw, TrendingUp, XCircle } from 'lucide-react';
import { content, referenceBooks } from '../data/content';

interface Module3Props {
  language: 'en' | 'th';
  onComplete: (completed: boolean) => void;
  isCompleted: boolean;
  completedBooks: Record<string, boolean>;
  onToggleBook: (id: string) => void;
}

interface SimStats {
  finalEquity: number;
  netProfit: number;
  maxDrawdown: number;
  winCount: number;
  lossCount: number;
}

export const Module3: React.FC<Module3Props> = ({
  language,
  onComplete,
  isCompleted,
  completedBooks,
  onToggleBook,
}) => {
  const m3Content = content.m3;

  // Filter book resources for this module
  const m3Books = referenceBooks.filter((b) => b.module === 'm3');

  // Simulator State
  const [winRate, setWinRate] = useState(40);
  const [riskReward, setRiskReward] = useState(3.0);
  const [tradeCount, setTradeCount] = useState(50);
  const [startCapital, setStartCapital] = useState(10000);
  const [riskPerTrade, setRiskPerTrade] = useState(2.0);
  
  const [initialData] = useState(() => {
    let equity = 10000;
    const curve: number[] = [equity];
    let peak = equity;
    let maxDD = 0;
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < 50; i++) {
      const isWin = Math.random() * 100 < 40;
      const riskAmount = equity * 0.02;
      if (isWin) {
        equity += riskAmount * 3.0;
        wins++;
      } else {
        equity -= riskAmount;
        losses++;
      }
      curve.push(equity);
      if (equity > peak) peak = equity;
      const dd = peak > 0 ? ((peak - equity) / peak) * 100 : 0;
      if (dd > maxDD) maxDD = dd;
    }
    return {
      curve,
      stats: {
        finalEquity: equity,
        netProfit: equity - 10000,
        maxDrawdown: maxDD,
        winCount: wins,
        lossCount: losses,
      }
    };
  });

  const [equityCurve, setEquityCurve] = useState<number[]>(initialData.curve);
  const [simStats, setSimStats] = useState<SimStats>(initialData.stats);

  const runSimulation = useCallback(() => {
    let equity = startCapital;
    const curve: number[] = [equity];
    let peak = equity;
    let maxDD = 0;
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < tradeCount; i++) {
      const isWin = Math.random() * 100 < winRate;
      const riskAmount = equity * (riskPerTrade / 100);
      if (isWin) {
        equity += riskAmount * riskReward;
        wins++;
      } else {
        equity -= riskAmount;
        losses++;
      }
      equity = Math.max(equity, 0);
      curve.push(equity);
      if (equity > peak) peak = equity;
      const dd = peak > 0 ? ((peak - equity) / peak) * 100 : 0;
      if (dd > maxDD) maxDD = dd;
    }

    setEquityCurve(curve);
    setSimStats({
      finalEquity: equity,
      netProfit: equity - startCapital,
      maxDrawdown: maxDD,
      winCount: wins,
      lossCount: losses,
    });
    
    onComplete(true);
  }, [winRate, riskReward, tradeCount, startCapital, riskPerTrade, onComplete]);

  const formatCurrency = (val: number): string => {
    const sign = val < 0 ? '-' : '';
    const abs = Math.abs(val);
    if (abs >= 1_000_000) {
      return `${sign}$${(abs / 1_000_000).toFixed(2)}M`;
    }
    return `${sign}$${abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // SVG Chart calculations
  const chartWidth = 800;
  const chartHeight = 300;
  const padding = { top: 20, right: 20, bottom: 30, left: 75 };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;

  const chartData = useMemo(() => {
    if (equityCurve.length === 0) {
      return { points: '', areaPoints: '', maxVal: 0, minVal: 0, gridLines: [], verticalLines: [], yLabels: [], xLabels: [], startCapitalY: 0 };
    }

    const maxVal = Math.max(...equityCurve);
    const minVal = Math.min(...equityCurve);
    const range = maxVal - minVal || 1;

    const getX = (i: number) => padding.left + (i / (equityCurve.length - 1)) * plotWidth;
    const getY = (v: number) => padding.top + plotHeight - ((v - minVal) / range) * plotHeight;

    const points = equityCurve.map((v, i) => `${getX(i).toFixed(2)},${getY(v).toFixed(2)}`).join(' ');

    const areaPoints = [
      `${getX(0).toFixed(2)},${(padding.top + plotHeight).toFixed(2)}`,
      ...equityCurve.map((v, i) => `${getX(i).toFixed(2)},${getY(v).toFixed(2)}`),
      `${getX(equityCurve.length - 1).toFixed(2)},${(padding.top + plotHeight).toFixed(2)}`,
    ].join(' ');

    // Horizontal grid lines at 25%, 50%, 75%
    const gridLines = [0.25, 0.5, 0.75].map(pct => {
      const val = minVal + range * (1 - pct);
      return { y: getY(val), label: formatCurrency(val) };
    });

    // Vertical grid lines every 10 trades
    const verticalLines: { x: number; label: string }[] = [];
    for (let t = 10; t < equityCurve.length; t += 10) {
      verticalLines.push({ x: getX(t), label: `${t}` });
    }

    // Y-axis labels
    const yLabels = [
      { y: getY(maxVal), label: formatCurrency(maxVal) },
      ...gridLines,
      { y: getY(minVal), label: formatCurrency(minVal) },
    ];

    // X-axis labels
    const xLabels = [
      { x: getX(0), label: '0' },
      ...verticalLines,
      { x: getX(equityCurve.length - 1), label: `${equityCurve.length - 1}` },
    ];

    const startCapitalY = getY(startCapital);

    return { points, areaPoints, maxVal, minVal, gridLines, verticalLines, yLabels, xLabels, startCapitalY };
  }, [equityCurve, startCapital, plotWidth, plotHeight, padding.left, padding.top]);

  const sliderClass =
    'w-full h-2 rounded-full appearance-none cursor-pointer bg-[#202836] accent-[#00e676] ' +
    '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 ' +
    '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00e676] [&::-webkit-slider-thumb]:shadow-lg ' +
    '[&::-webkit-slider-thumb]:shadow-[#00e676]/30 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 ' +
    '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#00e676] [&::-moz-range-thumb]:border-0';

  const resultIcons = [
    <TrendingUp size={18} className="text-[#2979ff]" />,
    <Activity size={18} className={simStats.netProfit >= 0 ? 'text-[#00e676]' : 'text-[#ff3d00]'} />,
    <XCircle size={18} className="text-[#ff3d00]" />,
    <CheckCircle size={18} className="text-[#00e676]" />,
    <XCircle size={18} className="text-[#ffca28]" />,
  ];

  const resultValues = [
    { value: formatCurrency(simStats.finalEquity), color: 'text-[#2979ff]' },
    { value: (simStats.netProfit >= 0 ? '+' : '') + formatCurrency(simStats.netProfit), color: simStats.netProfit >= 0 ? 'text-[#00e676]' : 'text-[#ff3d00]' },
    { value: `${simStats.maxDrawdown.toFixed(2)}%`, color: 'text-[#ff3d00]' },
    { value: `${simStats.winCount}`, color: 'text-[#00e676]' },
    { value: `${simStats.lossCount}`, color: 'text-[#ffca28]' },
  ];

  return (
    <div className="space-y-8 text-white pb-12">
      {/* ─── MODULE HEADER ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <GitMerge className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">MODULE 03</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            {m3Content.title[language]}
          </h1>
          <p className="text-fin-gray text-sm md:text-base max-w-3xl leading-relaxed">
            {m3Content.subtitle[language]}
          </p>
        </div>
      </div>

      {/* ─── REFERENCE BOOKS & CONCEPTS ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* REFERENCE BOOKS */}
          <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
            <h2 className="text-md font-bold font-mono text-white mb-4 flex items-center gap-2 border-b border-[#202836] pb-3">
              <BookOpen className="w-5 h-5 text-orange-400" />
              {language === 'en' ? 'MODULE MATERIALS' : 'เอกสารและหนังสือประจำบทเรียน'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {m3Books.map((book) => {
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
                          <span className="text-[10px] font-mono text-orange-400 font-bold block mb-1">
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
              <Award className="w-5 h-5 text-orange-400" />
              {language === 'en' ? 'System Construction Core' : 'แก่นการสร้างระบบเทรด'}
            </h2>
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{m3Content.p1[language]}</p>
              <p>{m3Content.p2[language]}</p>
              <p>{m3Content.p3[language]}</p>
            </div>
          </section>
        </div>

        {/* ─── EXPECTANCY & EQUITY SIMULATOR (1 COL) ─── */}
        <div>
          <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              <h2 className="text-md font-bold font-mono text-white mb-1 flex items-center gap-2">
                <Activity className="w-5 h-5 text-orange-400" />
                {m3Content.simulatorTitle[language]}
              </h2>
              <p className="text-fin-gray text-xs mb-6 leading-relaxed">
                {m3Content.simulatorDesc[language]}
              </p>

              <div className="space-y-4">
                {/* Win Rate */}
                <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-[#8a99ad] font-mono">{m3Content.inputs.winRate[language]}</label>
                    <span className="font-mono text-[#00e676] text-sm font-bold">{winRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={90}
                    step={1}
                    value={winRate}
                    onChange={(e) => setWinRate(Number(e.target.value))}
                    className={sliderClass}
                  />
                </div>

                {/* Risk-to-Reward Ratio */}
                <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-[#8a99ad] font-mono">{m3Content.inputs.riskReward[language]}</label>
                    <span className="font-mono text-[#00e676] text-sm font-bold">1:{riskReward}</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={10}
                    step={0.1}
                    value={riskReward}
                    onChange={(e) => setRiskReward(Number(e.target.value))}
                    className={sliderClass}
                  />
                </div>

                {/* Simulated Trade Count */}
                <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-[#8a99ad] font-mono">{m3Content.inputs.tradeCount[language]}</label>
                    <span className="font-mono text-[#00e676] text-sm font-bold">{tradeCount}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={150}
                    step={1}
                    value={tradeCount}
                    onChange={(e) => setTradeCount(Number(e.target.value))}
                    className={sliderClass}
                  />
                </div>

                {/* Starting Capital */}
                <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-[#8a99ad] font-mono">{m3Content.inputs.startCapital[language]}</label>
                    <span className="font-mono text-[#00e676] text-sm font-bold">${startCapital.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={50000}
                    step={1000}
                    value={startCapital}
                    onChange={(e) => setStartCapital(Number(e.target.value))}
                    className={sliderClass}
                  />
                </div>

                {/* Risk per Trade */}
                <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-[#8a99ad] font-mono">{m3Content.inputs.riskPerTrade[language]}</label>
                    <span className="font-mono text-[#00e676] text-sm font-bold">{riskPerTrade}%</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={50}
                    step={0.5}
                    value={riskPerTrade}
                    onChange={(e) => setRiskPerTrade(Number(e.target.value))}
                    className={sliderClass}
                  />
                </div>

                {/* Simulation Trigger Button */}
                <button
                  onClick={runSimulation}
                  className="w-full flex items-center justify-center gap-2 bg-[#00e676] hover:bg-[#00c853] text-[#08090c] font-bold font-mono py-3 px-4 rounded-xl transition cursor-pointer active:scale-98 text-xs shadow-md shadow-[#00e676]/10"
                >
                  <RefreshCw size={14} />
                  <span>{m3Content.runSim[language].toUpperCase()}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── GRAPHICAL CHART DISPLAY (FULL WIDTH) ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#ffca28] mb-4">
          {language === 'en' ? 'Equity Compounding Trajectory' : 'เส้นสมมติฐานการเติบโตของเงินทุนจำลอง'}
        </h3>
        
        {/* SVG Curve Plot */}
        <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-4 overflow-x-auto">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-auto min-w-[600px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="equityGradientSim" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00e676" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width={chartWidth} height={chartHeight} fill="#0e1117" rx="8" />
            <rect x={padding.left} y={padding.top} width={plotWidth} height={plotHeight} fill="none" stroke="#202836" strokeWidth="1" />
            
            {/* Horizontal Grid */}
            {chartData.gridLines?.map((line, i) => (
              <line key={`hgrid-${i}`} x1={padding.left} y1={line.y} x2={padding.left + plotWidth} y2={line.y} stroke="#202836" strokeWidth="1" />
            ))}

            {/* Vertical Grid */}
            {chartData.verticalLines?.map((line, i) => (
              <line key={`vgrid-${i}`} x1={line.x} y1={padding.top} x2={line.x} y2={padding.top + plotHeight} stroke="#202836" strokeWidth="1" />
            ))}

            {/* Start Line */}
            {chartData.startCapitalY !== undefined && (
              <line x1={padding.left} y1={chartData.startCapitalY} x2={padding.left + plotWidth} y2={chartData.startCapitalY} stroke="#ffb300" strokeWidth="1.5" strokeDasharray="6 4" />
            )}

            {/* Area Fill */}
            {chartData.areaPoints && <polygon points={chartData.areaPoints} fill="url(#equityGradientSim)" />}

            {/* Equity Curve Line */}
            {chartData.points && <polyline points={chartData.points} fill="none" stroke="#00e676" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />}

            {/* Labels */}
            {chartData.yLabels?.map((label, i) => (
              <text key={`ylabel-${i}`} x={padding.left - 8} y={label.y + 4} textAnchor="end" fill="#8a99ad" fontSize="9" fontFamily="monospace">{label.label}</text>
            ))}
            {chartData.xLabels?.map((label, i) => (
              <text key={`xlabel-${i}`} x={label.x} y={padding.top + plotHeight + 18} textAnchor="middle" fill="#8a99ad" fontSize="9" fontFamily="monospace">{label.label}</text>
            ))}

            {chartData.startCapitalY !== undefined && (
              <text x={padding.left + plotWidth - 6} y={chartData.startCapitalY - 6} textAnchor="end" fill="#ffb300" fontSize="9" fontFamily="monospace">
                {language === 'en' ? 'Capital Start' : 'เงินทุนตั้งต้น'}: {formatCurrency(startCapital)}
              </text>
            )}
          </svg>
        </div>

          {/* Results Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {['ending', 'net', 'dd', 'wins', 'losses'].map((key, idx) => {
            const labels = [
              m3Content.results.finalEquity[language],
              m3Content.results.netProfit[language],
              m3Content.results.maxDrawdown[language],
              m3Content.results.winCount[language],
              m3Content.results.lossCount[language],
            ];
            return (
              <div key={key} className="bg-[#0e1117] border border-[#202836] rounded-xl p-4 text-center">
                <div className="flex items-center justify-center mb-1 text-[#8a99ad]">
                  {resultIcons[idx]}
                </div>
                <p className="text-[10px] text-fin-gray uppercase font-mono mb-1">{labels[idx]}</p>
                <p className={`font-mono text-md font-bold ${resultValues[idx].color}`}>{resultValues[idx].value}</p>
              </div>
            );
          })}
        </div>

        {/* ─── Live Expectancy Formula Card ─── */}
        {(() => {
          const wr = winRate / 100;
          const lr = 1 - wr;
          const expectancy = (wr * riskReward) - (lr * 1);
          const expectancyColor = expectancy > 0 ? 'text-[#00e676]' : 'text-[#ff3d00]';
          const expectancyBg = expectancy > 0 ? 'bg-[#00e676]/5 border-[#00e676]/20' : 'bg-[#ff3d00]/5 border-[#ff3d00]/20';
          return (
            <div className={`mt-6 border rounded-xl p-5 ${expectancyBg}`}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#ffca28] mb-3">
                {language === 'en' ? '⚡ Live Expectancy Formula' : '⚡ สูตรค่าคาดหวังแบบเรียลไทม์'}
              </p>
              <div className="flex flex-wrap gap-3 items-center font-mono text-sm">
                <span className="text-[#8a99ad]">E =</span>
                <span className="bg-[#0e1117] border border-[#202836] px-3 py-1 rounded-lg">
                  <span className="text-[#00e676]">{winRate}%</span>
                  <span className="text-[#8a99ad] mx-1">×</span>
                  <span className="text-[#2979ff]">{riskReward}R</span>
                </span>
                <span className="text-[#8a99ad]">−</span>
                <span className="bg-[#0e1117] border border-[#202836] px-3 py-1 rounded-lg">
                  <span className="text-[#ffca28]">{100 - winRate}%</span>
                  <span className="text-[#8a99ad] mx-1">×</span>
                  <span className="text-[#ff3d00]">1R</span>
                </span>
                <span className="text-[#8a99ad]">=</span>
                <span className={`text-xl font-extrabold ${expectancyColor}`}>
                  {expectancy > 0 ? '+' : ''}{expectancy.toFixed(3)}R
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${expectancy > 0 ? 'bg-[#00e676]/10 text-[#00e676]' : 'bg-[#ff3d00]/10 text-[#ff3d00]'}`}>
                  {expectancy > 0.1 ? (language === 'en' ? 'PROFITABLE SYSTEM' : 'ระบบสร้างกำไร') : expectancy > 0 ? (language === 'en' ? 'MARGINAL' : 'พอรอด') : (language === 'en' ? 'LOSING SYSTEM' : 'ระบบขาดทุน')}
                </span>
              </div>
              <p className="text-[10px] text-[#8a99ad] mt-3">
                {language === 'en'
                  ? `For every $1 risked, this system returns ${expectancy > 0 ? '+' : ''}$${Math.abs(expectancy).toFixed(3)} on average over a large trade sample.`
                  : `ต่อเงินที่เสี่ยงทุกๆ $1 ระบบนี้สร้างผลตอบแทนเฉลี่ย ${expectancy > 0 ? '+' : ''}$${Math.abs(expectancy).toFixed(3)} จากสถิติการเทรดจำนวนมาก`}
              </p>
            </div>
          );
        })()}
      </div>

      {/* ─── COMPLETION STATUS BANNER ─── */}
      {isCompleted && (
        <div className="border border-orange-500/30 bg-orange-500/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                {language === 'en' ? 'MODULE 03 COMPLETION CONFIRMED' : 'ยืนยันการเรียนรู้โมดูล 03 สำเร็จ'}
              </h3>
              <p className="text-xs text-fin-gray">
                {language === 'en'
                  ? 'System design simulator is executed. Take the lessons of expectancy into position sizing.'
                  : 'รันการทดสอบจำลองค่าคาดหวังเรียบร้อย สามารถประยุกต์ร่วมกับการบริหารพอร์ตในลำดับต่อไป'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onComplete(false)}
            className="text-xs font-mono text-orange-400 hover:text-orange-300 underline bg-transparent border-0 cursor-pointer"
          >
            {language === 'en' ? 'RESET MODULE PROGRESS' : 'รีเซ็ตความคืบหน้าโมดูลนี้'}
          </button>
        </div>
      )}
    </div>
  );
};
