import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";

export default function ChooseTopic(second) {
	return (
		<Layout title="Choose topic">
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
			<motion.div
				className="flex flex-col items-center"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
			>
				<h2
					className="text-[50px] font-medium linear-gradient-text"
					style={{ fontWeight: 600 }}
				>
					Which topic do you want to learn today?
				</h2>
				<Link href={""}></Link>
			</motion.div>
		</Layout>
	);
}
