import Layout from "../components/Layout";
import { MdOutlineQuestionAnswer } from "react-icons/md";
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
			<div className="flex flex-row items-center">
				<MdOutlineQuestionAnswer className="text-[50px] font-semibold mx-2" />
				<h2 className="text-[50px] font-semibold linear-gradient-text">
					Frequently Asked Questions
				</h2>
			</div>
			<div
				tabindex="0"
				className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
			>
				<div className="collapse-title text-xl font-medium">
					Focus me to see content
				</div>
				<div className="collapse-content">
					<p>tabindex="0" attribute is necessary to make the div focusable</p>
				</div>
			</div>
		</Layout>
	);
}
