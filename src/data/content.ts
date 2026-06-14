export interface Translation {
  en: string;
  th: string;
}

export interface QuizQuestion {
  id: number;
  question: Translation;
  options: {
    text: Translation;
    score: number;
  }[];
  explanation: Translation;
}

export interface PatternData {
  id: string;
  name: Translation;
  desc: Translation;
  validation: Translation[];
  invalidation: Translation[];
}

export interface BookSummary {
  title: Translation;
  author: Translation;
  keyPoints: Translation[];
}

export interface ContentType {
  meta: {
    title: Translation;
    subtitle: Translation;
  };
  navbar: {
    dashboard: Translation;
    languageToggle: Translation;
    modules: Translation;
    activeStatus: Translation;
  };
  dashboard: {
    welcomeTitle: Translation;
    welcomeDesc: Translation;
    progressHeader: Translation;
    progressSub: Translation;
    statsCardTitle: Translation;
    booksReadLabel: Translation;
    modulesCompletedLabel: Translation;
    recentHighlightsLabel: Translation;
    highlightsDesc: Translation;
    quickStats: {
      totalBooks: Translation;
      statusComplete: Translation;
      statusInProgress: Translation;
      statusNotStarted: Translation;
    };
    quotesTitle: Translation;
    featuredBooks: Translation;
    curriculumSummary: Translation;
  };
  m1: {
    title: Translation;
    subtitle: Translation;
    p1: Translation;
    p2: Translation;
    p3: Translation;
    keyTakeaways: Translation[];
    quizTitle: Translation;
    quizDesc: Translation;
    quizReset: Translation;
    quizSubmit: Translation;
    quizScore: Translation;
    quizEvaluation: {
      high: Translation;
      medium: Translation;
      low: Translation;
    };
  };
  m2: {
    title: Translation;
    subtitle: Translation;
    p1: Translation;
    p2: Translation;
    p3: Translation;
    patternGalleryTitle: Translation;
    patternGalleryDesc: Translation;
    hoverInstruction: Translation;
    validationRules: Translation;
    invalidationRules: Translation;
  };
  m3: {
    title: Translation;
    subtitle: Translation;
    p1: Translation;
    p2: Translation;
    p3: Translation;
    simulatorTitle: Translation;
    simulatorDesc: Translation;
    inputs: {
      winRate: Translation;
      riskReward: Translation;
      tradeCount: Translation;
      startCapital: Translation;
      riskPerTrade: Translation;
    };
    runSim: Translation;
    results: {
      finalEquity: Translation;
      netProfit: Translation;
      maxDrawdown: Translation;
      winCount: Translation;
      lossCount: Translation;
    };
  };
  m4: {
    title: Translation;
    subtitle: Translation;
    p1: Translation;
    p2: Translation;
    p3: Translation;
    calculatorTitle: Translation;
    calculatorDesc: Translation;
    inputs: {
      accountSize: Translation;
      riskPercent: Translation;
      entryPrice: Translation;
      stopLoss: Translation;
    };
    outputs: {
      positionUnits: Translation;
      positionValue: Translation;
      maxDollarRisk: Translation;
      stopLossDist: Translation;
      leverageRatio: Translation;
    };
    warnings: {
      invalidStopLoss: Translation;
      riskTooHigh: Translation;
      paramsRequired: Translation;
    };
  };
  m5: {
    title: Translation;
    subtitle: Translation;
    p1: Translation;
    p2: Translation;
    p3: Translation;
    converterTitle: Translation;
    converterDesc: Translation;
    matrixTitle: Translation;
    matrixDesc: Translation;
    matrixHeaders: {
      asset: Translation;
      scarcity: Translation;
      counterpartyRisk: Translation;
      yield: Translation;
      custody: Translation;
    };
    matrixRows: {
      asset: Translation;
      scarcity: Translation;
      counterpartyRisk: Translation;
      yield: Translation;
      custody: Translation;
    }[];
  };
  m6: {
    title: Translation;
    subtitle: Translation;
    p1: Translation;
    p2: Translation;
    p3: Translation;
    visualizerTitle: Translation;
    visualizerDesc: Translation;
    inputs: {
      monthlyContrib: Translation;
      annualYield: Translation;
      years: Translation;
    };
    outputs: {
      totalContributed: Translation;
      totalInterest: Translation;
      futureValue: Translation;
    };
  };
}

