export default function ScrollableLayout({ children }) {
  return (
    <div
      className="h-1/2 overflow-scroll relative  z-20 p-20 rounded-[32px] flex items-center flex-col "
      style={{
        backdropFilter: "saturate(100%) blur(20px)",
        background: "rgba(255, 255, 255, 0.25)",
      }}
    >
      <div>{children}</div>
    </div>
  );
}
