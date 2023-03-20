import Image from "next/image";

export default function StudentTextBalloon({ studentMessage }) {
	return (
		<div className="">
			<div className="chat-image avatar">
				<div className="w-16 rounded-full">
					<Image
						src={"/images/student-raise-hand.png"}
						width={64}
						height={64}
						placeholder={`/vercel.svg`}
						alt="student avatar"
					/>
				</div>
			</div>
			<div className="chat-header text-lg">
				{"item	.name"}
				<time className="text-base opacity-50 px-2">12:45</time>
			</div>
			<div className={"chat-bubble-info"}>{""}</div>
		</div>
	);
}