export const content: ContentType = {
  meta: {
    title: {
      en: "CDC 2026 Study Summary Dashboard",
      th: "CDC 2026 แดชบอร์ดสรุปตำราเรียน"
    },
    subtitle: {
      en: "Bilingual Reference Summary",
      th: "บทสรุปตำราอ้างอิงสองภาษา"
    }
  },
  navbar: {
    dashboard: {
      en: "Executive Summary",
      th: "แดชบอร์ดสรุป"
    },
    languageToggle: {
      en: "EN / TH",
      th: "TH / EN"
    },
    modules: {
      en: "Modules",
      th: "บทเรียน"
    },
    activeStatus: {
      en: "STUDY MONITOR ACTIVE",
      th: "ระบบการเรียนรู้กำลังทำงาน"
    }
  },
  dashboard: {
    welcomeTitle: {
      en: "CDC 2026 Systematic Trading Pre-Study Dashboard",
      th: "CDC 2026 แดชบอร์ดสรุปเตรียมความพร้อมการเทรดอย่างเป็นระบบ"
    },
    welcomeDesc: {
      en: "Welcome to the study companion interface. Below is your progress summary across the 6 educational modules and 10 master reference books located in CDC2026's Material. Complete quizzes, inspect charts, and calculators to validate your trading foundation.",
      th: "ยินดีต้อนรับสู่ระบบจำลองเตรียมความพร้อม ด้านล่างนี้คือสรุปความคืบหน้าการศึกษาบทเรียนทั้ง 6 โมดูล และตำราอ้างอิงหลัก 10 เล่มในโฟลเดอร์สื่อการสอนของ CDC ทำการทำประเมิน ศึกษาโมเดล และทดลองใช้เครื่องมือเพื่อยืนยันรากฐานการเทรดของคุณ"
    },
    progressHeader: {
      en: "Curriculum Modules Progress",
      th: "ความคืบหน้าบทเรียนหลักสูตร"
    },
    progressSub: {
      en: "Click any card to study summaries and access interactive features.",
      th: "คลิกบนการ์ดแต่ละใบเพื่ออ่านสรุปบทเรียนและใช้งานฟีเจอร์คำนวณจำลองต่างๆ"
    },
    statsCardTitle: {
      en: "Study Progress Statistics",
      th: "สถิติการเรียนรู้"
    },
    booksReadLabel: {
      en: "Reference Books Read",
      th: "ตำราอ้างอิงที่อ่านแล้ว"
    },
    modulesCompletedLabel: {
      en: "Interactive Tasks Completed",
      th: "ภารกิจจำลองที่เสร็จสิ้น"
    },
    recentHighlightsLabel: {
      en: "Study Highlights",
      th: "ไฮไลท์ความรู้สำคัญ"
    },
    highlightsDesc: {
      en: "Systematic trading separates emotions from executions. Ensure you fully comprehend Van Tharp's Expectancy concept (Module 3) and Risk sizing rules (Module 4) before advancing.",
      th: "การเทรดอย่างเป็นระบบแยกแยะอารมณ์ออกจากการดำเนินการ มั่นใจว่าคุณเข้าใจแนวคิดค่าคาดหวังของ Van Tharp (โมดูล 3) และกฎการคำนวณขนาดความเสี่ยง (โมดูล 4) ครบถ้วนก่อนก้าวไปข้างหน้า"
    },
    quickStats: {
      totalBooks: {
        en: "Total Reference Books",
        th: "ตำราอ้างอิงทั้งหมด"
      },
      statusComplete: {
        en: "Read / Done",
        th: "อ่านแล้ว / เสร็จสิ้น"
      },
      statusInProgress: {
        en: "In Progress",
        th: "กำลังดำเนินการ"
      },
      statusNotStarted: {
        en: "Not Read / Not Done",
        th: "ยังไม่ได้อ่าน / ยังไม่ทำ"
      }
    },
    quotesTitle: {
      en: "Trading Wisdom Quotes",
      th: "โควทคำคมข้อคิดการเทรด"
    },
    featuredBooks: {
      en: "Master Reference Materials",
      th: "หนังสืออ้างอิงหลักในแต่ละบทเรียน"
    },
    curriculumSummary: {
      en: "The CDC pre-study curriculum gathers essential knowledge from the following industry classics:",
      th: "หลักสูตรเตรียมความพร้อมของ CDC รวบรวมองค์ความรู้จากตำราชั้นครูของโลกการเงินต่อไปนี้:"
    }
  },
  m1: {
    title: {
      en: "M1: Awakening (Money 101 & Mindset)",
      th: "M1: Awakening (รากฐานแนวคิด & จิตวิทยาการเทรด)"
    },
    subtitle: {
      en: "Summarizing wealth psychology, probability vs. gambling, and emotional trader cycles.",
      th: "สรุปความเข้าใจจิตวิทยาการเงิน ความน่าจะเป็นเทียบกับการพนัน และวงจรอารมณ์ของนักเทรด"
    },
    p1: {
      en: "Before writing backtest code or looking at technical charts, a trader must resolve their relationship with money and risk. Trading is a game of probability where capital preservation is key, whereas gambling is an emotional chase for jackpot payoffs.",
      th: "ก่อนการเริ่มเขียนโค้ดเพื่อทดสอบระบบหรือการวิเคราะห์กราฟเทคนิค นักเทรดต้องเข้าใจพฤติกรรมความสัมพันธ์ระหว่างตัวเองกับเงินและความเสี่ยงเสียก่อน การเทรดคือเรื่องของคณิตศาสตร์ความน่าจะเป็นและการรักษาเงินต้น ขณะที่การพนันคือการไล่ตามรางวัลใหญ่ด้วยอารมณ์เป็นหลัก"
    },
    p2: {
      en: "Morgan Housel explains that doing well with money is about behavior, not intelligence. Having 'room for error' is the most underappreciated asset in portfolio design.",
      th: "Morgan Housel อธิบายว่าความสำเร็จทางการเงินนั้นเกี่ยวกับ 'พฤติกรรม' มากกว่า 'ความฉลาด' การมี 'พื้นที่ปลอดภัยเผื่อความผิดพลาด (Room for Error)' คือสินทรัพย์ที่สำคัญที่สุดในการวางโครงสร้างการลงทุนที่มักถูกละเลยมากที่สุด"
    },
    p3: {
      en: "Mark Douglas outlines that consistency requires thinking in probabilities. You must accept that there is a random distribution between wins and losses for any system, and accept the risk of the trade before executing.",
      th: "Mark Douglas ชี้ให้เห็นว่าความสม่ำเสมอในผลกำไรต้องการการคิดในรูปแบบของ 'ความน่าจะเป็น' คุณต้องยอมรับว่าผลลัพธ์การแพ้ชนะถูกกระจายอย่างเป็นสุ่ม และคุณต้องน้อมรับความเสี่ยงของไม้เทรดนั้นๆ อย่างจริงใจก่อนที่จะส่งคำสั่ง"
    },
    keyTakeaways: [
      {
        en: "Psychology of Money: Staying wealthy requires a combination of frugality and paranoia; getting wealthy is about optimism and risk-taking.",
        th: "จิตวิทยาการเงิน: การรักษาความมั่นคงต้องการความประหยัดและความระมัดระวัง (Paranoia) ส่วนการสร้างความมั่งคั่งคือเรื่องของความหวังและการยอมรับความเสี่ยง"
      },
      {
        en: "Trading in the Zone: The market does not care about your beliefs. You must accept uncertainty and trade without emotional fear.",
        th: "การเทรดแบบสถิตในโซน: ตลาดไม่สนใจความเชื่อส่วนตัวของคุณ คุณต้องยอมรับความไม่แน่นอนและส่งคำสั่งเทรดโดยปราศจากความหวาดกลัว"
      },
      {
        en: "Probability Mindset: Each trade is just one independent variable in a sequence of hundreds. Do not judge a system by a single win or loss.",
        th: "แนวคิดความน่าจะเป็น: การเทรดแต่ละไม้คือสุ่มที่เป็นอิสระในสถิติยาวเป็นร้อยรอบ อย่าตัดสินความคุ้มค่าของระบบจากการชนะหรือแพ้แค่ไม้เดียว"
      }
    ],
    quizTitle: {
      en: "Trader Psychology & Bias Quiz",
      th: "ทำประเมินจิตวิทยาและอคตินักเทรด"
    },
    quizDesc: {
      en: "Evaluate how well you handle situations involving FOMO, Loss Aversion, and Systematic Discipline. Answer the questions honestly based on your actual responses to the market.",
      th: "ประเมินว่าคุณจัดการกับอารมณ์ FOMO, การกลัวความสูญเสีย (Loss Aversion) และวินัยการทำตามระบบอย่างไร ตอบคำถามเหล่านี้ตามความรู้สึกจริงของคุณหน้างานตลาด"
    },
    quizReset: {
      en: "Retake Quiz",
      th: "ทำแบบประเมินอีกครั้ง"
    },
    quizSubmit: {
      en: "Submit Assessment",
      th: "ส่งผลประเมิน"
    },
    quizScore: {
      en: "Psychology Score",
      th: "คะแนนดัชนีจิตวิทยา"
    },
    quizEvaluation: {
      high: {
        en: "Excellent Probabilistic Thinker! You display professional discipline, accept risk, and avoid emotional chase biases.",
        th: "ระดับดีเยี่ยม! คุณมีความคิดเชิงสถิติความน่าจะเป็นสูงมาก มีวินัยแบบมืออาชีพ ยอมรับความเสี่ยง และหลีกเลี่ยงอคติทางอารมณ์"
      },
      medium: {
        en: "Moderate Discipline. You understand theory but remain vulnerable to FOMO or moving stop-losses under pressure.",
        th: "ระดับปานกลาง คุณเข้าใจทฤษฎีดีแต่ยังมีโอกาสหลุดทำตามอารมณ์ FOMO หรือขยับหนีจุด Stop Loss เมื่อเกิดความกดดันจริง"
      },
      low: {
        en: "High Gambler Bias. You trade based on emotion, struggle with loss aversion, and require strict system enforcement.",
        th: "ระดับควรปรับปรุง คุณยังมีพฤติกรรมไล่ตามอารมณ์คล้ายการพนัน ไม่ยอมตัดขาดทุน (Loss Aversion) และต้องบังคับตนเองทำตามกฎอย่างเคร่งครัด"
      }
    }
  },
  m2: {
    title: {
      en: "M2: Foundation (Technical Analysis & Waves)",
      th: "M2: Foundation (การวิเคราะห์ทางเทคนิค & คลื่นคลื่นวิเคราะห์)"
    },
    subtitle: {
      en: "Summarizing support/resistance, trends, Fibonacci, and Elliot Wave cycles.",
      th: "สรุปการหาแนวรับ/แนวต้าน เทรนด์ ฟิโบนัชชี และวงจรทฤษฎีคลื่นเอลเลียต"
    },
    p1: {
      en: "Technical analysis uses historical market activity (price patterns, volumes) to formulate systematic entries and exits. John Murphy outlines that price movements discount everything, prices move in trends, and history repeats itself.",
      th: "การวิเคราะห์ทางเทคนิคใช้ข้อมูลราคาและปริมาณการซื้อขายในอดีตมาวิเคราะห์แนวโน้มเพื่อวางแผนซื้อขาย John Murphy สรุปว่าราคาสะท้อนข้อมูลทุกอย่างแล้ว (Price discounts everything) ราคาเคลื่อนที่อย่างมีทิศทาง (Trends) และพฤติกรรมตลาดมักซ้ำรอยเดิมในอดีต"
    },
    p2: {
      en: "Elliott Wave theory asserts that market price movements are driven by crowd psychology and swing in repeating fractal waves. A complete cycle consists of an 8-wave structure: 5 motive impulse waves in the direction of the trend, followed by 3 corrective waves (ABC).",
      th: "ทฤษฎีคลื่นเอลเลียต (Elliott Wave) อธิบายว่าการเคลื่อนที่ของราคาเกิดจากจิตวิทยาฝูงชนที่เป็นระลอกคลื่นแบบแฟร็กทัลซ้ำๆ วงจรที่สมบูรณ์ประกอบด้วยโครงสร้างคลื่น 8 ลูก: คลื่นขับเคลื่อนหลักขึ้น 5 ลูก (Impulse) ตามทิศทางเทรนด์หลัก ตามด้วยคลื่นปรับฐานย่อตัว 3 ลูก (Corrective ABC)"
    },
    p3: {
      en: "Fibonacci numbers are mathematically deeply intertwined with Elliott Waves. Retracement levels (38.2%, 50%, 61.8%) identify where corrective waves are likely to find support, while expansions identify impulse price targets.",
      th: "ตัวเลขสัดส่วนฟิโบนัชชี (Fibonacci) มีความสัมพันธ์ทางคณิตศาสตร์อย่างลึกซึ้งกับทฤษฎีคลื่นเอลเลียต สัดส่วนการย่อตัว (เช่น 38.2%, 50%, 61.8%) ใช้คาดการณ์จุดกลับตัวของคลื่นปรับฐาน ส่วนสัดส่วนการขยายตัว (Expansion) ใช้กำหนดเป้าหมายราคาของคลื่นขับเคลื่อนหลัก"
    },
    patternGalleryTitle: {
      en: "Visual Pattern Gallery",
      th: "คลังแสดงรูปแบบแผนภาพกราฟเทคนิค"
    },
    patternGalleryDesc: {
      en: "Hover or click on the pattern cards below to examine the vector geometric diagrams, validation criteria, and key invalidation rules.",
      th: "ชี้เมาส์หรือคลิกบนการ์ดรูปแบบด้านล่างเพื่อศึกษารายละเอียดภาพเวกเตอร์ กฎเกณฑ์การยืนยันหน้าเทรด และจุดที่ถือว่ารูปแบบล้มเหลว"
    },
    hoverInstruction: {
      en: "Click cards to expand/collapse validation and invalidation rules.",
      th: "คลิกบนกล่องการ์ดเพื่อขยาย/ย่อข้อมูลกฎเกณฑ์และเงื่อนไข"
    },
    validationRules: {
      en: "Validation Rules",
      th: "กฎเกณฑ์การยืนยันรูปแบบ"
    },
    invalidationRules: {
      en: "Invalidation Rules",
      th: "เงื่อนไขการยกเลิกรองรับรูปแบบ"
    }
  },
  m3: {
    title: {
      en: "M3: Builder (System Design & Code)",
      th: "M3: Builder (การออกแบบระบบเทรด & การเขียนโค้ด)"
    },
    subtitle: {
      en: "Summarizing coding rules, system components, expectancy, and backtesting pitfalls.",
      th: "สรุปการตั้งกฎเขียนระบบ ส่วนประกอบของระบบเทรด ค่าคาดหวัง และข้อควรระวังในการทดสอบระบบ"
    },
    p1: {
      en: "Systematic trading removes human discretion from trade execution. Van Tharp defines that a complete trading system must specify: setup filters, entry triggers, worst-case stop-losses, profit-taking exits, and position sizing models.",
      th: "การเทรดอย่างเป็นระบบยึดกฎที่ชัดเจนเพื่อตัดอารมณ์และวิจารณญาณส่วนบุคคลออกไป Van Tharp สรุปว่าระบบเทรดที่สมบูรณ์ต้องระบุ: ตัวคัดกรองสัญญาณ, เงื่อนไขจุดเข้าซื้อ (Entry), จุดตัดขาดทุนเมื่อเกิดกรณีเลวร้ายสุด (Stop Loss), จุดขายทำกำไร (Exit) และโมเดลขนาดการลงทุน"
    },
    p2: {
      en: "Designing systems requires scripting rules precisely. Pine Script (TradingView) is used to automate backtesting. A common error is curve-fitting (overfitting rules to past historical noise), which leads to system failure in live trading.",
      th: "การสร้างระบบเทรดจำเป็นต้องเข้ารหัสเงื่อนไขให้เป็นรูปธรรม ภาษา Pine Script (TradingView) มักใช้สร้างกฎสำหรับรันการทดสอบย้อนหลัง (Backtest) ข้อผิดพลาดสำคัญคือการปรับจูนกฎให้ดีเกินจริง (Overfitting) ซึ่งจะนำไปสู่ความล้มเหลวในการเทรดในตลาดจริง"
    },
    p3: {
      en: "The mathematically most critical component of system design is Expectancy (using R-multiples). Expectancy represents the average return you can expect from a system per dollar risked. Gamblers look at win rate; system builders design for high expectancy.",
      th: "องค์ประกอบที่สำคัญที่สุดของระบบเทรดคือ ค่าคาดหวังผลกำไร (Expectancy) ในรูปตัวคูณความเสี่ยง (R-Multiples) ซึ่งบอกว่าโดยเฉลี่ยแล้วไม้เทรดนั้นสร้างผลกำไรกี่บาทต่อบาทที่ยอมเสี่ยง นักพนันจะโฟกัสอัตราชนะ แต่นักสร้างระบบจะออกแบบระบบให้มีค่าคาดหวังที่เป็นบวกสูงๆ"
    },
    simulatorTitle: {
      en: "Expectancy & Equity Curve Simulator",
      th: "ตัวแบบจำลองกราฟการเติบโตเงินทุนตามสถิติ"
    },
    simulatorDesc: {
      en: "Configure the parameters below to run a Monte Carlo simulation. See how a low win rate (e.g. 40%) system with a high Risk-to-Reward ratio (e.g. 1:3) yields robust long-term portfolio growth.",
      th: "ตั้งค่าพารามิเตอร์ด้านล่างเพื่อรันระบบแบบสุ่ม สังเกตว่าระบบที่มีอัตราชนะต่ำ (เช่น 40%) แต่มีสัดส่วนความคุ้มค่า (R:R) ที่สูง (เช่น 1:3) สามารถสร้างยอดเงินทุนเติบโตอย่างมั่นคงในระยะยาวได้"
    },
    inputs: {
      winRate: {
        en: "Win Rate (%)",
        th: "อัตราชนะ (Win Rate %)"
      },
      riskReward: {
        en: "Risk-to-Reward Ratio (1:R)",
        th: "อัตราส่วนความคุ้มค่า (Risk-to-Reward 1:R)"
      },
      tradeCount: {
        en: "Simulated Trade Count",
        th: "จำนวนรอบไม้จำลอง"
      },
      startCapital: {
        en: "Starting Capital ($)",
        th: "เงินทุนเริ่มต้นสำหรับจำลอง ($)"
      },
      riskPerTrade: {
        en: "Risk per Trade (% of Capital)",
        th: "เปอร์เซ็นต์ความเสี่ยงต่อไม้ (% ของเงินทุน)"
      }
    },
    runSim: {
      en: "Run Monte Carlo Simulation",
      th: "รันแบบจำลองมอนเตการ์โล"
    },
    results: {
      finalEquity: {
        en: "Ending Balance",
        th: "ยอดเงินทุนปลายทาง"
      },
      netProfit: {
        en: "Net Profit / Loss",
        th: "กำไร / ขาดทุนสุทธิ"
      },
      maxDrawdown: {
        en: "Max Drawdown (%)",
        th: "การย่อตัวพอร์ตสูงสุด %"
      },
      winCount: {
        en: "Winning Trades",
        th: "จำนวนรอบชนะ"
      },
      lossCount: {
        en: "Losing Trades",
        th: "จำนวนรอบแพ้"
      }
    }
  },
  m4: {
    title: {
      en: "M4: Manager (Risk Management & Portfolio)",
      th: "M4: Manager (การควบคุมความเสี่ยง & พอร์ตโฟลิโอ)"
    },
    subtitle: {
      en: "Summarizing risk metrics, Van Tharp position sizing models, and risk parameters.",
      th: "สรุปเครื่องมือวัดผลความเสี่ยง โมดูลการกำหนดขนาดไม้ของ Van Tharp และพารามิเตอร์จำกัดเสี่ยง"
    },
    p1: {
      en: "Risk management is the only aspect of trading that guarantees survival. You cannot control price direction; you can only control how much money you lose if you are wrong. Sizing dictates the velocity of capital change.",
      th: "การบริหารความเสี่ยงคือสิ่งเดียวที่การันตีสัจธรรมการรอดชีวิตในตลาด คุณไม่มีทางบังคับราคาได้ สิ่งเดียวที่คุณทำได้คือการควบคุมมูลค่าความสูญเสียในแต่ละครั้งเมื่อเดาราคาผิดพลาด การกำหนดขนาดไม้เทรดกำหนดความเร็วของการเติบโตของทุน"
    },
    p2: {
      en: "Van Tharp describes position sizing as the part of the system that tells you 'how much' to trade. The core model is the CPR model: Capital at Risk = (Entry - Stop Loss) * Position Units. You should limit risk per trade to 1% to 2% of total equity.",
      th: "Van Tharp ระบุว่าระบบ Position Sizing คือองค์ประกอบที่ตอบคำถามว่าคุณควรเทรดเป็นจำนวน 'เท่าใด' โมเดลหลักคือแบบแผน CPR: ทุนที่เสี่ยง (Capital at Risk) = (ราคาซื้อ - จุด Stop Loss) * ปริมาณเข้าซื้อ คุณควรจำกัดงบตัดความเสี่ยงไว้ที่ 1% ถึง 2% ของขนาดพอร์ตรวมเสมอ"
    },
    p3: {
      en: "Layering portfolios and maintaining dry cash reserve limits overall leverage exposure. By ensuring stop loss distance corresponds to position size, you decouple absolute dollar losses from market volatility levels.",
      th: "การวางสัดส่วนกระจายความเสี่ยงในพอร์ตและการกันยอดเงินสดสำรองช่วยควบคุมขอบเขตความเสี่ยงรวม (Leverage) การคำนวณจุด Stop Loss สัมพันธ์กับขนาดไม้ซื้อจะช่วยแยกมูลค่าการสูญเสียทางการเงินออกจากความผันผวนของราคาตลาดได้"
    },
    calculatorTitle: {
      en: "CDC Position Sizing Calculator",
      th: "เครื่องมือคำนวณขนาดการลงทุน CDC Position Sizer"
    },
    calculatorDesc: {
      en: "Input your portfolio size and trade levels to compute the exact asset units to purchase, guaranteeing your loss is limited to your pre-defined risk budget.",
      th: "ระบุขนาดของทุนและราคาระดับหน้าเทรดเพื่อคำนวณจำนวนหน่วยที่จะเข้าซื้อ เพื่อรับประกันว่าหากพ่ายแพ้ ยอดความเสียหายจะถูกจำกัดภายในงบความเสี่ยงที่ตั้งไว้เป๊ะๆ"
    },
    inputs: {
      accountSize: {
        en: "Account Balance ($)",
        th: "ขนาดเงินทุนพอร์ตรวมทั้งหมด ($)"
      },
      riskPercent: {
        en: "Risk Limit per Trade (%)",
        th: "ความเสี่ยงยอมรับได้ต่อไม้ %"
      },
      entryPrice: {
        en: "Asset Entry Price ($)",
        th: "ระดับราคาที่จะเข้าซื้อ ($)"
      },
      stopLoss: {
        en: "Stop Loss Price ($)",
        th: "ระดับราคาตัดขาดทุน Stop Loss ($)"
      }
    },
    outputs: {
      positionUnits: {
        en: "Position Units to Buy",
        th: "จำนวนหน่วยที่ต้องเข้าซื้อ"
      },
      positionValue: {
        en: "Total Position Value",
        th: "มูลค่าไม้สัญญารวมทั้งหมด"
      },
      maxDollarRisk: {
        en: "Max Dollar Risk Exposure",
        th: "ความเสี่ยงการสูญเสียสูงสุด ($)"
      },
      stopLossDist: {
        en: "Stop Loss Distance",
        th: "ระยะทางตัดขาดทุน %"
      },
      leverageRatio: {
        en: "Portfolio Leverage Ratio",
        th: "อัตราส่วนการใช้เลเวอเรจในพอร์ต"
      }
    },
    warnings: {
      invalidStopLoss: {
        en: "Warning: Stop Loss price must be below entry price for a Long trade setup.",
        th: "ข้อควรระวัง: ราคาตัดขาดทุน Stop Loss จะต้องอยู่ต่ำกว่าราคาเข้าซื้อสัญญาสถานะขาขึ้น"
      },
      riskTooHigh: {
        en: "Caution: Recommended leverage exceeds 3x. Consider lowering risk percentage.",
        th: "คำเตือน: เลเวอเรจแนะนำเกิน 3 เท่าของพอร์ต พิจารณาลดระดับเปอร์เซ็นต์ความเสี่ยงต่อไม้ลง"
      },
      paramsRequired: {
        en: "Enter valid numbers. Stop Loss price must be strictly lower than Entry price.",
        th: "กรุณาระบุตัวเลขให้ครบถ้วน โดยจุด Stop Loss จะต้องต่ำกว่าราคาจุดเข้าซื้อ"
      }
    }
  },
  m5: {
    title: {
      en: "M5: Bitcoin & Markets (Macro & Derivatives)",
      th: "M5: Bitcoin & Markets (ภาพรวมแมคโคร & อนุพันธ์)"
    },
    subtitle: {
      en: "Summarizing sound money history, Bitcoin absolute scarcity, and futures leverage risk.",
      th: "สรุปประวัติศาสตร์เรื่องเงิน ความจำกัดถาวรของบิตคอยน์ และความเสี่ยงจากการใช้เลเวอเรจอนุพันธ์"
    },
    p1: {
      en: "Throughout history, money has evolved toward harder forms (e.g. barter to gold to fiat). Hard money possesses high stock-to-flow ratios (hard to produce more relative to existing supply). Fiat currencies lack scarcity and systematically lose buying power over time.",
      th: "ตลอดประวัติศาสตร์ รูปแบบเงินวิวัฒนาการไปสู่รูปแบบที่ผลิตเพิ่มได้ยากขึ้นเสมอ (จากเปลือกหอย สู่ทองคำ สู่สกุลเงินตราเฟียต) เงินที่แข็งแกร่ง (Hard Money) จะมีอัตราส่วนสต็อกต่อกำลังการผลิตเพิ่มขึ้นใหม่ (Stock-to-Flow) สูง ส่วนเงินกระดาษเฟียตไม่มีความหายาก และมูลค่าลดลงอย่างต่อเนื่อง"
    },
    p2: {
      en: "Bitcoin represents the invention of absolute scarcity. With its supply capped strictly at 21,000,000 units and peer-to-peer decentralized validation, it acts as a digital sovereign store of value, eliminating third-party counterparty risk.",
      th: "บิตคอยน์ถือเป็นนวัตกรรมแรกที่มีความจำกัดถาวรอย่างสมบูรณ์แบบ ด้วยการจำกัดอุปทานรวมไว้ที่ 21,000,000 เหรียญและมีระบบตรวจสอบแบบกระจายศูนย์ ทำให้ทำหน้าที่เป็นเครื่องมือเก็บรักษามูลค่าดิจิทัลที่เป็นอิสระ ปราศจากความเสี่ยงจากสถาบันตัวกลาง"
    },
    p3: {
      en: "Derivative markets (Futures, Options) provide financial leverage but amplify portfolio risk. John Hull details option pricing models and arbitrage mechanics. Systematic traders must manage contract margins strictly to avoid liquidations.",
      th: "ตลาดอนุพันธ์ (ฟิวเจอร์ส, ออปชัน) ช่วยเพิ่มเลเวอเรจทางการเงิน แต่ก็ทวีความเสี่ยงพอร์ตด้วยเช่นกัน John Hull อธิบายเรื่องทฤษฎีการตั้งราคาสัญญาและการทำกำไรชดเชยอาบิทราจ นักเทรดระบบต้องคุมหลักประกันของสัญญาอย่างเข้มงวดเพื่อป้องกันการบังคับขายล้างสถานะ (Liquidation)"
    },
    converterTitle: {
      en: "Bitcoin Satoshi Converter",
      th: "เครื่องมือคำนวณแปลงหน่วยซาโตชิ"
    },
    converterDesc: {
      en: "Satoshi is the smallest unit of Bitcoin (1 BTC = 100,000,000 Sats). Input any value below to convert between units based on custom USD and THB exchange rates.",
      th: "ซาโตชิคือหน่วยย่อยที่สุดของบิตคอยน์ (1 BTC = 100,000,000 Sats) ป้อนตัวเลขใดๆ ด้านล่างเพื่อแปลงค่าอัตโนมัติอ้างอิงราคาตลาดและอัตราแลกเปลี่ยนดอลลาร์/บาทไทย"
    },
    matrixTitle: {
      en: "Asset Characteristic Comparison Matrix",
      th: "ตารางเปรียบเทียบความแตกต่างของแต่ละสินทรัพย์"
    },
    matrixDesc: {
      en: "A structured comparative summary representing the fundamental rules and parameters governing core financial asset classes.",
      th: "ตารางสรุปข้อมูลเพื่อวิเคราะห์เปรียบเทียบคุณสมบัติเชิงโครงสร้างของสินทรัพย์ทางการเงินประเภทหลักๆ"
    },
    matrixHeaders: {
      asset: {
        en: "Asset Class",
        th: "ประเภทสินทรัพย์"
      },
      scarcity: {
        en: "Scarcity Level",
        th: "ความหายาก/จำกัด"
      },
      counterpartyRisk: {
        en: "Counterparty Risk",
        th: "ความเสี่ยงจากตัวกลาง"
      },
      yield: {
        en: "Inherent Yield",
        th: "ผลตอบแทนในตัวเอง"
      },
      custody: {
        en: "Self-Custody Method",
        th: "วิธีการเก็บรักษาดูแล"
      }
    },
    matrixRows: [
      {
        asset: { en: "Fiat Currency (Cash)", th: "เงินตราเฟียต (เงินสด)" },
        scarcity: { en: "None (Infinite inflation)", th: "ไม่มี (พิมพ์เพิ่มได้ไม่จำกัด)" },
        counterpartyRisk: { en: "High (Bank default/monetary print)", th: "สูง (เงินเฟ้อ/ความมั่นคงธนาคาร)" },
        yield: { en: "None (Depreciating purchasing power)", th: "ไม่มี (มูลค่าซื้อลดลงอย่างต่อเนื่อง)" },
        custody: { en: "Bank vaults or physical cash", th: "ฝากธนาคาร หรือเก็บเงินสดทางกายภาพ" }
      },
      {
        asset: { en: "Gold", th: "ทองคำแท้" },
        scarcity: { en: "High (Limited crust extraction)", th: "สูง (ขุดได้จำกัดตามทางกายภาพ)" },
        counterpartyRisk: { en: "None (Physical commodity asset)", th: "ไม่มี (กรณีเก็บรักษาทองคำแท่งจริง)" },
        yield: { en: "None (Requires storage cost)", th: "ไม่มี (แถมมีต้นทุนการจัดเก็บ)" },
        custody: { en: "Physical vaults or safe box", th: "ห้องนิรภัย หรือตู้เซฟจัดเก็บทางกายภาพ" }
      },
      {
        asset: { en: "Bitcoin", th: "บิตคอยน์" },
        scarcity: { en: "Absolute (Capped at 21M units)", th: "จำกัดถาวร (จำกัดที่ 21 ล้านหน่วย)" },
        counterpartyRisk: { en: "None (Decentralized cryptoledger)", th: "ไม่มี (บล็อกเชนแบบไร้ศูนย์กลาง)" },
        yield: { en: "None (Passive sovereign asset)", th: "ไม่มี (เป็นสินทรัพย์ไม่มีปันผลในตัว)" },
        custody: { en: "Cryptographic hardware wallet keys", th: "คีย์กระเป๋าฮาร์ดแวร์เก็บส่วนตัว" }
      },
      {
        asset: { en: "Financial Derivatives", th: "ตราสารอนุพันธ์ทางการเงิน" },
        scarcity: { en: "None (Synthetic creation)", th: "ไม่มี (สร้างมูลค่าจำลองอ้างอิง)" },
        counterpartyRisk: { en: "High (Brokerage / Exchange failure)", th: "สูง (ความเสี่ยงจากโบรกเกอร์หรือศูนย์แลกเปลี่ยน)" },
        yield: { en: "Synthetic (Interests / Funding rates)", th: "ดอกเบี้ย/ค่าธรรมเนียมการถือครอง" },
        custody: { en: "Brokerage custodial account database", th: "บัญชีภายใต้ระบบผู้ฝากหลักทรัพย์โบรกเกอร์" }
      }
    ]
  },
  m6: {
    title: {
      en: "M6: Pro Tools (Cash Flow & SIP)",
      th: "M6: Pro Tools (กระแสเงินสด & แผนออมหุ้นเป็นระบบ)"
    },
    subtitle: {
      en: "Summarizing asset allocation rules, strategic rebalancing, and SIP investment plans.",
      th: "สรุปการวางสัดส่วนสินทรัพย์ การปรับพอร์ตโฟลิโอตามรอบ และการออมแบบถัวเฉลี่ยสะสม (SIP)"
    },
    p1: {
      en: "Successful traders view their activity as a business generating continuous cash flow. William Bernstein outlines that asset allocation is the primary driver of portfolio returns. You must split capital between diversified, non-correlated assets.",
      th: "นักเทรดที่ประสบความสำเร็จจะมองพอร์ตเป็นธุรกิจที่สร้างกระแสเงินสดอย่างสม่ำเสมอ William Bernstein ระบุว่าการจัดสรรสัดส่วนสินทรัพย์ (Asset Allocation) คือตัวกำหนดผลตอบแทนหลักของพอร์ต คุณต้องกระจายทุนไปในสินทรัพย์ที่ไม่มีความสอดคล้องกัน"
    },
    p2: {
      en: "Strategic rebalancing (selling appreciating assets to buy undervalued assets back to target weights) enforces buy-low sell-high discipline automatically. This extracts excess return from market volatility.",
      th: "การปรับสมดุลพอร์ตอย่างมีกลยุทธ์ (Rebalancing - ขายสินทรัพย์ที่ขึ้นมาแพงเพื่อไปช้อนซื้อสินทรัพย์ที่สัดส่วนลดลง) บังคับวินัยการ 'ซื้อถูกขายแพง' โดยอัตโนมัติ ซึ่งจะดึงผลกำไรส่วนเกินจากสภาวะความผันผวนของตลาดออกมาได้"
    },
    p3: {
      en: "A Systematic Investment Plan (SIP) or Dollar Cost Average (DCA) leverages compounding interest. Brent Penfold details that consistency, risk control, and compounding are the absolute pillars of longevity in trading markets.",
      th: "แผนการลงทุนอย่างมีระบบ (SIP) หรือ Dollar Cost Average (DCA) ใช้ประโยชน์จากดอกเบี้ยทบต้นอย่างทรงพลัง Brent Penfold สรุปว่าความสม่ำเสมอ การควบคุมความเสี่ยง และทริกทบต้น คือเสาหลักในการยืนระยะยาวในตลาดการลงทุน"
    },
    visualizerTitle: {
      en: "Compounding & SIP Growth Visualizer",
      th: "เครื่องมือคำนวณจำลองผลตอบแทนสะสมออมหุ้นทบต้น"
    },
    visualizerDesc: {
      en: "Input your monthly contribution, projected yield, and time period to graph future capital accumulation and view the ratio of cash contributions to compounding profits.",
      th: "ระบุจำนวนเงินที่วางใจออมต่อเดือน ผลตอบแทนคาดหวัง และเวลาเป็นปี เพื่อวิเคราะห์เปรียบเทียบสัดส่วนระหว่างเงินออมต้นสะสมกับผลตอบแทนดอกเบี้ยสะสมที่จะเกิดขึ้นในอนาคต"
    },
    inputs: {
      monthlyContrib: {
        en: "Monthly Savings Contribution ($)",
        th: "จำนวนเงินออมต่อเดือน ($)"
      },
      annualYield: {
        en: "Projected Annual Trading Yield (%)",
        th: "อัตราปันผลสะสมจากการเทรดต่อปี (%)"
      },
      years: {
        en: "Investment Duration (Years)",
        th: "ระยะเวลาลงทุน (ปี)"
      }
    },
    outputs: {
      totalContributed: {
        en: "Total Capital Deposited",
        th: "เงินต้นสะสมสะสมทั้งหมด"
      },
      totalInterest: {
        en: "Trading Profits Earned",
        th: "กำไรสะสมทบต้นจากการเทรด"
      },
      futureValue: {
        en: "Future Portfolio Value",
        th: "มูลค่าปลายทางของพอร์ตโฟลิโอ"
      }
    }
  }
};

