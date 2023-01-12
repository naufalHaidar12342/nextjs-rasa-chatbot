import Link from "next/link";
import { useRouter } from "next/router";
export default function FirstQuestion() {
	const routerBack = useRouter();
	return (
		<div tabindex="0" className="group collapse collapse-plus rounded-box mb-5">
			<div className="collapse-title text-2xl font-semibold bg-primary group-focus:bg-white group-focus:text-primary">
				Bagaimana cara menggunakan chatbot ini?
			</div>
			<div className="collapse-content text-xl font-medium  bg-primary group-focus:bg-white group-focus:text-primary">
				<p>
					Langkah-langkah dalam memakai chatbot bisa dilihat pada halaman
					sebelumnya. Klik tombol
					<span
						onClick={() => routerBack.push("/help")}
						className="mx-2 btn hover:bg-primary bg-primary text-xl font-medium text-white hover:text-white"
						style={{ textTransform: "none" }}
					>
						Bantuan
					</span>
				</p>
			</div>
		</div>
	);
}
