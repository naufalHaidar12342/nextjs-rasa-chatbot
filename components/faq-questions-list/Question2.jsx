import Link from "next/link";

export default function SecondQuestion() {
	return (
		<div
			tabindex="0"
			className="collapse collapse-plus bg-white text-black rounded-box mb-5"
		>
			<div className="collapse-title text-2xl font-medium text-primary">
				Apakah harus pakai <i>monitor touchscreen</i> untuk menggunakan{" "}
				<i>chatbot</i> ?
			</div>
			<div className="collapse-content text-xl">
				<p>
					Tidak harus, kok! <i>Chatbot</i> ini tetap dapat digunakan pada
					komputer dengan <i>monitor</i> tanpa layar sentuh/<i>touchscreen</i>
				</p>
			</div>
		</div>
	);
}