// 10 reference books data for study tracker
export interface BookInfo {
  id: string;
  title: string;
  author: string;
  module: string;
  summary: {
    en: string;
    th: string;
  };
  keyPoints: {
    en: string[];
    th: string[];
  };
}

export const referenceBooks: BookInfo[] = [
  {
    id: "housel",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    module: "m1",
    summary: {
      en: "Doing well with money isn't necessarily about what you know. It's about how you behave. Behaviors are hard to teach, even to really smart people.",
      th: "ความสำเร็จทางการเงินไม่ได้สำคัญที่สิ่งที่คุณรู้ แต่ขึ้นอยู่กับพฤติกรรมของคุณ พฤติกรรมเป็นเรื่องยากที่จะฝึกฝน แม้แต่กับคนที่ชาญฉลาดที่สุดก็ตาม"
    },
    keyPoints: {
      en: [
        "Getting wealthy vs. staying wealthy require completely different skillsets.",
        "Compounding works best when you give it decades to work.",
        "Room for error: Leave a gap between what you expect and what could go wrong."
      ],
      th: [
        "การสร้างความมั่งคั่งและการรักษาความมั่นคงต้องการทักษะที่ต่างกันโดยสิ้นเชิง",
        "ผลตอบแทนทบต้นจะทำงานได้ดีที่สุดเมื่อคุณให้เวลามันนานเป็นทศวรรษ",
        "พื้นที่เผื่อเหลือเผื่อขาด (Room for Error): จงเว้นระยะห่างระหว่างจุดที่คาดหวังกับจุดที่ผิดพลาดได้"
      ]
    }
  },
  {
    id: "douglas",
    title: "Trading in the Zone",
    author: "Mark Douglas",
    module: "m1",
    summary: {
      en: "This book addresses the psychological barriers that prevent traders from executing their edge consistently. It shows how to think in probabilities.",
      th: "หนังสือเล่มนี้มุ่งเน้นไปที่การเอาชนะขอบเขตทางจิตวิทยาที่ขัดขวางการทำกำไรอย่างเป็นระบบ สอนให้หัดคิดวิเคราะห์ในรูปแบบของความน่าจะเป็น"
    },
    keyPoints: {
      en: [
        "The market outcome is uncertain and there is a random distribution of wins and losses.",
        "An edge is nothing more than an indication of a higher probability of one thing happening over another.",
        "To trade effectively, you must completely accept the risk before executing."
      ],
      th: [
        "ผลลัพธ์ของตลาดนั้นไม่แน่นอน และสถิติแพ้ชนะจะกระจายตัวอย่างสุ่มเสมอ",
        "หน้าเทรดที่ได้เปรียบ (Edge) เป็นเพียงแค่ตัวระบุว่ามีโอกาสเกิดเหตุการณ์หนึ่งมากกว่าอีกเหตุการณ์หนึ่งเท่านั้น",
        "หากต้องการเทรดให้มีประสิทธิภาพ คุณต้องยอมรับความเสี่ยงของไม้นั้นๆ ก่อนจะกดปุ่มส่งคำสั่ง"
      ]
    }
  },
  {
    id: "murphy",
    title: "Technical Analysis of the Financial Markets",
    author: "John J. Murphy",
    module: "m2",
    summary: {
      en: "The bible of technical analysis. Explains the core premises of charting, trends, support/resistance, and mathematical indicators.",
      th: "คัมภีร์หลักสัญญาวิเคราะห์เทคนิค อธิบายทฤษฎีพื้นฐานของชาร์ต แนวโน้มเทรนด์ แนวรับ/แนวต้าน และอินดิเคเตอร์เชิงคณิตศาสตร์"
    },
    keyPoints: {
      en: [
        "Market action discounts everything: all fundamentals are reflected in the price.",
        "Prices move in trends, and trends are more likely to continue than to reverse.",
        "History repeats itself: human psychology creates repeating geometric structures."
      ],
      th: [
        "พฤติกรรมตลาดสะท้อนข้อมูลทุกอย่างแล้ว: ข้อมูลพื้นฐานจะถูกหักกลบไปในตัวเลขราคาเรียบร้อย",
        "ราคามักจะวิ่งไปตามเทรนด์ และแนวโน้มเดิมมีโอกาสไปต่อมากกว่าที่จะสลับตัวเปลี่ยนทิศ",
        "ประวัติศาสตร์ซ้ำรอยเสมอ: จิตวิทยามนุษย์สร้างโครงสร้างเรขาคณิตที่ซ้ำรอยเดิม"
      ]
    }
  },
  {
    id: "frost",
    title: "Elliott Wave Principle",
    author: "A.J. Frost & Robert Prechter",
    module: "m2",
    summary: {
      en: "Explains how market cycles and crowd behaviors shape structural patterns. Price movements repeat in 5-wave impulses and 3-wave corrections.",
      th: "อธิบายว่าวงจรตลาดและพฤติกรรมฝูงชนเป็นตัวสร้างรูปแบบโครงสร้างราคาอย่างไร การเปลี่ยนแปลงราคาจะวนเป็นรอบในทิศทางขึ้น 5 คลื่น และปรับฐานลง 3 คลื่น"
    },
    keyPoints: {
      en: [
        "Motive Wave rules: Wave 3 is never the shortest wave, and Wave 4 never enters Wave 1 territory.",
        "Corrective Waves shape simple or complex structures (Zigzags, Flats, Triangles).",
        "Fibonacci ratio guidelines: Waves project extensions and retracements matching Golden Ratios."
      ],
      th: [
        "กฎเหล็กคลื่นขับเคลื่อนหลัก: คลื่น 3 ต้องไม่ใช่คลื่นที่สั้นที่สุด และคลื่น 4 ต้องไม่ย่อลึกเข้ามาเหลื่อมกับพื้นที่ของคลื่น 1",
        "คลื่นปรับฐานย่อตัวมีทั้งรูปแบบง่ายและซับซ้อน (Zigzags, Flats, Triangles)",
        "ตัวเลขสัดส่วนฟิโบนัชชี: คลื่นจะมีความยาวสัมพันธ์กับสัดส่วนทองคำฟิโบนัชชีอย่างมีนัยสำคัญ"
      ]
    }
  },
  {
    id: "tharp",
    title: "Trade Your Way to Financial Freedom",
    author: "Van K. Tharp",
    module: "m3",
    summary: {
      en: "Guides traders in developing robust systems. Explains how entries are only 10% of a system, while exits and sizing define the profitability.",
      th: "แนะนำขั้นตอนในการสร้างระบบเทรดที่มั่นคง อธิบายว่าจุดเข้าซื้อเป็นเพียง 10% ของระบบเท่านั้น ขณะที่จุดขายและขนาดพอร์ตต่างหากคือตัวตัดสินกำไรขาดทุน"
    },
    keyPoints: {
      en: [
        "Focus on system Expectancy using R-multiples rather than searching for high Win Rates.",
        "A system must define distinct exits for cutting losses and lock-in returns.",
        "Avoid psychological traps of thinking you must predict market directions."
      ],
      th: [
        "โฟกัสที่ค่าคาดหวังผลกำไรของระบบ (Expectancy) อิงตัวคูณความเสี่ยง R มากกว่าไล่ตามอัตราชนะสูงๆ",
        "ระบบเทรดต้องกำหนดจุดขายออกเพื่อตัดขาดทุนและล็อกกำไรที่ชัดเจนอย่างเป็นวัตถุประสงค์",
        "หลีกเลี่ยงกับดักจิตวิทยาที่คิดว่าตัวเราต้องรู้ทิศทางในอนาคตของตลาดก่อนเทรด"
      ]
    }
  },
  {
    id: "pinescript",
    title: "Pine Script Reference Manual",
    author: "TradingView Developer",
    module: "m3",
    summary: {
      en: "Manual detailing algorithm construction on TradingView. Explains series data types, variables, custom indicator coding, and backtesting logic.",
      th: "คู่มืออ้างอิงขั้นตอนเขียนชุดคำสั่งคณิตศาสตร์ระบบบน TradingView อธิบายประเภทข้อมูลแบบอนุกรม ตัวแปร การสร้างอินดิเคเตอร์ และตรรกะทดสอบย้อนหลัง"
    },
    keyPoints: {
      en: [
        "Series variables: Every price indicator behaves as an array of historical values.",
        "Backtesting execution engine: Simulates trade performance dynamically on historical bars.",
        "CDC ActionZone logic: Code signal indicators using moving average color transitions."
      ],
      th: [
        "ตัวแปรประเภทอนุกรม (Series): ทุกๆ อินดิเคเตอร์ราคาจะทำงานในรูปของอาร์เรย์ค่าข้อมูลอดีต",
        "กลไกทดสอบย้อนหลัง (Backtest): จำลองผลลัพธ์คำสั่งซื้อขายแบบจำลองบนแท่งเทียนในอดีต",
        "หลักตรรกะระบบ CDC ActionZone: เขียนรหัสสัญญาณโดยใช้การตัดกันและการสลับสีของเส้นค่าเฉลี่ย"
      ]
    }
  },
  {
    id: "sizer",
    title: "The Definitive Guide to Position Sizing",
    author: "Van K. Tharp",
    module: "m4",
    summary: {
      en: "The master reference explaining position sizing strategies. Details how sizing determines the speed and consistency of compounding capital.",
      th: "คัมภีร์อธิบายหลักวางขนาดการเทรดโดยเฉพาะ เจาะลึกว่าการคำนวณสัดส่วนพอร์ตเป็นตัวกำหนดความเร็วความสม่ำเสมอในการเติบโตทบต้นของทุน"
    },
    keyPoints: {
      en: [
        "Sizing defines 'how much' to hold, which determines risk of ruin during drawdowns.",
        "CPR Model: Capital at Risk = (Entry Price - Stop Loss Price) * Position Units.",
        "Anti-martingale models increase position sizes during wins and cut sizes during losses."
      ],
      th: [
        "การกำหนดขนาดระบุว่าควรส่งคำสั่งเป็นจำนวน 'เท่าไร' ซึ่งช่วยสกัดกั้นโอกาสล้างพอร์ตช่วงเบิกถอนเงินทุนย่อตัว",
        "สูตรโมเดล CPR: ทุนที่เสี่ยง (Capital at Risk) = (ราคาเข้าซื้อ - ราคา Stop Loss) * ปริมาณสัญญายูนิต",
        "โมเดลตรงข้ามมาร์ติงเกล (Anti-Martingale) จะเพิ่มขนาดไม้ช่วงพอร์ตชนะและหั่นขนาดไม้ลงช่วงพอร์ตแพ้"
      ]
    }
  },
  {
    id: "hull",
    title: "Options, Futures and Other Derivatives",
    author: "John C. Hull",
    module: "m5",
    summary: {
      en: "The standard textbook for derivatives. Explains the mechanical principles of futures, options, swaps, hedging, and pricing algorithms.",
      th: "ตำราเรียนมาตรฐานสำหรับอนุพันธ์ อธิบายหลักการกลไกการทำงานของฟิวเจอร์ส, ออปชัน, สวอป, การป้องกันความเสี่ยง และสูตรคำนวณมูลค่า"
    },
    keyPoints: {
      en: [
        "Futures contracts require maintaining margins and are vulnerable to margin calls.",
        "Options pricing: Black-Scholes-Merton model evaluates volatility, time, and exercise values.",
        "Arbitrage: Price differences between spot and derivatives are quickly balanced."
      ],
      th: [
        "สัญญาซื้อขายล่วงหน้าฟิวเจอร์สจำเป็นต้องรักษาระดับเงินประกันและเสี่ยงต่อการถูกเรียกเพิ่มประกัน (Margin Call)",
        "สูตรราคาออปชัน: โมเดล Black-Scholes-Merton คำนวณความผันผวน ปัจจัยเวลา และราคาเป้าหมายสัญญา",
        "อาบิทราจ (Arbitrage): ส่วนต่างราคาของตลาดสปอตและตลาดฟิวเจอร์สจะถูกหักลบปรับสมดุลอย่างรวดเร็ว"
      ]
    }
  },
  {
    id: "bernstein",
    title: "The Intelligent Asset Allocator",
    author: "William Bernstein",
    module: "m6",
    summary: {
      en: "Explains asset allocation principles. Shows how a diversified portfolio of non-correlated assets optimizes returns while reducing volatility.",
      th: "อธิบายทฤษฎีการจัดพอร์ตทรัพย์สิน แสดงให้เห็นว่าการเลือกสัดส่วนสินทรัพย์ที่ไม่สัมพันธ์กันช่วยปรับปรุงประสิทธิภาพกำไรพร้อมทั้งควบคุมความผันผวน"
    },
    keyPoints: {
      en: [
        "Strategic asset allocation determines over 90% of portfolio performance variance.",
        "Correlation: Combine assets with negative or low correlation to smooth out returns.",
        "Rebalancing: Sell winners and buy losers back to target weights to boost returns."
      ],
      th: [
        "การวางกลยุทธ์สัดส่วนพอร์ตตัวกำหนดความผันผวนผลตอบแทนมากกว่า 90% ของระยะยาว",
        "ค่าสหสัมพันธ์ (Correlation): รวมสินทรัพย์ที่ไม่มีสัญญาสอดคล้องกันเพื่อเกลี่ยเส้นเงินทุนไม่ให้แกว่งชัน",
        "การปรับพอร์ต (Rebalancing): ขายส่วนที่วิ่งแรงเพื่อนำไปซื้อเพิ่มตัวที่ยังย่อช่วยสร้างผลตอบแทนส่วนเกิน"
      ]
    }
  },
  {
    id: "penfold",
    title: "The Universal Principles of Successful Trading",
    author: "Brent Penfold",
    module: "m6",
    summary: {
      en: "Collects universal truths of successful trading. Focuses on the absolute necessity of rule execution, money management, and psychology.",
      th: "รวบรวมความจริงทางสถิตินักเทรดที่ประสบความสำเร็จ มุ่งเน้นการปฏิบัติตามกฎ, การจัดการเงินทุน และจิตวิทยายืนระยะ"
    },
    keyPoints: {
      en: [
        "Rule 1: Always cut losses. Never let a small loss escalate to account ruin.",
        "Focus on system design validation and ensure it survives historical drawdowns.",
        "Maintain absolute psychological control and execute signals without hesitation."
      ],
      th: [
        "กฎข้อที่ 1: ตัดขาดทุนตามแผนเสมอ อย่าปล่อยให้ยอดเสียหายเล็กๆ ลามไปจนพังบัญชีพอร์ตการลงทุน",
        "โฟกัสไปที่สถิติตัวเลขในอดีต และดูว่าระบบเทรดนี้จะเอาตัวรอดช่วงดรอว์ดาวน์ในอดีตได้จริงหรือไม่",
        "ควบคุมจิตวิทยาส่วนตัวอย่างเด็ดขาด และดำเนินการตามหน้าเทรดทันทีเมื่อสัญญาณปรากฏ"
      ]
    }
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: {
      en: "You notice a highly hyped meme coin has surged by 150% in the last 12 hours. Influencers on Twitter are saying it will pump another 10x. What do you do?",
      th: "คุณเห็นเหรียญมีมที่เป็นกระแสพุ่งสูงถึง 150% ในเวลา 12 ชั่วโมงที่ผ่านมา และกูรูในทวิตเตอร์ต่างบอกเป็นเสียงเดียวกันว่าจะวิ่งขึ้นต่ออีก 10 เท่า คุณจะทำอย่างไร?"
    },
    options: [
      {
        text: {
          en: "Buy immediately with high leverage to catch the quick trend before it is too late.",
          th: "ซื้อทันทีโดยใช้เลเวอเรจสูงเพื่อจับแนวโน้มต้นกระแสก่อนที่จะสายเกินไป"
        },
        score: 0
      },
      {
        text: {
          en: "Wait for a slight pull-back, then buy without a stop loss, planning to hold until it pumps.",
          th: "รอราคาปรับฐานย่อตัวลงมาเล็กน้อยแล้วซื้อโดยไม่ตั้ง Stop Loss เพื่อกอดถือรอราคาดีด"
        },
        score: 1
      },
      {
        text: {
          en: "Do not enter. It is an emotional pump. Stick to your predefined system and assets.",
          th: "ไม่ยอมเข้าเทรดเด็ดขาด มันคือการไล่ราคาด้วยอารมณ์ ปฏิบัติตามกฎและระบบที่วางแผนไว้เท่านั้น"
        },
        score: 3
      }
    ],
    explanation: {
      en: "Buying hyped assets based on social buzz is a classic FOMO (Fear Of Missing Out) bias. Systematic trading requires entering only when your setup criteria are objectively met, avoiding chasing vertical lines.",
      th: "การไล่ซื้อสินทรัพย์ที่ขึ้นแรงโดยอิงจากกระแสโซเชียลคืออคติ FOMO การเทรดอย่างเป็นระบบกำหนดให้เราเข้าซื้อเฉพาะเมื่อเงื่อนไขหน้าเทรดครบถ้วนอย่างเป็นวัตถุประสงค์เท่านั้น ไม่ใช่วิ่งตามกราฟแท่งเทียนสีเขียวชันๆ"
    }
  },
  {
    id: 2,
    question: {
      en: "Your trade has reached its stop-loss level, indicating the market structure has invalidated your idea. However, you feel strongly that the price will bounce back. What do you do?",
      th: "โพซิชันของคุณลงมาถึงระดับหยุดขาดทุน (Stop Loss) ซึ่งหมายความว่าโครงสร้างราคาขัดกับหน้าเทรดของคุณแล้ว แต่คุณรู้สึกมั่นใจมากว่าเดี๋ยวมันก็ดีดกลับ คุณจะทำอย่างไร?"
    },
    options: [
      {
        text: {
          en: "Move the stop loss further down to give the trade 'more room to breathe'.",
          th: "เลื่อนจุด Stop Loss ให้ห่างออกไปเพื่อเพิ่มพื้นที่ให้ราคาได้แกว่งตัวกลับมา"
        },
        score: 0
      },
      {
        text: {
          en: "Close the position immediately as dictated by the plan, accepting the pre-calculated loss.",
          th: "ปิดสถานะเพื่อหยุดขาดทุนทันทีตามกฎแผนงาน และยอมรับการขาดทุนที่ได้คำนวณไว้ล่วงหน้าแล้ว"
        },
        score: 3
      },
      {
        text: {
          en: "Double the position size (martingale) to lower the average cost so you can exit at break-even faster.",
          th: "ถัวเฉลี่ยซื้อเพิ่มเป็นสองเท่าเพื่อลดต้นทุนเฉลี่ย จะได้หนีกลับมาเท่าทุนได้ง่ายขึ้น"
        },
        score: 0
      }
    ],
    explanation: {
      en: "Refusing to accept a stop loss is a symptom of Loss Aversion. Moving stops or martingaling lead to catastrophic account ruin. A professional accepts the loss as a simple cost of doing business.",
      th: "การไม่ยอมทำตามแผนหยุดขาดทุนเกิดจากอคติการเกลียดชังความสูญเสีย (Loss Aversion) การเลื่อนจุดสต็อปหรือถัวขาลงอย่างบ้าคลั่งคือหนทางสู่การเจ๊งของพอร์ตอย่างรวดเร็ว มืออาชีพจะยอมตัดขาดทุนและมองว่ามันคือต้นทุนการทำธุรกิจปกติ"
    }
  },
  {
    id: 3,
    question: {
      en: "You get a strong buy signal from your CDC ActionZone system on Bitcoin. You are excited. How do you size this position?",
      th: "คุณได้สัญญาณซื้อสีเขียว (Buy Signal) จากระบบ CDC ActionZone ในเหรียญ Bitcoin คุณรู้สึกตื่นเต้นมาก คุณจะกำหนดขนาดการลงทุนครั้งนี้อย่างไร?"
    },
    options: [
      {
        text: {
          en: "Use 100% of your account balance. Bitcoin is the safest asset, so this signal is a sure bet.",
          th: "ใส่สุดตัว 100% ของพอร์ต บิตคอยน์คือสินทรัพย์ที่ปลอดภัยที่สุด ดังนั้นสัญญาณนี้ยังไงก็ชนะแน่"
        },
        score: 0
      },
      {
        text: {
          en: "Calculate the distance to the stop-loss and size the trade so you lose only 1% of your account if hit.",
          th: "คำนวณระยะห่างไปยังจุด Stop Loss และกำหนดปริมาณเข้าซื้อเพื่อยอมเสียเงินเพียง 1% ของพอร์ตหากแพ้"
        },
        score: 3
      },
      {
        text: {
          en: "Allocate roughly half of your capital, relying on your gut feeling for overall risk control.",
          th: "ใส่เงินลงไปราวๆ ครึ่งหนึ่งของพอร์ต โดยใช้ความรู้สึกในการควบคุมความเสี่ยงรวมเอาหน้างาน"
        },
        score: 1
      }
    ],
    explanation: {
      en: "No single trade signal is 100% guaranteed. Sizing your position based on strict risk units (e.g. risking 1-2% of total equity per trade) ensures that you survive losing streaks to profit from the winning runs.",
      th: "ไม่มีสัญญาณเทรดใดชนะ 100% เสมอไป การคำนวณปริมาณการซื้อ (Position Sizing) อิงตามงบความเสี่ยงที่จำกัด (เช่น ยอมเสียเพียง 1-2% ของเงินพอร์ตทั้งหมดต่อไม้) ช่วยรับประกันการรอดชีวิตในยามสถิติรันแพ้"
    }
  },
  {
    id: 4,
    question: {
      en: "Your strategy has a historical win rate of 40%, but its average risk-to-reward ratio (R:R) is 1:3 (i.e. you gain 3 units for every 1 unit you risk). How do you evaluate this system?",
      th: "กลยุทธ์ของคุณมีสถิติอัตราชนะ (Win Rate) อยู่ที่ 40% แต่อัตราส่วนความเสี่ยงต่อกำไรเฉลี่ย (R:R) อยู่ที่ 1:3 (เสี่ยง 1 บาท ได้กำไร 3 บาท) คุณประเมินระบบนี้อย่างไร?"
    },
    options: [
      {
        text: {
          en: "It is a bad system. Any strategy with less than 60% win rate is not viable because you lose more than you win.",
          th: "เป็นระบบที่แย่มาก กลยุทธ์ใดที่อัตราชนะต่ำกว่า 60% ใช้ไม่ได้จริงเพราะคาดเดาแพ้บ่อยกว่าชนะ"
        },
        score: 0
      },
      {
        text: {
          en: "It is mathematically highly profitable. Over a series of trades, the high payouts offset the losing streaks.",
          th: "เป็นระบบที่มีกำไรดีมากทางคณิตศาสตร์ ในระยะยาวกำไรก้อนใหญ่จะมาหักลบยอดเสียทั้งหมดได้อย่างสบาย"
        },
        score: 3
      },
      {
        text: {
          en: "It is usable, but only if you discretionary double your risk after experiencing three consecutive losses.",
          th: "ใช้ได้ แต่ต้องเพิ่มความเสี่ยงเป็นสองเท่าหลังจากแพ้ติดต่อกัน 3 ครั้งเพื่อตามเก็บทุนคืน"
        },
        score: 1
      }
    ],
    explanation: {
      en: "Expectancy = (Win% * AvgWin) - (Loss% * AvgLoss). For a 1:3 system: (0.40 * 3) - (0.60 * 1) = 1.2 - 0.6 = +0.6 R per trade. It is highly profitable despite losing 60% of the time. Gamblers chase win-rate; pros chase expectancy.",
      th: "สูตรค่าคาดหวังผลกำไร = (อัตราชนะ * กำไรเฉลี่ย) - (อัตราแพ้ * ขาดทุนเฉลี่ย) สำหรับระบบ R:R 1:3 จะได้: (0.40 * 3) - (0.60 * 1) = +0.6 R ต่อไม้ ระบบนี้สร้างผลกำไรสูงมากแม้จะเทรดแพ้ถึง 60% นักพนันมองแค่อัตราชนะ แต่มืออาชีพมองที่ค่าคาดหวัง"
    }
  },
  {
    id: 5,
    question: {
      en: "After launching a new system, you experience 5 losses in a row. The drawdown is within your historical testing limits, but you feel stressed. What do you do?",
      th: "หลังจากเริ่มต้นใช้งานระบบเทรดใหม่ คุณพบว่าเทรดเสียติดต่อกันถึง 5 ครั้ง การย่อตัวพอร์ตยังอยู่ในช่วงที่ทดสอบระบบในอดีต (Backtest) แต่คุณรู้สึกตึงเครียดมาก คุณจะทำอย่างไร?"
    },
    options: [
      {
        text: {
          en: "Stop the system immediately. The market must have changed, and you need to find a new indicator.",
          th: "หยุดใช้ระบบนี้ทันที ตลาดเปลี่ยนไปแล้วแน่ๆ และต้องไปหาอินดิเคเตอร์ตัวใหม่มาเล่นทดแทน"
        },
        score: 0
      },
      {
        text: {
          en: "Tweak the rules manually on the next trade to ensure you win, overriding the signals.",
          th: "แอบปรับแต่งกฎด้วยตัวเองในการเทรดครั้งถัดไปเพื่อให้มั่นใจว่าจะชนะ โดยไม่สนใจสัญญาณของระบบ"
        },
        score: 0
      },
      {
        text: {
          en: "Execute the next trade exactly according to the system rules. You understand drawdowns are statistical certainties.",
          th: "ดำเนินขั้นตอนเทรดครั้งต่อไปตามกฎเป๊ะๆ เพราะรู้ดีว่าการย่อตัวขาดทุนเป็นเรื่องสถิติที่ต้องเผชิญแน่ๆ"
        },
        score: 3
      }
    ],
    explanation: {
      en: "Losing streaks happen under normal variance. Stopping a system or manual adjustments during a statistical drawdown overrides your historical testing edge, resulting in high vulnerability to market noise.",
      th: "การเทรดเสียติดต่อกันเป็นเรื่องสถิติทั่วไป การสั่งหยุดระบบชั่วคราวหรือปรับจูนกฎตามความรู้สึกขณะพอร์ตย่อตัวจะทำลายแต้มต่อค่าสถิติเดิมที่ทดสอบมา และปล่อยตัวคุณให้เสี่ยงตามความปั่นป่วนชั่วคราวของตลาด"
    }
  }
];

