export default function ScrollableLayout({ children }) {
	return (
		<div
			className="h-1/2 overflow-scroll relative z-21 p-20 rounded-[32px] "
			style={{
				backdropFilter: "saturate(100%) blur(20px)",
				background: "rgba(255, 255, 255, 0.25)",
			}}
		>
			{children}
		</div>
	);
}
