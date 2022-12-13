import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";
import { FaQuestionCircle } from "react-icons/fa";
export default function Help() {
	return (
		<Layout title="Help page">
			<style jsx>{`
				.linear-gradient-text {
					background: -webkit-linear-gradient(
						-90deg,
						#ffffff 55.92%,
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
					How to use chatbot
				</h2>
				<Link href={"/faq"} className="pt-2">
					<div className="rounded-2xl w-[700px] h-20 flex justify-center items-center bg-darkerYellow">
						<FaQuestionCircle className="text-4xl" />
						<h4 className="text-4xl px-4" style={{ fontWeight: 600 }}>
							FAQ
						</h4>
					</div>
				</Link>
			</motion.div>
		</Layout>
	);
}