export const patternData: PatternData[] = [
  {
    id: "hs",
    name: {
      en: "Head & Shoulders (Top)",
      th: "รูปแบบ Head & Shoulders (หัวและไหล่สองข้าง)"
    },
    desc: {
      en: "A structural bearish reversal pattern appearing after an uptrend, signifying demand invalidation.",
      th: "รูปแบบกราฟเทคนิคทางฝั่งกลับตัวเป็นขาลง เกิดขึ้นหลังรอบขาขึ้นยาว บ่งบอกว่าแรงซื้อหมดกำลังลง"
    },
    validation: [
      {
        en: "Three consecutive peaks: Left Shoulder (high), Head (highest), and Right Shoulder (lower high).",
        th: "มียอดกราฟ 3 ยอดเรียงกัน: ไหล่ซ้าย (ยอดสูง), หัว (ยอดสูงสุด), และไหล่ขวา (ยอดที่เตี้ยลงมา)"
      },
      {
        en: "Breakout confirmation: A clean breakdown below the Neckline connecting the troughs with volume.",
        th: "การยืนยันรูปแบบ: การย่อตัวหลุดทะลุแนว Neckline ที่ลากเชื่อมระหว่างฐานสองฝั่งด้วยแรงขายหนาแน่น"
      }
    ],
    invalidation: [
      {
        en: "Price surges and closes above the highest point of the Head, invalidating structural supply control.",
        th: "ราคาปรับตัวขึ้นแรงและสามารถปิดตัวเหนือกึ่งกลางยอดหัว (Head) ซึ่งแปลว่าแรงซื้อกลับมาคุมตลาด"
      },
      {
        en: "The Right Shoulder fails to form, rising directly to match or exceed the Head.",
        th: "ไหล่ขวา (Right Shoulder) ไม่ยอมตั้งรูปปรับย่อตัว แต่เลือกพุ่งขึ้นไปเทียบเท่าหรือยอดแซงหัว"
      }
    ]
  },
  {
    id: "db",
    name: {
      en: "Double Bottom",
      th: "รูปแบบ Double Bottom (สองฐานล่าง)"
    },
    desc: {
      en: "A bullish reversal structure appearing at the end of a downtrend, representing strong support validation.",
      th: "โครงสร้างการกลับตัวเป็นขาขึ้นที่เกิด ณ จุดปลายสุดของเทรนด์ขาลง บ่งบอกว่ามีแรงรับรับอยู่ที่แนวรับสำคัญ"
    },
    validation: [
      {
        en: "Two distinct troughs (Bottom 1 and Bottom 2) at approximately the same horizontal support level.",
        th: "มียอดฐานล่างสองจุด (B1 และ B2) ย่อตัวมาลงสัมผัสที่ระดับราคาแนวรับเดียวกันโดยประมาณ"
      },
      {
        en: "Breakout confirmation: Price surges and breaks above the intermediate resistance peak (Neckline).",
        th: "การยืนยันรูปแบบ: ราคาปรับตัวพุ่งสูงขึ้นและทะลุผ่านแนวต้านตรงกลางของสองฐานล่างได้สำเร็จ"
      }
    ],
    invalidation: [
      {
        en: "Price breaks down and closes below the horizontal support line connecting Bottom 1 and Bottom 2.",
        th: "ราคาหลุดทำจุดต่ำสุดใหม่โดยหลุดปิดใต้ระดับแนวรับเดิมของฐาน B1 และ B2 ซึ่งแปลว่าเทรนด์ขาลงไหลต่อ"
      },
      {
        en: "Extended consolidation inside the range without breaking the Neckline, turning into structural noise.",
        th: "ราคาออกข้างไซด์เวย์นานเกินไปโดยไม่ยอมระเบิดขึ้นแนวต้าน จนสูญเสียแรงเหวี่ยงเร่งความเร็วขาขึ้น"
      }
    ]
  },
  {
    id: "impulse",
    name: {
      en: "5-Wave Impulse Structure",
      th: "โครงสร้างคลื่นขับเคลื่อน Impulse 5 คลื่น"
    },
    desc: {
      en: "The motive phase of Elliott Wave Theory, driving primary structural market trends.",
      th: "ช่วงคลื่นขับเคลื่อนเทรนด์หลักของทฤษฎีคลื่นเอลเลียต ซึ่งดันราคาตามแนวโน้มใหญ่ของตลาด"
    },
    validation: [
      {
        en: "Consists of 3 motive waves in trend direction (1, 3, 5) and 2 corrective waves (2, 4).",
        th: "ประกอบด้วยคลื่นส่งตัวหลัก 3 คลื่น (1, 3, 5) และคลื่นย่อตัวคั่นจังหวะ 2 คลื่น (2, 4)"
      },
      {
        en: "Wave 3 must exhibit clear acceleration and volume expansion as the primary trend driver.",
        th: "คลื่นลูกที่ 3 จะต้องยาวแรง ชัดเจน และมีปริมาณการซื้อขายหนาแน่นสอดคล้องที่สุด"
      }
    ],
    invalidation: [
      {
        en: "Wave 2 retraces more than 100% of Wave 1 (price falls below the starting point of Wave 1).",
        th: "คลื่นลูกที่ 2 ย่อตัวต่ำกว่าจุดเริ่มต้นของคลื่นลูกที่ 1 (Retrace เกิน 100% ของความยาวคลื่น 1)"
      },
      {
        en: "Wave 4 overlaps into the price territory of Wave 1's peak.",
        th: "คลื่นลูกที่ 4 ย่อตัวลึกมากจนล้ำเข้ามาในอาณาเขตระดับราคาของยอดคลื่นลูกที่ 1"
      },
      {
        en: "Wave 3 is the shortest among the motive waves (1, 3, and 5).",
        th: "คลื่นลูกที่ 3 เป็นคลื่นที่สั้นที่สุดในบรรดาคลื่นส่งตัว (เปรียบเทียบกับคลื่น 1, 3, 5)"
      }
    ]
  },
  {
    id: "correction",
    name: {
      en: "ABC Correction Structure",
      th: "โครงสร้างคลื่นปรับฐาน ABC (Corrective)"
    },
    desc: {
      en: "The corrective phase of Elliott Wave Theory, retracing the preceding impulse trend.",
      th: "ช่วงคลื่นทิศทางปรับฐานย่อตัวของทฤษฎีคลื่นเอลเลียต ซึ่งย่อตัวหักล้างเทรนด์ขาขึ้นที่ขึ้นมาก่อนหน้า"
    },
    validation: [
      {
        en: "Consists of Wave A (initial correction), Wave B (partial retrace up), and Wave C (final flush down).",
        th: "ประกอบด้วย คลื่น A (ย่อตัวชุดแรก), คลื่น B (ดีดสู้กลับบางส่วน), และคลื่น C (ย่อล้างไส้ระลอกสุดท้าย)"
      },
      {
        en: "Wave C is expected to break below the low of Wave A, satisfying full corrections.",
        th: "คลื่น C มีเป้าหมายย่อต่ำกว่าระดับจุดต่ำสุดของคลื่น A เพื่อจบการย่อปรับฐานที่สมบูรณ์"
      }
    ],
    invalidation: [
      {
        en: "Wave B breaks out and closes above the start of Wave A (impulse trend top).",
        th: "คลื่น B ดีดตัวสูงเกินไปจนปิดเหนือจุดยอดสูงสุดที่เป็นจุดเริ่มของคลื่น A"
      },
      {
        en: "Wave C truncates and fails to reach near or below the low of Wave A, signaling trend strength.",
        th: "คลื่น C หดสั้นเกินไป ไม่สามารถยกลงมาสัมผัสใกล้เคียงกับฐานคลื่น A ได้ บ่งบอกว่าตลาดมีแรงซื้อหนุนแข็งแกร่ง"
      }
    ]
  },
  {
    id: "dt",
    name: {
      en: "Double Top",
      th: "รูปแบบ Double Top (สองยอดบน)"
    },
    desc: {
      en: "A bearish reversal structure appearing at the peak of an uptrend, indicating a failure to break resistance.",
      th: "โครงสร้างกลับตัวเป็นขาลงที่ปรากฏ ณ จุดสูงสุดของแนวโน้มขาขึ้น บ่งชี้ถึงการไม่สามารถผ่านแนวต้านขึ้นไปได้"
    },
    validation: [
      {
        en: "Two distinct peaks (Top 1 and Top 2) at approximately the same horizontal resistance level.",
        th: "มียอดสูงสุดสองจุด (T1 และ T2) สัมผัสที่ระดับราคาแนวต้านเดียวกันโดยประมาณ"
      },
      {
        en: "Breakdown confirmation: Price falls and closes below the intermediate support trough (Neckline).",
        th: "การยืนยันรูปแบบ: ราคาปรับย่อตัวลดลงและทะลุปิดต่ำกว่าระดับแนวรับฐานตรงกลาง (Neckline) ได้สำเร็จ"
      }
    ],
    invalidation: [
      {
        en: "Price surges and closes above the resistance level connecting Top 1 and Top 2.",
        th: "ราคาปรับตัวพุ่งสูงขึ้นและทะลุปิดเหนือระดับแนวต้านที่เชื่อมยอด T1 และ T2 ซึ่งแปลว่าเทรนด์ขาขึ้นไปต่อ"
      },
      {
        en: "The breakdown fails and price bounces back above the Neckline, turning into a consolidation zone.",
        th: "การทะลุแนวรับล้มเหลวและราคาดีดกลับเหนือแนว Neckline กลายสภาพเป็นการแกว่งตัวในกรอบสะสมพลังแทน"
      }
    ]
  },
  {
    id: "ihs",
    name: {
      en: "Inverse Head & Shoulders",
      th: "รูปแบบ Inverse Head & Shoulders (หัวและไหล่กลับหัว)"
    },
    desc: {
      en: "A bullish reversal structure appearing at the end of a downtrend, representing supply depletion.",
      th: "โครงสร้างกลับตัวเป็นขาขึ้นที่เกิด ณ จุดสิ้นสุดของเทรนด์ขาลง บ่งบอกว่าแรงขายเริ่มเหือดแห้งและมีแรงซื้อกลับเข้ามา"
    },
    validation: [
      {
        en: "Three consecutive troughs: Left Shoulder (low), Head (lowest low), and Right Shoulder (higher low).",
        th: "มีฐานราคาต่ำสุด 3 จุดเรียงกัน: ไหล่ซ้าย (ฐานต่ำ), หัว (ฐานต่ำสุด), และไหล่ขวา (ฐานยกสูงขึ้น)"
      },
      {
        en: "Breakout confirmation: A clean breakout above the Neckline connecting the peaks with volume expansion.",
        th: "การยืนยันรูปแบบ: ราคาดีดขึ้นและทะลุผ่านแนว Neckline ที่เชื่อมระหว่างยอดต้านสองฝั่งด้วยปริมาณซื้อขายหนาแน่น"
      }
    ],
    invalidation: [
      {
        en: "Price drops and closes below the lowest point of the Head, violating the bullish reversal thesis.",
        th: "ราคาลดลงรุนแรงและทะลุปิดต่ำกว่าระดับต่ำสุดของยอดหัว (Head) ถือเป็นการทำลายโครงสร้างการกลับตัวเป็นขาขึ้น"
      },
      {
        en: "The Right Shoulder fails to form, dropping directly to match or make a lower low than the Head.",
        th: "ไหล่ขวา (Right Shoulder) ไม่ยอมกลับตัวขึ้น แต่เลือกหล่นลึกลงไปเท่ากับหรือต่ำกว่ายอดหัวเดิม"
      }
    ]
  },
  {
    id: "bf",
    name: {
      en: "Bull Flag",
      th: "รูปแบบ Bull Flag (ธงขาขึ้น)"
    },
    desc: {
      en: "A bullish continuation pattern showing a sharp price rise (flagpole) followed by a downward-sloping consolidation channel.",
      th: "รูปแบบการไปต่อของแนวโน้มขาขึ้น โดยแสดงการขึ้นตัวอย่างรวดเร็ว (เสาธง) ตามด้วยช่องแกว่งตัวย่อต่ำลงแบบแคบๆ"
    },
    validation: [
      {
        en: "A near-vertical price surge forming a flagpole, followed by a tight downward-sloping parallel channel (the flag).",
        th: "ราคาพุ่งขึ้นเกือบเป็นแนวตั้งสร้างเสาธง ตามด้วยช่องทางขนานแกว่งตัวย่อลงแคบๆ ที่มีความชันลาดลงล่าง"
      },
      {
        en: "Breakout confirmation: Price breaks above the upper boundary of the flag channel with high volume.",
        th: "การยืนยันรูปแบบ: ราคาพุ่งข้ามทะลุแนวต้านกรอบบนของธงขึ้นไปได้ด้วยปริมาณซื้อขายที่เพิ่มขึ้น"
      }
    ],
    invalidation: [
      {
        en: "Price retraces down past the starting point of the flagpole, signaling a complete reversal.",
        th: "ราคาย่อตัวกลับลึกลงมาหลุดต่ำกว่าจุดเริ่มต้นของเสาธงเดิม ถือว่าแรงซื้อล้มเหลวโดยสิ้นเชิง"
      },
      {
        en: "The flag channel consolidates downward too deeply, retracing more than 50% of the flagpole height.",
        th: "ตัวธงปรับย่อลึกเกินไป (เกิน 50% ของความสูงของเสาธง) ซึ่งทำให้เสียแนวโน้มความเร่งของฝั่งขาขึ้น"
      }
    ]
  },
  {
    id: "at",
    name: {
      en: "Ascending Triangle",
      th: "รูปแบบ Ascending Triangle (สามเหลี่ยมมุมฉากขาขึ้น)"
    },
    desc: {
      en: "A bullish consolidation pattern featuring a flat resistance line and an ascending support line.",
      th: "รูปแบบการพักตัวไปต่อของขาขึ้น ประกอบด้วยแนวต้านแนวนอนราบ และแนวรับที่ยกระดับเฉียงสูงขึ้นเรื่อยๆ"
    },
    validation: [
      {
        en: "Price bounces between a horizontal resistance barrier and a series of higher swing lows.",
        th: "ราคาเคลื่อนไหวแกว่งตัวอยู่ระหว่างแนวต้านแนวนอนด้านบน กับแนวรับที่ยกก้นสูงขึ้นเรื่อยๆ เสมอ"
      },
      {
        en: "Breakout confirmation: Price breaks out and closes above the flat resistance line with volume.",
        th: "การยืนยันรูปแบบ: ราคาทะลุปิดยืนเหนือเส้นแนวต้านแนวนอนได้สำเร็จ พร้อมปริมาณการซื้อขายขยายตัว"
      }
    ],
    invalidation: [
      {
        en: "Price breaks down below the ascending support line, indicating selling pressure has taken control.",
        th: "ราคาหลุดร่วงทะลุเส้นแนวรับเฉียงที่ยกรองขึ้นมา ซึ่งบ่งชี้ว่าแรงขายได้กลับมาคุมตลาดแทนแล้ว"
      },
      {
        en: "Price exceeds the apex of the triangle without breaking out, leading to horizontal gridlock.",
        th: "ราคาวิ่งเลยจุดตัดปลายสามเหลี่ยมออกข้างไปดื้อๆ โดยไม่เกิดการระเบิดทิศทางใดๆ เสียเสถียรภาพแนวโน้ม"
      }
    ]
  },
  {
    id: "rw",
    name: {
      en: "Rising Wedge",
      th: "รูปแบบ Rising Wedge (ลิ่มเฉียงขึ้น)"
    },
    desc: {
      en: "A bearish trend-weakening structure formed by two converging upward-sloping support and resistance lines.",
      th: "โครงสร้างแสดงการอ่อนกำลังของแนวโน้มขาขึ้น เกิดขึ้นจากเส้นแนวต้านและแนวรับสองเส้นที่เฉียงชี้ขึ้นแต่สอบเข้าหากัน"
    },
    validation: [
      {
        en: "Both boundaries slope upward, but the support line is steeper than the resistance line, tightening the range.",
        th: "ขอบทั้งสองเฉียงขึ้นด้านบน แต่เส้นประคองแนวรับมีความชันสูงกว่าต้านด้านบน ทำให้ช่วงแกว่งตัวบีบแคบเข้าหากัน"
      },
      {
        en: "Breakdown confirmation: Price breaks down below the lower boundary (support) with volume.",
        th: "การยืนยันรูปแบบ: ราคาหลุดทะลุปิดใต้เส้นแนวรับขอบล่างของลิ่มเฉียงขึ้นด้วยปริมาณการขายที่หนาตา"
      }
    ],
    invalidation: [
      {
        en: "Price surges and breaks out above the upper boundary of the wedge, accelerating the uptrend.",
        th: "ราคาพุ่งระเบิดขึ้นด้านบนเหนือกรอบต้านด้านบนของลิ่ม ช่วยเร่งความเร็วของรอบขาขึ้นไปต่อ"
      },
      {
        en: "The wedge continues to expand or shifts into a broader channel, invalidating the convergence.",
        th: "กรอบของลิ่มกว้างออกหรือกลายสภาพเป็นช่องคู่ขนานแทนการบีบสอบเข้าหากัน"
      }
    ]
  },
  {
    id: "fw",
    name: {
      en: "Falling Wedge",
      th: "รูปแบบ Falling Wedge (ลิ่มเฉียงลง)"
    },
    desc: {
      en: "A bullish reversal or continuation pattern formed by two converging downward-sloping support and resistance lines.",
      th: "รูปแบบการกลับตัวหรือไปต่อฝั่งขาขึ้น เกิดขึ้นจากเส้นแนวต้านและแนวรับสองเส้นที่เฉียงลงล่างและสอบบีบเข้าหากัน"
    },
    validation: [
      {
        en: "Both boundaries slope downward, but the resistance line is steeper than the support line, compressing price.",
        th: "ขอบทั้งสองเฉียงลงด้านล่าง แต่เส้นกดแนวต้านมีความชันสอบลงลึกกว่าแนวรับ ทำให้บีบอัดราคาจนแน่น"
      },
      {
        en: "Breakout confirmation: Price breaks out and closes above the upper boundary (resistance) with volume.",
        th: "การยืนยันรูปแบบ: ราคาพุ่งทะลุปิดเหนือเส้นแนวต้านขอบบนของลิ่มเฉียงลงได้สำเร็จพร้อมแรงซื้อดัน"
      }
    ],
    invalidation: [
      {
        en: "Price breaks down below the lower boundary of the wedge, leading to a capitulation phase.",
        th: "ราคาหลุดดิ่งลึกลงต่ำกว่ากรอบขอบแนวรับล่างสุดของลิ่ม ซึ่งนำไปสู่สภาวะเทขายล้างพอร์ต"
      },
      {
        en: "Price drifts horizontally out of the apex without breaking upward, fading the momentum.",
        th: "ราคาวิ่งหลุดพ้นปลายลิ่มออกข้างเป็นไซด์เวย์ไร้ทิศทาง ทำให้แรงเหวี่ยงดีดตัวหายไป"
      }
    ]
  }
];
