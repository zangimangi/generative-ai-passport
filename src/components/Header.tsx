type Props = {
  onOpenQuiz: () => void;
};

export default function Header({ onOpenQuiz }: Props) {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-4xl font-bold">
          生成AIパスポート単語帳
        </h1>

        <button
          type="button"
          onClick={onOpenQuiz}
          className="shrink-0 rounded-xl border border-cyan-500/60 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
        >
          単語クイズ
        </button>
      </div>

      <p className="mt-2 text-slate-400">
        シラバス詳細キーワード検索
      </p>
    </header>
  );
}
