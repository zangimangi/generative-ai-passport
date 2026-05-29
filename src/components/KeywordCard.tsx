import type { Keyword } from "../types/keyword";

type Props = {
  keyword: Keyword;
};

export default function KeywordCard({
  keyword,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cyan-300">
          {keyword.term}
        </h2>

        <span className="text-sm text-slate-400">
          {keyword.category}
        </span>
      </div>

      <p className="mt-4 text-slate-200">
        {keyword.description}
      </p>
    </div>
  );
}