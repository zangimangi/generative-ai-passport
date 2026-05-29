import { useMemo, useState } from "react";

import keywords from "./data/keywords.json";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchSuggestion from "./components/SearchSuggestion";
import KeywordCard from "./components/KeywordCard";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredKeywords = useMemo(() => {
    if (!search.trim()) {
      return keywords;
    }

    const target = search.toLowerCase();

    return keywords
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

    return keywords
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

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl p-6">
        <Header />

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