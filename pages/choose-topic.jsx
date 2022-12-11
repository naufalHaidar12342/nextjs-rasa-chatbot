import Layout from "../components/Layout";

export default function ChooseTopic(second) {
	return (
		<Layout title="Choose topic">
			<div>
				<style jsx>{`
					.linear-gradient-text {
						background: -webkit-linear-gradient(
							-90deg,
							#ffffff 59.92%,
							#c8940f 20%
						);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				`}</style>
				<h2
					className="text-[50px] font-medium linear-gradient-text"
					style={{ fontWeight: 600 }}
				>
					Which topic do you want to learn today?
				</h2>
			</div>
		</Layout>
	);
}
