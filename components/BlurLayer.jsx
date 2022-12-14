export default function BlurLayer({ children }) {
  return (
    <div
      className="relative overflow-hidden z-20 p-20 rounded-[32px] flex items-center flex-col"
      style={{
        backdropFilter: "saturate(100%) blur(20px)",
        background: "rgba(255, 255, 255, 0.25)",
      }}
    >
      {children}
    </div>
  );
}
