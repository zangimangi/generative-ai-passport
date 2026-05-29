import type { Keyword } from "../types/keyword";

type Props = {
  keyword: Keyword;
};

export default function KeywordCard({
  keyword,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-cyan-300">
            {keyword.term}
          </h2>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-950 px-3 py-1 text-xs text-cyan-300">
              {keyword.chapter}
            </span>

            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {keyword.section}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-bold tracking-wide text-cyan-300">
          説明
        </h3>

        <p className="mt-2 leading-relaxed text-slate-200">
          {keyword.description}
        </p>
      </div>

      {keyword.example && (
        <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800 p-4">
          <div className="text-sm font-bold text-cyan-300">
            具体例
          </div>

          <div className="mt-2 leading-relaxed text-slate-300">
            {keyword.example}
          </div>
        </div>
      )}

      {keyword.tags && keyword.tags.length > 0 && (
        <div className="mt-5">
          <div className="mb-2 text-sm font-bold text-cyan-300">
            タグ
          </div>

          <div className="flex flex-wrap gap-2">
            {keyword.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}