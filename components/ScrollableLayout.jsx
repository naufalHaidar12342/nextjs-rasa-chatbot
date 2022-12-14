export default function ScrollableLayout({ children }) {
  return (
    <div className="h-1/2 overflow-scroll">
      <div>{children}</div>
    </div>
  );
}
