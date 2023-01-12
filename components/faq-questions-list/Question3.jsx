import Link from "next/link";

export default function ThirdQuestion() {
	return (
		<div
			tabIndex={0}
			className="collapse group collapse-plus rounded-box mb-5 "
		>
			<div className="collapse-title text-2xl font-semibold bg-primary group-focus:bg-white group-focus:text-primary">
				Bagaimana cara menggunakan chatbot ini?
			</div>
			<div className="collapse-content text-xl font-medium bg-primary group-focus:bg-white group-focus:text-primary">
				<p>
					Langkah-langkah dalam memakai chatbot bisa dilihat pada halaman
					sebelumnya. Klik tombol bantuan untuk melihat lebih lengkap
					panduannya.
				</p>
				<Link href={"/help"}>Bantuan</Link>
			</div>
		</div>
	);
}
