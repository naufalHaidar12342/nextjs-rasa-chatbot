import Layout from "../components/Layout";
import { domAnimation, LazyMotion, m, motion } from "framer-motion";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function FAQ({ separateContents }) {
	return (
		<Layout title="Frequently Asked Questions">
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
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
			>
				<div className="flex flex-row items-center">
					<h2 className="text-[50px] font-semibold linear-gradient-text">
						Frequently Asked Questions
					</h2>
				</div>
				<LazyMotion features={domAnimation}>
					<m.div
						style={{ fontWeight: 500 }}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.75 }}
					>
						<Link href={"/help"} className="pt-2">
							<div className="rounded-2xl w-[700px] h-16 flex justify-center items-center bg-darkerYellow">
								<h4 className="text-4xl px-4" style={{ fontWeight: 600 }}>
									Back
								</h4>
							</div>
						</Link>
					</m.div>
				</LazyMotion>
			</motion.div>
			<div className="p-4 w-full rounded-2xl">
				<div className="scroll overflow-y-scroll h-96 flex flex-col ">
					<div className="p-6 flex flex-col justify-evenly">
						<LazyMotion features={domAnimation}>
							<m.div
								animate={{ opacity: 1, scale: 1 }}
								initial={{ opacity: 0, scale: 0.5 }}
								transition={{
									duration: 0.8,
									delay: 0.5,
									ease: [0, 0.71, 0.2, 1.01],
								}}
							>
								{separateContents.map((content, key) => (
									<div
										className="collapse collapse-plus rounded-box mb-5"
										key={key}
									>
										<input type="checkbox" className="peer" />
										<div className="collapse-title text-2xl text-white font-semibold bg-primary peer-checked:bg-white peer-checked:text-primary">
											{content.contentTitle}
										</div>
										<div className="collapse-content text-xl font-medium  bg-primary peer-checked:bg-white peer-checked:text-primary">
											<ReactMarkdown>
												{content.contentBody.markdown}
											</ReactMarkdown>
										</div>
									</div>
								))}
							</m.div>
						</LazyMotion>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const API =
		"https://us-west-2.cdn.hygraph.com/content/clfdn5vou0vsn01uk8vgd13f4/master";
	const client = new GraphQLClient(API);
	const { separateContents } = await client.request(`{
		separateContents(where: {contentCategory: FAQ}){
			contentTitle
			contentBody{
				markdown
			}
		}
	}`);
	return {
		props: {
			separateContents,
		},
	};
}
