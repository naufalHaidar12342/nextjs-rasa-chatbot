import { motion } from "framer-motion";
import Link from "next/link";

export default function FourthQuestion() {
	return (
		<div className="collapse collapse-plus rounded-box mb-5">
			<input type="checkbox" className="peer" />
			<div className="collapse-title text-2xl bg-primary text-white font-semibold peer-checked:bg-white peer-checked:text-primary">
				Ketika saya jalankan di komputer, ada kendala. Lapornya kemana?
			</div>
			<div className="collapse-content text-xl bg-primary text-white peer-checked:bg-white peer-checked:text-primary">
				<p>
					Hubungi kami melalui fitur <i>Report</i> pada halaman awal. Untuk
					langsung menuju ke halaman pelaporan masalah, klik tombol{" "}
					<motion.div
						className="flex flex-col items-start "
						style={{ fontWeight: 500 }}
						whileHover={{ scale: 1.0 }}
						whileTap={{ scale: 0.9 }}
					>
						<Link
							href={"/report-problem"}
							className="rounded-2xl bg-primary text-white p-3"
						>
							Laporkan masalah
						</Link>
					</motion.div>
				</p>
			</div>
		</div>
	);
}
