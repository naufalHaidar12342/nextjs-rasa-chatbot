import { motion } from "framer-motion";
import Link from "next/link";

export default function FirstQuestion() {
	return (
		<div className="collapse collapse-plus rounded-box mb-5">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-2xl text-white font-semibold bg-primary peer-checked:bg-white peer-checked:text-primary">
				Bagaimana cara menggunakan chatbot ini?
			</div>
			<div className="collapse-content text-xl font-medium  bg-primary peer-checked:bg-white peer-checked:text-primary">
				<p>
					Langkah-langkah dalam memakai chatbot bisa dilihat pada halaman
					sebelumnya. Klik tombol di bawah ini untuk melihat panduan dalam
					menggunakan <i>chatbot</i>.
				</p>
				<motion.div
					className="flex flex-col items-start "
					style={{ fontWeight: 500 }}
					whileHover={{ scale: 1.0 }}
					whileTap={{ scale: 0.9 }}
				>
					<Link
						href={"/help"}
						className="rounded-2xl bg-primary text-white p-3"
					>
						Bantuan
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
