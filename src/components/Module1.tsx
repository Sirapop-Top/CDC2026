import React, { useState } from 'react';
import { Brain, BookOpen, CheckCircle, Circle, HelpCircle, RefreshCw, Award, ArrowRight } from 'lucide-react';
import { content, referenceBooks, quizQuestions } from '../data/content';

interface Module1Props {
  language: 'en' | 'th';
  onComplete: (completed: boolean) => void;
  isCompleted: boolean;
  completedBooks: Record<string, boolean>;
  onToggleBook: (id: string) => void;
}

export const Module1: React.FC<Module1Props> = ({
  language,
  onComplete,
  isCompleted,
  completedBooks,
  onToggleBook,
}) => {
  const m1Content = content.m1;

  // Filter book resources for this module
  const m1Books = referenceBooks.filter((b) => b.module === 'm1');

  // Quiz States
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(isCompleted);
  const [totalScore, setTotalScore] = useState(0);

  const handleSelectAnswer = (qId: number, score: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: score,
    }));
  };

  const handleSubmitQuiz = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all 5 questions are answered
    if (Object.keys(selectedAnswers).length < quizQuestions.length) {
      alert(
        language === 'en'
          ? 'Please answer all questions before submitting.'
          : 'กรุณาตอบคำถามให้ครบทุกข้อก่อนส่งผลประเมิน'
      );
      return;
    }

    const scoreSum = Object.values(selectedAnswers).reduce((sum, val) => sum + val, 0);
    setTotalScore(scoreSum);
    setShowResults(true);
    onComplete(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setTotalScore(0);
    onComplete(false);
  };

  // Determine evaluation text based on score
  const getEvaluation = (score: number) => {
    if (score >= 12) return m1Content.quizEvaluation.high[language];
    if (score >= 6) return m1Content.quizEvaluation.medium[language];
    return m1Content.quizEvaluation.low[language];
  };

  const getScoreColor = (score: number) => {
    if (score >= 12) return 'text-[#00e676]';
    if (score >= 6) return 'text-[#ffca28]';
    return 'text-[#ff3d00]';
  };

  return (
    <div className="space-y-8 text-white pb-12">
      {/* ─── MODULE HEADER ─── */}
      <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">MODULE 01</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            {m1Content.title[language]}
          </h1>
          <p className="text-fin-gray text-sm md:text-base max-w-3xl leading-relaxed">
            {m1Content.subtitle[language]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ─── LEFT: READINGS & SYLLABUS TEXT (2 COLS) ─── */}
        <div className="lg:col-span-2 space-y-8">
          {/* REFERENCE BOOKS */}
          <section className="bg-[#151a22] border border-[#202836] rounded-2xl p-6">
            <h2 className="text-md font-bold font-mono text-white mb-4 flex items-center gap-2 border-b border-[#202836] pb-3">
              <BookOpen className="w-5 h-5 text-purple-400" />
              {language === 'en' ? 'MODULE MATERIALS' : 'เอกสารและหนังสือประจำบทเรียน'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {m1Books.map((book) => {
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
                          <span className="text-[10px] font-mono text-purple-400 font-bold block mb-1">
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
              <Award className="w-5 h-5 text-purple-400" />
              {language === 'en' ? 'Core Concepts Overview' : 'สรุปแนวคิดหลักโมดูล 1'}
            </h2>
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{m1Content.p1[language]}</p>
              <p>{m1Content.p2[language]}</p>
              <p>{m1Content.p3[language]}</p>
            </div>
            <div className="border-t border-[#202836] pt-4 mt-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#ffb300] mb-3">
                {language === 'en' ? 'Key Syllabus Takeaways' : 'ประเด็นสรุปหลักสูตร'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {m1Content.keyTakeaways.map((takeaway, i) => (
                  <div key={i} className="bg-[#0e1117] border border-[#202836] p-4 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-purple-400 font-mono">0{i + 1}</span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {takeaway[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ─── RIGHT: PSYCHOLOGY ASSESSMENT QUIZ (1 COL) ─── */}
        <div className="space-y-6">
          <div className="bg-[#151a22] border border-[#202836] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full">
            <div>
              <h2 className="text-md font-bold font-mono text-white mb-1 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#ffca28]" />
                {m1Content.quizTitle[language]}
              </h2>
              <p className="text-fin-gray text-xs mb-6 leading-relaxed">
                {m1Content.quizDesc[language]}
              </p>

              {!showResults ? (
                <form onSubmit={handleSubmitQuiz} className="space-y-6">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="space-y-2 border-b border-[#202836]/40 pb-4 last:border-b-0">
                      <p className="text-xs font-semibold text-white leading-relaxed">
                        <span className="font-mono text-purple-400 mr-1">{idx + 1}.</span>
                        {q.question[language]}
                      </p>
                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === opt.score;
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleSelectAnswer(q.id, opt.score)}
                              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs leading-snug transition-all flex items-start gap-2 cursor-pointer ${
                                isSelected
                                  ? 'bg-purple-500/10 border border-purple-500 text-white'
                                  : 'bg-[#0e1117] border border-[#202836] text-[#8a99ad] hover:text-white hover:border-[#8a99ad]/30'
                              }`}
                            >
                              <span
                                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                                  isSelected ? 'border-purple-400 bg-purple-400' : 'border-fin-gray/40'
                                }`}
                              >
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-bg-darkest" />}
                              </span>
                              <span>{opt.text[language]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full bg-[#00e676] hover:bg-[#00c853] text-[#08090c] font-bold font-mono py-3 px-4 rounded-xl transition cursor-pointer active:scale-98 text-xs flex items-center justify-center gap-1 shadow-md shadow-[#00e676]/10"
                  >
                    <span>{m1Content.quizSubmit[language].toUpperCase()}</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              ) : (
                /* Results View */
                <div className="space-y-6">
                  <div className="bg-[#0e1117] border border-[#202836] rounded-xl p-5 text-center space-y-3">
                    <p className="text-[10px] text-fin-gray font-mono uppercase tracking-widest">
                      {m1Content.quizScore[language]}
                    </p>
                    <div className="text-4xl font-extrabold font-mono">
                      <span className={getScoreColor(totalScore)}>{totalScore}</span>
                      <span className="text-fin-gray text-lg"> / 15</span>
                    </div>
                    <p className="text-xs text-gray-200 leading-relaxed font-sans px-2">
                      {getEvaluation(totalScore)}
                    </p>
                  </div>

                  {/* Question-by-question Expalantions */}
                  <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                    <p className="text-xs font-mono text-[#ffb300] uppercase tracking-wider">
                      {language === 'en' ? 'Review & Explanations' : 'รีวิวความรู้และคำอธิบาย'}
                    </p>
                    {quizQuestions.map((q, idx) => (
                      <div key={q.id} className="bg-[#0e1117] border border-[#202836]/60 p-3.5 rounded-lg space-y-2">
                        <p className="text-xs font-bold text-white leading-relaxed">
                          <span className="font-mono text-purple-400 mr-1">{idx + 1}.</span>
                          {q.question[language]}
                        </p>
                        <p className="text-xs text-fin-gray leading-relaxed italic border-l-2 border-purple-500/40 pl-3">
                          {q.explanation[language]}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleResetQuiz}
                    className="w-full bg-[#202836] hover:bg-[#2d3748] text-white font-mono py-2.5 px-4 rounded-xl transition cursor-pointer text-xs flex items-center justify-center gap-1"
                  >
                    <RefreshCw size={12} />
                    <span>{m1Content.quizReset[language].toUpperCase()}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── COMPLETION STATUS BANNER ─── */}
      {isCompleted && (
        <div className="border border-purple-500/30 bg-purple-500/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                {language === 'en' ? 'MODULE 01 COMPLETION CONFIRMED' : 'ยืนยันการเรียนรู้โมดูล 01 สำเร็จ'}
              </h3>
              <p className="text-xs text-fin-gray">
                {language === 'en'
                  ? 'Trader mindset assessment is submitted. Take the lessons of money behavior into position sizing.'
                  : 'ทำการทำประเมินและทบทวนจิตวิทยาเรียบร้อย สามารถนำแนวคิดนี้ไปประยุกต์ร่วมกับการประเมินความเสี่ยง'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onComplete(false)}
            className="text-xs font-mono text-purple-400 hover:text-purple-300 underline bg-transparent border-0 cursor-pointer"
          >
            {language === 'en' ? 'RESET MODULE PROGRESS' : 'รีเซ็ตความคืบหน้าโมดูลนี้'}
          </button>
        </div>
      )}
    </div>
  );
};
