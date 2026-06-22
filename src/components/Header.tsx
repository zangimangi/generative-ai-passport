type Props = {
  onOpenQuiz: () => void;
  onOpenModels: () => void;
  onOpenBooms: () => void;
};

export default function Header({
  onOpenQuiz,
  onOpenModels,
  onOpenBooms
}: Props) {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-4xl font-bold">
          生成AIパスポート単語帳
        </h1>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onOpenBooms}
            className="shrink-0 rounded-xl border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20"
          >
            AIブーム、レベル一覧
          </button>

          <button
            type="button"
            onClick={onOpenModels}
            className="shrink-0 rounded-xl border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20"
          >
            AIモデル一覧
          </button>

          <button
            type="button"
            onClick={onOpenQuiz}
            className="shrink-0 rounded-xl border border-cyan-500/60 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            単語クイズ
          </button>
        </div>
      </div>

      <p className="mt-2 text-slate-400">
        シラバス詳細キーワード検索
      </p>
    </header>
  );
}
