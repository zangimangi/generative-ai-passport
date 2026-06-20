import { useMemo, useState } from "react";

import type { Keyword } from "../types/keyword";

type Props = {
  keywords: Keyword[];
};

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

export default function WordQuiz({ keywords }: Props) {
  const [quizIndex, setQuizIndex] = useState(() =>
    getRandomIndex(keywords.length)
  );
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const quizKeyword = keywords[quizIndex];

  const questionNumber = useMemo(
    () => quizIndex + 1,
    [quizIndex]
  );

  const handleNextQuestion = () => {
    if (keywords.length <= 1) {
      setIsAnswerVisible(false);
      return;
    }

    let nextIndex = getRandomIndex(keywords.length);

    while (nextIndex === quizIndex) {
      nextIndex = getRandomIndex(keywords.length);
    }

    setQuizIndex(nextIndex);
    setIsAnswerVisible(false);
  };

  if (!quizKeyword) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-cyan-500/30 bg-slate-900 p-5 text-left shadow-lg">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold text-cyan-300">
            単語クイズ
          </p>
          <p className="text-xs text-slate-500">
            {questionNumber} / {keywords.length}
          </p>
        </div>

        {isAnswerVisible && (
          <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-cyan-100">
            <span className="text-xs font-bold text-cyan-300">
              解答
            </span>
            <div className="text-lg font-bold">
              {quizKeyword.term}
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-bold tracking-wide text-cyan-300">
          説明
        </h2>
        <p className="mt-2 leading-relaxed text-slate-200">
          {quizKeyword.description}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setIsAnswerVisible(true)}
          disabled={isAnswerVisible}
          className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
        >
          解答を見る
        </button>

        <button
          type="button"
          onClick={handleNextQuestion}
          className="rounded-xl border border-slate-600 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          次の問題
        </button>
      </div>
    </section>
  );
}
