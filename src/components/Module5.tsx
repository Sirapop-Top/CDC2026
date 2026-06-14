import React, { useState, useCallback, useEffect } from 'react';
import { Coins, BookOpen, CheckCircle, Circle, Award, ArrowRightLeft, Settings2, Table2 } from 'lucide-react';
import { content, referenceBooks } from '../data/content';

interface Module5Props {
  language: 'en' | 'th';
  onComplete: (completed: boolean) => void;
  isCompleted: boolean;
  completedBooks: Record<string, boolean>;
  onToggleBook: (id: string) => void;
}

export const Module5: React.FC<Module5Props> = ({
  language,
  onComplete,
  isCompleted,
  completedBooks,
  onToggleBook,
}) => {
  const m5Content = content.m5;

  // Filter book resources for this module
  const m5Books = referenceBooks.filter((b) => b.module === 'm5');

  // Converter State
  const [btcAmount, setBtcAmount] = useState<string>('1');
  const [satsAmount, setSatsAmount] = useState<string>('100000000');
  const [usdAmount, setUsdAmount] = useState<string>('60000');
  const [thbAmount, setThbAmount] = useState<string>('2200000');
  const [btcPriceUsd, setBtcPriceUsd] = useState<number>(60000);
  const [usdToThb, setUsdToThb] = useState<number>(36.67);

  const SATS_PER_BTC = 1e8;

  const formatNum = (n: number, decimals: number = 2): string => {
    if (isNaN(n) || !isFinite(n)) return '0';
    if (Math.abs(n) < 1e-10) return '0';
    if (Number.isInteger(n) && decimals <= 0) return n.toString();
    return parseFloat(n.toFixed(decimals)).toString();
  };

  const handleBtcChange = useCallback((val: string) => {
    setBtcAmount(val);
    const btc = parseFloat(val);
    if (isNaN(btc)) {
      setSatsAmount('');
      setUsdAmount('');
      setThbAmount('');
      return;
    }
    const sats = btc * SATS_PER_BTC;
    const usd = btc * btcPriceUsd;
    const thb = usd * usdToThb;
    setSatsAmount(formatNum(sats, 0));
    setUsdAmount(formatNum(usd, 2));
    setThbAmount(formatNum(thb, 2));
    onComplete(true);
  }, [btcPriceUsd, usdToThb, onComplete]);

  const handleSatsChange = useCallback((val: string) => {
    setSatsAmount(val);
    const sats = parseFloat(val);
    if (isNaN(sats)) {
      setBtcAmount('');
      setUsdAmount('');
      setThbAmount('');
      return;
    }
    const btc = sats / SATS_PER_BTC;
    const usd = btc * btcPriceUsd;
    const thb = usd * usdToThb;
    setBtcAmount(formatNum(btc, 8));
    setUsdAmount(formatNum(usd, 2));
    setThbAmount(formatNum(thb, 2));
    onComplete(true);
  }, [btcPriceUsd, usdToThb, onComplete]);

  const handleUsdChange = useCallback((val: string) => {
    setUsdAmount(val);
    const usd = parseFloat(val);
    if (isNaN(usd)) {
      setBtcAmount('');
      setSatsAmount('');
      setThbAmount('');
      return;
    }
    const btc = usd / btcPriceUsd;
    const sats = btc * SATS_PER_BTC;
    const thb = usd * usdToThb;
    setBtcAmount(formatNum(btc, 8));
    setSatsAmount(formatNum(sats, 0));
    setThbAmount(formatNum(thb, 2));
    onComplete(true);
  }, [btcPriceUsd, usdToThb, onComplete]);

  const handleThbChange = useCallback((val: string) => {
    setThbAmount(val);
    const thb = parseFloat(val);
    if (isNaN(thb)) {
      setBtcAmount('');
      setSatsAmount('');
      setUsdAmount('');
      return;
    }
    const usd = thb / usdToThb;
    const btc = usd / btcPriceUsd;
    const sats = btc * SATS_PER_BTC;
    setBtcAmount(formatNum(btc, 8));
    setSatsAmount(formatNum(sats, 0));
    setUsdAmount(formatNum(usd, 2));
    onComplete(true);
  }, [btcPriceUsd, usdToThb, onComplete]);

  // Handle rates changes, updating outputs
  useEffect(() => {
    const btc = parseFloat(btcAmount);
    if (!isNaN(btc)) {
      const sats = btc * SATS_PER_BTC;
      const usd = btc * btcPriceUsd;
      const thb = usd * usdToThb;
      setSatsAmount(formatNum(sats, 0));
      setUsdAmount(formatNum(usd, 2));
      setThbAmount(formatNum(thb, 2));
    }
  }, [btcPriceUsd, usdToThb]);

  return (
    <div className="space-y-8 text-white pb-12">
      {/* ─── MODULE HEADER ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
              <Coins className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400">MODULE 05</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            {m5Content.title[language]}
          </h1>
          <p className="text-fin-gray text-sm md:text-base max-w-3xl leading-relaxed">
            {m5Content.subtitle[language]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ─── LEFT: READINGS & SYLLABUS TEXT (2 COLS) ─── */}
        <div className="lg:col-span-2 space-y-8">
          {/* REFERENCE BOOKS */}
          <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
            <h2 className="text-md font-bold font-mono text-white mb-4 flex items-center gap-2 border-b border-[#202836] pb-3">
              <BookOpen className="w-5 h-5 text-yellow-400" />
              {language === 'en' ? 'MODULE MATERIALS' : 'เอกสารและหนังสือประจำบทเรียน'}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {m5Books.map((book) => {
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
                          <span className="text-[10px] font-mono text-yellow-400 font-bold block mb-1">
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
              <Award className="w-5 h-5 text-yellow-400" />
              {language === 'en' ? 'Macro & Derivatives Core' : 'แกนหลักแมคโครและอนุพันธ์'}
            </h2>
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{m5Content.p1[language]}</p>
              <p>{m5Content.p2[language]}</p>
              <p>{m5Content.p3[language]}</p>
            </div>
          </section>
        </div>

        {/* ─── RIGHT: BITCOIN SATOSHI CONVERTER (1 COL) ─── */}
        <div>
          <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              <h2 className="text-md font-bold font-mono text-white mb-1 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-yellow-400" />
                {m5Content.converterTitle[language]}
              </h2>
              <p className="text-fin-gray text-xs mb-6 leading-relaxed">
                {m5Content.converterDesc[language]}
              </p>

              {/* Rate configuration inputs */}
              <div className="space-y-3 mb-6 bg-[#0e1117] p-4 rounded-xl border border-[#202836]/60">
                <div className="flex justify-between items-center gap-4 text-xs font-mono">
                  <div className="flex items-center gap-1 text-[#8a99ad]">
                    <Settings2 size={12} />
                    <span>BTC Price (USD)</span>
                  </div>
                  <input
                    type="number"
                    value={btcPriceUsd}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      if (!isNaN(v) && v > 0) setBtcPriceUsd(v);
                    }}
                    className="w-24 bg-[#08090c] border border-[#202836] rounded px-2 py-1 text-white text-right focus:outline-none"
                  />
                </div>
                <div className="flex justify-between items-center gap-4 text-xs font-mono">
                  <span className="text-[#8a99ad]">USD to THB Rate</span>
                  <input
                    type="number"
                    value={usdToThb}
                    step="0.01"
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      if (!isNaN(v) && v > 0) setUsdToThb(v);
                    }}
                    className="w-24 bg-[#08090c] border border-[#202836] rounded px-2 py-1 text-white text-right focus:outline-none"
                  />
                </div>
              </div>

              {/* Inputs converter group */}
              <div className="space-y-4">
                <div className="space-y-1 bg-[#0e1117] border border-[#202836]/60 p-3 rounded-xl">
                  <label className="text-[10px] font-mono text-yellow-400 uppercase font-bold block mb-1">
                    Bitcoin (BTC)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={btcAmount}
                    onChange={(e) => handleBtcChange(e.target.value)}
                    className="w-full bg-[#08090c] border border-[#202836] rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-yellow-400/50"
                    placeholder="0.00000000"
                  />
                </div>

                <div className="space-y-1 bg-[#0e1117] border border-[#202836]/60 p-3 rounded-xl">
                  <label className="text-[10px] font-mono text-yellow-400 uppercase font-bold block mb-1">
                    Satoshi (Sats)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={satsAmount}
                    onChange={(e) => handleSatsChange(e.target.value)}
                    className="w-full bg-[#08090c] border border-[#202836] rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-yellow-400/50"
                    placeholder="0"
                  />
                </div>

                <div className="space-y-1 bg-[#0e1117] border border-[#202836]/60 p-3 rounded-xl">
                  <label className="text-[10px] font-mono text-yellow-400 uppercase font-bold block mb-1">
                    US Dollar (USD)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={usdAmount}
                    onChange={(e) => handleUsdChange(e.target.value)}
                    className="w-full bg-[#08090c] border border-[#202836] rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-yellow-400/50"
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-1 bg-[#0e1117] border border-[#202836]/60 p-3 rounded-xl">
                  <label className="text-[10px] font-mono text-yellow-400 uppercase font-bold block mb-1">
                    Thai Baht (THB)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={thbAmount}
                    onChange={(e) => handleThbChange(e.target.value)}
                    className="w-full bg-[#08090c] border border-[#202836] rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-yellow-400/50"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── ASSET CHARACTERISTIC COMPARISON MATRIX ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
        <h3 className="text-md font-bold font-mono text-white mb-2 flex items-center gap-2">
          <Table2 className="w-5 h-5 text-yellow-400" />
          {m5Content.matrixTitle[language]}
        </h3>
        <p className="text-xs text-fin-gray mb-6 leading-relaxed">
          {m5Content.matrixDesc[language]}
        </p>

        <div className="overflow-x-auto border border-[#202836] rounded-xl">
          <table className="w-full min-w-[700px] border-collapse text-xs font-mono">
            <thead>
              <tr className="bg-[#0e1117] border-b border-[#202836] text-[#8a99ad]">
                <th className="text-left px-5 py-3.5 font-bold">{m5Content.matrixHeaders.asset[language]}</th>
                <th className="text-left px-5 py-3.5 font-bold">{m5Content.matrixHeaders.scarcity[language]}</th>
                <th className="text-left px-5 py-3.5 font-bold">{m5Content.matrixHeaders.counterpartyRisk[language]}</th>
                <th className="text-left px-5 py-3.5 font-bold">{m5Content.matrixHeaders.yield[language]}</th>
                <th className="text-left px-5 py-3.5 font-bold">{m5Content.matrixHeaders.custody[language]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#202836]/40">
              {m5Content.matrixRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#1c232e]/30 transition-colors bg-[#0e1117]/30">
                  <td className="px-5 py-4 font-bold text-white whitespace-nowrap">{row.asset[language]}</td>
                  <td className="px-5 py-4 text-gray-300">{row.scarcity[language]}</td>
                  <td className="px-5 py-4 text-gray-300">{row.counterpartyRisk[language]}</td>
                  <td className="px-5 py-4 text-gray-300">{row.yield[language]}</td>
                  <td className="px-5 py-4 text-gray-300">{row.custody[language]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── COMPLETION STATUS BANNER ─── */}
      {isCompleted && (
        <div className="border border-yellow-500/30 bg-yellow-500/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                {language === 'en' ? 'MODULE 05 COMPLETION CONFIRMED' : 'ยืนยันการเรียนรู้โมดูล 05 สำเร็จ'}
              </h3>
              <p className="text-xs text-fin-gray">
                {language === 'en'
                  ? 'Satoshi units converter utilized. Sound money parameters and options pricing structures reviewed.'
                  : 'ทำการทดลองเครื่องมือวิเคราะห์อัตราแลกเปลี่ยนซาโตชิเรียบร้อย ตราสารออปชันและคุณสมบัติเงินสะสมได้รับการยอมรับ'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onComplete(false)}
            className="text-xs font-mono text-yellow-400 hover:text-yellow-300 underline bg-transparent border-0 cursor-pointer"
          >
            {language === 'en' ? 'RESET MODULE PROGRESS' : 'รีเซ็ตความคืบหน้าโมดูลนี้'}
          </button>
        </div>
      )}
    </div>
  );
};
