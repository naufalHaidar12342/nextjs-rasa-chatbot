import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/Layout";
import { FaQuestionCircle } from "react-icons/fa";
import Modal from "../components/Modal";
import StartingConversation from "../components/chatbot-tutorials/chatting-guide/StartingConversation";

export default function Help() {
	return (
		<Layout title="Help page">
			<style jsx>{`
				/* width */
				.scroll::-webkit-scrollbar {
					width: 16px;
					background-color: transparent;
				}

				/* Track */
				.scroll::-webkit-scrollbar-track {
					box-shadow: inset 0 0 5px grey;
					border-radius: 10px;
				}

				.scroll::-webkit-scrollbar-thumb {
					background: #d3d3d3;
					border-radius: 16px;
				}
			`}</style>
			<motion.div
				className="flex flex-col items-center"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
			>
				<h2 className="text-[50px] font-semibold linear-gradient-text">
					What kind of help you need?
				</h2>
				<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.75 }}>
					<Link href={"/frequently-asked-question"} className="pt-2">
						<div className="rounded-2xl w-[700px] h-20 flex justify-center items-center bg-darkerYellow">
							<FaQuestionCircle className="text-4xl" />
							<h4 className="text-4xl px-4 font-semibold">FAQ</h4>
						</div>
					</Link>
				</motion.div>
			</motion.div>
			<div className="p-4 w-full rounded-2xl">
				<div className="scroll overflow-y-scroll h-[600px] flex flex-col">
					<div className="p-6 flex flex-col justify-evenly">
						<StartingConversation />
						<StartingConversation />
						<StartingConversation />
					</div>
				</div>
			</div>
			<motion.div
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.5 }}
				transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
			>
				<LazyMotion features={domAnimation}>
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
				</LazyMotion>
			</motion.div>
		</Layout>
	);
}
