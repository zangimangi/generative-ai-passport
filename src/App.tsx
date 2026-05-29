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

    return keywords.filter((keyword) => {
      const target = search.toLowerCase();

      return (
        keyword.term.toLowerCase().includes(target) ||
        keyword.category.toLowerCase().includes(target) ||
        keyword.description.toLowerCase().includes(target)
      );
    });
  }, [search]);

  const suggestions = useMemo(() => {
    if (!search.trim()) {
      return [];
    }

    return keywords
      .filter((keyword) =>
        keyword.term
          .toLowerCase()
          .includes(search.toLowerCase())
      )
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