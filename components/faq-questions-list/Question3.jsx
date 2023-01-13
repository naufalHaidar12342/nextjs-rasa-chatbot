import Link from "next/link";

export default function ThirdQuestion() {
	return (
		<div className="collapse collapse-plus rounded-box mb-5 ">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-2xl font-semibold bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				Apakah <i>chatbot</i> ini dapat diakses kapan saja?
			</div>
			<div className="collapse-content text-xl font-medium bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				<p>
					Untuk saat ini, <i>chatbot</i> yang kami kembangkan baru bisa
					dijalankan secara lokal pada komputer. Anda harus menjalankan{" "}
					<i>server</i> untuk <i>website</i> dari <i>chatbot</i> sekaligus{" "}
					<i>server</i> untuk <i>chatbot conversation</i>
				</p>
			</div>
		</div>
	);
}
