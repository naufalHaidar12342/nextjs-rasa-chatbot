import Link from "next/link";

export default function FifthQuestion() {
	return (
		<div className="collapse collapse-plus peer rounded-box mb-5">
			<div className="collapse-title text-2xl font-semibold bg-primary text-white peer-checked:bg-white peer-checked:text-primary ">
				Bagaimana cara menggunakan chatbot ini?
			</div>
			<div className="collapse-content text-xl bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				<p>
					Langkah-langkah dalam memakai chatbot bisa dilihat pada halaman
					sebelumnya. Klik tombol
				</p>
			</div>
		</div>
	);
}
