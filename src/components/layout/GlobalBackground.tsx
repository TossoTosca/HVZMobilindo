export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {/* TOP LEFT GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full top-[-200px] left-[-200px] animate-pulse-slow" />

      {/* BOTTOM RIGHT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full bottom-[-150px] right-[-150px] animate-pulse-slow" />

      {/* moving ambient layer */}
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-[float_12s_ease-in-out_infinite]" />
    </div>
  );
}