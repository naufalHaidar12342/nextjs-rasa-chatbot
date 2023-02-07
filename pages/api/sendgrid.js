import sendgrid from "@sendgrid/mail";

export default async function handler(req, res) {
	try {
		const { reportedProblem } = req.body;

		sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

		await sendgrid
			.send({
				to: process.env.TO_EMAIL,
				from: process.env.FROM_EMAIL,
				subject: "Laporan Masalah dari Chatbot",
				templateId: "d-2e720a296094420bb0813cd7c23b4ae7",
				dynamicTemplateData: {
					reportedProblem: reportedProblem,
				},
			})
			.then(() => {
				return res.status(201).json({ message: "success" });
				console.log("problem successfully sent");
			})
			.catch((error) => {
				console.log(error.response.body.errors);
				return res.status(400).json({ error });
			});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}
