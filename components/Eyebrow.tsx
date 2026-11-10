export default function Eyebrow({
  children,
  tone = "gold",
  align = "left",
}: {
  children: React.ReactNode;
  tone?: "gold" | "light";
  align?: "left" | "center";
}) {
  const color = tone === "light" ? "text-gold" : "text-gold-dark";
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] ${color} ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
