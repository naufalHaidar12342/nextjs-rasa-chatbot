import Layout from "../components/Layout";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { motion } from "framer-motion";

export default function FAQ() {
	return (
		<Layout title="Frequently Asked Question">
			<style jsx>{`
				.linear-gradient-text {
					background: linear-gradient(-90deg, #c8940f 20%, #ffffff 59.92%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
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
				className="flex flex-row items-center"
				animate={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.5 }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
			>
				<MdOutlineQuestionAnswer className="text-[50px] font-semibold mx-2" />
				<h2 className="text-[50px] font-semibold linear-gradient-text">
					Frequently Asked Questions
				</h2>
			</motion.div>
			<div className="p-4 w-full rounded-2xl">
				<div className="scroll overflow-y-scroll h-96 flex flex-col ">
					<div className="p-6 flex flex-col justify-evenly">
						<div
							tabindex="0"
							className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
						>
							<div className="collapse-title text-xl font-medium">
								Focus me to see content
							</div>
							<div className="collapse-content">
								<p>
									tabindex="0" attribute is necessary to make the div focusable
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
