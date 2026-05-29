type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="キーワード検索..."
      className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-lg outline-none"
    />
  );
}