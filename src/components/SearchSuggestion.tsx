import type { Keyword } from "../types/keyword";

type Props = {
  suggestions: Keyword[];
  onSelect: (value: string) => void;
};

export default function SearchSuggestion({
  suggestions,
  onSelect,
}: Props) {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      {suggestions.map((item) => (
        <button
          key={item.term}
          onClick={() => onSelect(item.term)}
          className="block w-full border-b border-slate-800 px-4 py-3 text-left hover:bg-slate-800"
        >
          {item.term}
        </button>
      ))}
    </div>
  );
}