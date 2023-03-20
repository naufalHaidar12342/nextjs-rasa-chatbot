import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";
import { FaQuestionCircle } from "react-icons/fa";

export default function Help() {
	return (
		<Layout title="Help page">
			<style jsx>{``}</style>
			<LazyMotion features={domAnimation}>
				<m.div
					className="flex flex-col items-center"
					animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
				>
					<h2 className="text-[50px] font-semibold linear-gradient-text">
						What kind of help you need?
					</h2>
					<m.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.75 }}>
						<Link href={"/frequently-asked-question"} className="pt-2">
							<div className="rounded-2xl w-[700px] h-20 flex justify-center items-center bg-darkerYellow">
								<FaQuestionCircle className="text-4xl" />
								<h4 className="text-4xl px-4 font-semibold">FAQ</h4>
							</div>
						</Link>
					</m.div>
				</m.div>
				<div className="p-4 w-full rounded-2xl">
					<div className="scroll overflow-y-scroll h-[200px] flex flex-col">
						<div className="p-6 flex flex-col items-center">
							<h2>Contact:</h2>
							<h3>Tim Chatbot Pendamping Guru (A/n Haidar)</h3>
							<h3>085156967023</h3>
						</div>
					</div>
				</div>
				<m.div
					animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
				>
					<m.button
						style={{ fontWeight: 500 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.75 }}
					>
						<Link href={"/"} className="pt-2">
							<div className="rounded-2xl w-[700px] h-20 flex justify-center items-center bg-darkerYellow">
								<h4 className="text-4xl px-4" style={{ fontWeight: 600 }}>
									Back to Home
								</h4>
							</div>
						</Link>
					</m.button>
				</m.div>
			</LazyMotion>
		</Layout>
	);
}
