import Image from "next/image";
import Modal from "../../Modal";

export default function StartingConversation() {
	return (
		<div className="flex flex-col">
			<div className="" id="1">
				<h3 className="font-medium" style={{ fontSize: "40px" }}>
					1. Klik tombol "Start" yang berwarna kuning agak gelap
				</h3>
				<div className="w-32 h-32">
					<Image
						src={"/images/chatbot-background-vXV1z5J8N-transformed.png"}
						style={{ objectFit: "fill" }}
						width={320}
						height={320}
						className=""
					/>
				</div>
				<Modal>
					<Image
						src={"/images/chatbot-background-vXV1z5J8N-transformed.png"}
						style={{ objectFit: "cover" }}
						fill
						className="p-15 w-full h-full"
					/>
				</Modal>
			</div>
			<div className="pt-4" id="2">
				<h3 className="font-medium" style={{ fontSize: "40px" }}>
					2. Selanjutnya, pilih topik pembicaraan
				</h3>
				<Modal>
					<Image
						src={"/images/chatbot-background-vXV1z5J8N-transformed.png"}
						style={{ objectFit: "cover" }}
						fill
						className="p-15 w-full h-full"
					/>
				</Modal>
			</div>
			<div className="pt-4" id="3">
				<h3 className="font-medium" style={{ fontSize: "40px" }}>
					3. Terakhir, klik 1x pada bagian sejajar <i>chat</i>
				</h3>
				<Modal>
					<Image
						src={"/images/chatbot-background-vXV1z5J8N-transformed.png"}
						style={{ objectFit: "cover" }}
						fill
						className="p-15 w-full h-full"
					/>
				</Modal>
			</div>
		</div>
	);
}
