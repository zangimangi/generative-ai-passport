import type { Keyword } from "../types/keyword";

type AiBoom = {
  term: string;
  main: string;
  description: string;
  example: string;
};

const aiBooms: AiBoom[] = [
  {
    term: "第一次AIブーム",
    main: "ルールベース",
    description:
      "1950〜60年代に起きた最初のAI研究の盛り上がり期。ダートマス会議（1956年）を契機に、論理的な推論や探索アルゴリズムの研究が活発に行われた。しかし当時のコンピュータ性能と現実問題の複雑さの壁に阻まれ、期待された成果が出せず1970年代に「AIの冬」が訪れた。",
    example:
      "数学の定理の自動証明プログラム（Logic Theorist）、迷路解きや簡単なゲームプレイAIの開発",
  },
  {
    term: "第二次AIブーム",
    main: "エキスパートシステム",
    description:
      "1980年代に起きた2度目のAI研究・産業応用の盛り上がり期。エキスパートシステムが登場しました。これは専門家の知識をルールとして記述し、意思決定を支援するもので、医療診断や製造業などで実用化されました。しかし、知識の獲得や更新のコストが高く、限界が指摘されました。その後、1990年代に再び「AIの冬」が訪れましたが、この経験は後の機械学習・ディープラーニング研究に活かされました。",
    example:
      "医療診断支援システムMYCIN、金融リスク審査エキスパートシステム、DEC社のXCONシステム",
  },
  {
    term: "第三次AIブーム",
    main: "ディープラーニング",
    description:
      "2010年代から現在まで続くAI研究・応用の急激な発展期。インターネットの普及により大量のデータ（ビッグデータ）の収集が可能になり、それを基にしたディープラーニング技術の進展がAIの飛躍的な発展を促しました。これにより、自動運転、音声認識、画像認識など多様な分野でAIが実用化されました。",
    example:
      "2012年のAlexNetによる画像認識の革命、2016年のAlphaGoの世界チャンピオン撃破、2022年のChatGPTの登場、自動運転、音声認識、画像認識",
  },
];

export default function AIBoomTable({
  keywords,
}: {
  keywords: Keyword[];
}) {
  const rows = aiBooms
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
        AIブーム一覧
      </p>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-[1400px] table-fixed text-sm">
        <thead className="bg-slate-950 text-xs text-slate-400">
          <tr>
            <th className="w-40 px-4 py-3 text-center">
              AIブーム
            </th>

            <th className="w-48 px-4 py-3 text-center">
              中心技術
            </th>

            <th className="w-[500px] px-4 py-3 text-left">
              概要
            </th>

            <th className="w-[250px] px-4 py-3 text-left">
              代表例
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800">
          {rows.map((row) => (
            <tr
              key={row.term}
              className="transition hover:bg-slate-800/60"
            >
              {/* AIブーム */}
              <td className="px-4 py-9 align-middle text-center">
                <div className="text-sm font-bold text-cyan-300">
                  {row.term}
                </div>
              </td>

              {/* 中心技術 */}
              <td className="px-4 py-9 align-middle">
                <div className="font-semibold text-slate-100">
                  {row.main}
                </div>
              </td>

              {/* 概要 */}
              <td className="px-4 py-9 leading-relaxed text-slate-300">
                {row.description}
              </td>

              {/* 代表例 */}
              <td className="px-4 py-9 leading-relaxed text-slate-300">
                {row.example}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
}