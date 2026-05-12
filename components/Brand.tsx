export default function Brand({ size = 20, color }: { size?: number; color?: string }) {
  return (
    <span className="inline-flex items-center gap-[10px] font-display font-bold tracking-tight" style={{ fontSize: size, color }}>
      <span className="relative inline-block rounded-md" style={{ width: 22, height: 22, background: 'linear-gradient(135deg,#0D7A7B,#0a5f60)' }}>
        <span className="absolute" style={{ inset: 5, background: 'var(--bg)', borderRadius: 3, clipPath: 'polygon(0 30%,100% 0,80% 100%,30% 80%)' }} />
      </span>
      Tripknot
    </span>
  );
}
