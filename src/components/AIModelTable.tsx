import type { Keyword } from "../types/keyword";

type ModelRow = {
  term: string;
  provider: string;
  category: string;
  timeline: string;
  feature: string;
  useCase: string;
};

const modelRows: ModelRow[] = [
  {
    term: "ChatGPT",
    provider: "OpenAI",
    category: "対話型AI",
    timeline: "2022年11月公開。公開直後から生成AI普及の象徴になった。",
    feature: "GPT-3.5をベースにRLHFで対話品質を高めたサービス。",
    useCase: "文章生成、要約、翻訳、コード生成、相談、学習支援",
  },
  {
    term: "GPTモデル",
    provider: "OpenAI",
    category: "大規模言語モデル",
    timeline: "2015年に開発が始まり、2018年に最初のGPTが発表された。",
    feature: "自己回帰型で、前の単語や文脈に基づいて次の単語を生成する。",
    useCase: "テキスト生成、チャット、補完、推論、アプリ組み込み",
  },
  {
    term: "GPT-3.5",
    provider: "OpenAI",
    category: "大規模言語モデル",
    timeline: "2022年のChatGPT初期版で広く利用され、2023年にAPI公開。",
    feature: "InstructGPTを基に指示追従とアライメントを強化した。",
    useCase: "低コストなチャット、文章生成、分類、要約",
  },
  {
    term: "GPT-4",
    provider: "OpenAI",
    category: "マルチモーダルLLM",
    timeline: "2023年3月発表。米国司法試験で上位10%相当の成績が報告された。",
    feature: "GPT-3.5よりハルシネーションが低減し、画像なども扱える。",
    useCase: "高度な推論、専門文書理解、画像理解、業務支援",
  },
  {
    term: "GPT-4o",
    provider: "OpenAI",
    category: "マルチモーダルLLM",
    timeline: "2024年5月発表。",
    feature: "テキスト、音声、画像を統合処理し、リアルタイム会話に強い。",
    useCase: "音声対話、画像を見ながらの会話、リアルタイム支援",
  },
  {
    term: "GPT-o1",
    provider: "OpenAI",
    category: "推論モデル",
    timeline: "2024年に推論特化モデルとして登場。",
    feature: "複雑な問題を段階的に解く推論能力を重視したモデル。",
    useCase: "数学、コード、論理推論、複雑な意思決定支援",
  },
  {
    term: "GPT-o3",
    provider: "OpenAI",
    category: "推論モデル",
    timeline: "2024年末から2025年にかけて発表。o3-mini、o3、o3-proの系列がある。",
    feature: "高い推論性能を持ち、o3-miniでは計算量を選択できる。",
    useCase: "高難度推論、コーディング、分析、研究支援",
  },
  {
    term: "GPT-4.1",
    provider: "OpenAI",
    category: "API向けLLM",
    timeline: "2025年発表。",
    feature: "コーディング、長文コンテキスト、指示追従を強化した。",
    useCase: "長文処理、エージェント開発、コード生成",
  },
  {
    term: "GPT-5",
    provider: "OpenAI",
    category: "次世代AIモデル",
    timeline: "2025年8月公開。GPT-5、GPT-5 Thinking、GPT-5 Proがある。",
    feature: "推論、マルチモーダル、エージェント能力を統合した設計。",
    useCase: "高度な業務支援、複雑タスクの自律実行、専門推論",
  },
  {
    term: "Sora",
    provider: "OpenAI",
    category: "動画生成AI",
    timeline: "2024年2月発表、同年12月一般公開。",
    feature: "Transformerを使う拡散モデルで、テキストや画像から動画を生成する。",
    useCase: "映像制作、広告、教育動画、ストーリーボード制作",
  },
  {
    term: "Image Generation",
    provider: "OpenAIほか",
    category: "画像生成AI",
    timeline: "2022年頃からDALL-E、Stable Diffusion、Midjourneyなどで普及。",
    feature: "拡散モデルや自己回帰モデルで画像を生成する。",
    useCase: "イラスト、広告素材、デザイン案、コンセプト画像",
  },
  {
    term: "Operator",
    provider: "OpenAI",
    category: "ブラウザ操作エージェント",
    timeline: "2025年発表。",
    feature: "ChatGPT内のエージェントモードとしてブラウザ操作を行う。",
    useCase: "Web予約、フォーム入力、調査、購入などの自動化",
  },
  {
    term: "Codex",
    provider: "OpenAI",
    category: "コード生成AI",
    timeline: "2025年5月16日に研究プレビューとして公開。",
    feature: "コード生成、説明、デバッグ、補完に特化したAI。",
    useCase: "ソフトウェア開発、レビュー、テスト作成、修正作業",
  },
  {
    term: "BERTモデル",
    provider: "Google",
    category: "自然言語理解モデル",
    timeline: "2018年公開。",
    feature: "双方向文脈、MLM、NSPで文章理解を学習する。",
    useCase: "文書分類、検索、質問応答、固有表現抽出",
  },
  {
    term: "RoBERTa",
    provider: "Meta AI",
    category: "BERT改良モデル",
    timeline: "2019年発表。",
    feature: "BERTより大量のデータと長時間訓練で言語理解を強化した。",
    useCase: "自然言語推論、感情分析、読解、分類",
  },
  {
    term: "ALBERT（a Lite BERT）",
    provider: "Google",
    category: "軽量BERT",
    timeline: "2019年発表。",
    feature: "BERTの性能を保ちつつパラメータ数を削減した。",
    useCase: "軽量な自然言語理解、リソース制約下のNLP",
  },
  {
    term: "Gemini",
    provider: "Google",
    category: "マルチモーダルAI",
    timeline: "2023年12月発表。2024年以降も継続進化。",
    feature: "テキスト、画像、音声、動画、コードを統合的に処理する。",
    useCase: "Google Workspace連携、検索、文書作成、開発支援",
  },
  {
    term: "Claude",
    provider: "Anthropic",
    category: "大規模言語モデル",
    timeline: "Haiku、Sonnet、Opusの三層構成で展開。",
    feature: "Constitutional AIで安全性、有用性、誠実性を高めている。",
    useCase: "長文読解、文章作成、コーディング、業務分析",
  },
  {
    term: "Copilot",
    provider: "Microsoft / GitHub",
    category: "AIアシスタント",
    timeline: "Microsoft製品群への統合が進み、GPT-5への移行も進行。",
    feature: "Microsoft 365やGitHubなどに組み込まれるAI支援ブランド。",
    useCase: "コード補完、資料作成、メール作成、表計算支援",
  },
  {
    term: "Veo3",
    provider: "Google DeepMind",
    category: "動画生成AI",
    timeline: "2025年発表。",
    feature: "映画的な動画表現や音声・効果音生成を特徴とする。",
    useCase: "動画制作、プロモーション、映像表現、教育素材",
  },
  {
    term: "GenSpark",
    provider: "GenSpark",
    category: "スーパーエージェント",
    timeline: "AI Slides、AI Sheets、AI Call For Meなどを統合。",
    feature: "画像、音声、テキストを横断するマルチモーダル統合構造。",
    useCase: "旅行計画、資料生成、議事録、電話対応、調査",
  },
  {
    term: "Skywork AI",
    provider: "Kunlun Tech",
    category: "ワークスペース型エージェント",
    timeline: "オープンソース開発により透明性と拡張性を重視。",
    feature: "6種類の専門エージェントがタスクを分担する。",
    useCase: "レポート、スライド、スプレッドシート、ポッドキャスト生成",
  },
];

