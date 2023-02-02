require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);
export default async function handler(req, res) {
	const { reportProblem } = req.body;
	const msg = {
		to: TO_EMAIL,
		from: FROM_EMAIL,
		subject: "Laporan Masalah Chatbot",
		html: `<p>${reportProblem}</p>`,
	};
	await sgMail.send(msg);
	res.status(200).json({ success: true });
}
