import Layout from "../components/Layout";
import { useCallback, useEffect, useState } from "react";
import { MdMic } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { domAnimation, LazyMotion, m } from "framer-motion";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

export default function Chat() {
	const [robotChats, setRobotChats] = useState([]);
	const [studentChats, setStudentChats] = useState({
		user_chat: "",
	});
	const { transcript, resetTranscript } = useSpeechRecognition();
	const handleChange = (e) => {
		e.preventDefault();
		setStudentChats({
			...studentChats,
			[e.target.name]: e.target.value,
		});
	};

	const cipaResponse = async () => {
		await axios
			.post(
				"http://localhost:5005/webhooks/rest/webhook",
				{
					sender: "1",
					message: studentChats.user_chat,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((responses) => {
				const chat = {
					bot: false,
					message: [studentChats.user_chat],
				};
				const botResponse = {
					bot: true,
					message: [],
				};
				const responseText = responses.data.map((item) => item.text);
				botResponse.message = responseText;
				setRobotChats([...robotChats, chat, botResponse]);
			})
			.catch((errors) => {
				console.log(errors);
			});
	};
	async function handleSend(event) {
		event.preventDefault();
		if (studentChats.user_chat === "") {
			return;
		}
		await cipaResponse();
		setStudentChats({
			user_chat: "",
		});
		resetTranscript();
	}
	async function handleKeyUp(event) {
		event.preventDefault();
		if (studentChats.user_chat === "") {
			return;
		}
		if (event.key === "Enter") {
			const chatFromStudent = {
				bot: false,
				message: studentChats.user_chat,
			};
			setStudentChats({
				user_chat: "",
			});
			return setStudentChats([...robotChats, chatFromStudent]);
		}
	}
	const handleVoice = useCallback(() => {
		SpeechRecognition.startListening({
			continuous: true,
			language: "id-ID",
		});
	}, []);

	useEffect(() => {
		handleVoice();
		setStudentChats({
			user_chat: transcript,
		});
	}, [handleVoice, transcript]);

	return (
		<Layout title="Chat Room">
			<style jsx global>{``}</style>
			<LazyMotion features={domAnimation}>
				<div className=" bg-white p-4 w-full text-black rounded-2xl">
					<div className="scroll flex flex-col-reverse overflow-y-scroll h-[400px]"></div>
					<div
						id="input"
						className="rounded-2xl bg-secondary2 p-5 bottom-0 mt-5 h-24 flex flex-row space-x-3 space-y-1 items-center"
					>
						<form className="h-full w-full">
							<input
								type="text"
								name=""
								id=""
								className="w-full h-full rounded-2xl text-2xl p-5 bg-white focus:outline-none"
							/>
						</form>
						<m.button
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 0.9 }}
							transition={{
								type: "spring",
								bounce: 0.7,
							}}
							className={"rounded-full bg-primary text-4xl p-4 text-white"}
							onClick={""}
						>
							<MdMic />
						</m.button>
					</div>
				</div>
				<m.div
					style={{ fontWeight: 500 }}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.75 }}
					className="pt-5"
				>
					<Link
						href={"/choose-topic"}
						className="pt-2 rounded-2xl w-[700px] h-20 flex justify-center items-center bg-darkerYellow"
					>
						<h4 className="text-4xl px-4 font-semibold">Change Topic</h4>
					</Link>
				</m.div>
			</LazyMotion>
		</Layout>
	);
}