export default function AIModelTable({
  keywords,
}: {
  keywords: Keyword[];
}) {
  const rows = modelRows
    .map((row) => ({
      ...row,
      keyword: keywords.find(
        (keyword) => keyword.term === row.term
      ),
    }))
    .filter((row) => row.keyword);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
      <div className="border-b border-slate-800 p-5">
        <p className="text-sm font-bold text-emerald-300">
          AIモデル・サービス一覧
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          keywords.jsonに存在するモデル系キーワードを、年表・特徴・用途で整理しています。
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[1100px] text-left text-sm">
          <thead className="bg-slate-950 text-xs text-slate-400">
            <tr>
              <th className="px-4 py-3">モデル</th>
              <th className="px-4 py-3">提供元 / 分類</th>
              <th className="px-4 py-3">年表・できごと</th>
              <th className="px-4 py-3">特徴</th>
              <th className="px-4 py-3">主な用途</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {rows.map((row) => (
              <tr
                key={row.term}
                className="align-top transition hover:bg-slate-800/60"
              >
                <td className="px-4 py-4">
                  <div className="font-bold text-cyan-300">
                    {row.term}
                  </div>
                  <div className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-400">
                    {row.keyword?.description}
                  </div>
                </td>
                <td className="px-4 py-4 text-slate-200">
                  <div>{row.provider}</div>
                  <div className="mt-2 inline-flex rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                    {row.category}
                  </div>
                </td>
                <td className="px-4 py-4 leading-relaxed text-slate-300">
                  {row.timeline}
                </td>
                <td className="px-4 py-4 leading-relaxed text-slate-300">
                  {row.feature}
                </td>
                <td className="px-4 py-4 leading-relaxed text-slate-300">
                  {row.useCase}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
