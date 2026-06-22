import {
  useEffect,
  useMemo,
  useState,
} from "react";

import keywords from "./data/keywords.json";

import Header from "./components/Header";
import WordQuiz from "./components/WordQuiz";
import AIModelTable from "./components/AIModelTable";
import AiBoomTable from "./components/AiBoomTable";
import SearchBar from "./components/SearchBar";
import SearchSuggestion from "./components/SearchSuggestion";
import KeywordCard from "./components/KeywordCard";
import type { Keyword } from "./types/keyword";

const keywordList = keywords as Keyword[];

export default function App() {
  const [search, setSearch] = useState("");
  const [hash, setHash] = useState(
    window.location.hash
  );

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  const handleOpenQuiz = () => {
    const quizUrl = new URL(
      import.meta.env.BASE_URL,
      window.location.origin
    );
    quizUrl.hash = "/quiz";

    window.open(
      quizUrl.toString(),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleOpenModels = () => {
  const modelsUrl = new URL(
    import.meta.env.BASE_URL,
    window.location.origin
  );

  modelsUrl.hash = "/models";

  window.open(
    modelsUrl.toString(),
    "_blank",
    "noopener,noreferrer"
  );
};

const handleOpenBooms = () => {
  const boomsUrl = new URL(
    import.meta.env.BASE_URL,
    window.location.origin
  );

  boomsUrl.hash = "/booms";

  window.open(
    boomsUrl.toString(),
    "_blank",
    "noopener,noreferrer"
  );
};

  const filteredKeywords = useMemo(() => {
    if (!search.trim()) {
      return keywordList;
    }

    const target = search.toLowerCase();

    return keywordList
      .filter((keyword) => {
        return (
          keyword.term.toLowerCase().includes(target) ||
          keyword.chapter.toLowerCase().includes(target) ||
          keyword.section.toLowerCase().includes(target) ||
          keyword.description
            .toLowerCase()
            .includes(target) ||
          keyword.tags?.some((tag) =>
            tag.toLowerCase().includes(target)
          )
        );
      })
      .sort((a, b) => {
        const getScore = (keyword: typeof a) => {
          const term = keyword.term.toLowerCase();

          // 完全一致
          if (term === target) {
            return 0;
          }

          // 前方一致
          if (term.startsWith(target)) {
            return 1;
          }

          // 部分一致
          if (term.includes(target)) {
            return 2;
          }

          // タグ一致
          if (
            keyword.tags?.some((tag) =>
              tag.toLowerCase().includes(target)
            )
          ) {
            return 3;
          }

          // 説明一致
          if (
            keyword.description
              .toLowerCase()
              .includes(target)
          ) {
            return 4;
          }

          return 5;
        };

        return getScore(a) - getScore(b);
      });
  }, [search]);

  const suggestions = useMemo(() => {
    if (!search.trim()) {
      return [];
    }

    const target = search.toLowerCase();

    return keywordList
      .filter((keyword) =>
        keyword.term
          .toLowerCase()
          .includes(target)
      )
      .sort((a, b) => {
        const aTerm = a.term.toLowerCase();
        const bTerm = b.term.toLowerCase();

        // 完全一致優先
        if (aTerm === target) return -1;
        if (bTerm === target) return 1;

        // 前方一致優先
        if (
          aTerm.startsWith(target) &&
          !bTerm.startsWith(target)
        ) {
          return -1;
        }

        if (
          !aTerm.startsWith(target) &&
          bTerm.startsWith(target)
        ) {
          return 1;
        }

        return 0;
      })
      .slice(0, 5);
  }, [search]);

  if (hash === "#/quiz") {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-3xl p-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold">
                単語クイズ
              </h1>
              <p className="mt-2 text-slate-400">
                説明から該当する単語を考えてください
              </p>
            </div>

            <a
              href={import.meta.env.BASE_URL}
              className="shrink-0 rounded-xl border border-slate-600 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              単語帳へ戻る
            </a>
          </div>

          <WordQuiz keywords={keywordList} />
        </div>
      </main>
    );
  }

  if (hash === "#/models") {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              AIモデル一覧
            </h1>

            <p className="mt-2 text-slate-400">
              生成AIパスポート頻出モデルまとめ
            </p>
          </div>

          <a
            href={import.meta.env.BASE_URL}
            className="shrink-0 rounded-xl border border-slate-600 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            単語帳へ戻る
          </a>
        </div>

        <AIModelTable
          keywords={keywordList}
        />
      </div>
    </main>
  );
}

if (hash === "#/booms") {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              AIブーム一覧
            </h1>

            <p className="mt-2 text-slate-400">
              AI発展の歴史と技術の変遷
            </p>
          </div>

          <a
            href={import.meta.env.BASE_URL}
            className="shrink-0 rounded-xl border border-slate-600 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            単語帳へ戻る
          </a>
        </div>

        <AiBoomTable
          keywords={keywordList}
        />
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl p-6">
        <Header
          onOpenQuiz={handleOpenQuiz}
          onOpenModels={handleOpenModels}
          onOpenBooms={handleOpenBooms}
        />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <SearchSuggestion
          suggestions={suggestions}
          onSelect={setSearch}
        />

        <div className="mt-8 grid gap-5">
          {filteredKeywords.map((keyword) => (
            <KeywordCard
              key={keyword.term}
              keyword={keyword}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
