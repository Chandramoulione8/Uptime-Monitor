export default function GlassCard({ children, className = "", hover = false }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.24)]",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.05] hover:shadow-[0_12px_40px_rgba(0,0,0,0.32)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
