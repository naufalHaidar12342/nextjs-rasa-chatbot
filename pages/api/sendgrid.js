import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENGRID_API_KEY);
export default async function handler(req, res) {
	try {
		await sendgrid.send({
			to: "chatbotpendampingguru@gmail.com",
			from: "chatbotpendampingguru@gmail.com",
			subject: `${req.body.subject}`,
			html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
	data-editor-version="2"
	class="sg-campaigns"
	xmlns="http://www.w3.org/1999/xhtml"
>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
		/>
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
		<!--<![endif]-->
		<!--[if (gte mso 9)|(IE)]>
			<xml>
				<o:OfficeDocumentSettings>
					<o:AllowPNG />
					<o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
			</xml>
		<![endif]-->
		<!--[if (gte mso 9)|(IE)]>
			<style type="text/css">
				body {
					width: 600px;
					margin: 0 auto;
				}
				table {
					border-collapse: collapse;
				}
				table,
				td {
					mso-table-lspace: 0pt;
					mso-table-rspace: 0pt;
				}
				img {
					-ms-interpolation-mode: bicubic;
				}
			</style>
		<![endif]-->
		<style type="text/css">
			body,
			p,
			div {
				font-family: arial, helvetica, sans-serif;
				font-size: 14px;
			}
			body {
				color: #ffffff;
			}
			body a {
				color: #1188e6;
				text-decoration: none;
			}
			p {
				margin: 0;
				padding: 0;
			}
			table.wrapper {
				width: 100% !important;
				table-layout: fixed;
				-webkit-font-smoothing: antialiased;
				-webkit-text-size-adjust: 100%;
				-moz-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
			}
			img.max-width {
				max-width: 100% !important;
			}
			.column.of-2 {
				width: 50%;
			}
			.column.of-3 {
				width: 33.333%;
			}
			.column.of-4 {
				width: 25%;
			}
			ul ul ul ul {
				list-style-type: disc !important;
			}
			ol ol {
				list-style-type: lower-roman !important;
			}
			ol ol ol {
				list-style-type: lower-latin !important;
			}
			ol ol ol ol {
				list-style-type: decimal !important;
			}
			@media screen and (max-width: 480px) {
				.preheader .rightColumnContent,
				.footer .rightColumnContent {
					text-align: left !important;
				}
				.preheader .rightColumnContent div,
				.preheader .rightColumnContent span,
				.footer .rightColumnContent div,
				.footer .rightColumnContent span {
					text-align: left !important;
				}
				.preheader .rightColumnContent,
				.preheader .leftColumnContent {
					font-size: 80% !important;
					padding: 5px 0;
				}
				table.wrapper-mobile {
					width: 100% !important;
					table-layout: fixed;
				}
				img.max-width {
					height: auto !important;
					max-width: 100% !important;
				}
				a.bulletproof-button {
					display: block !important;
					width: auto !important;
					font-size: 80%;
					padding-left: 0 !important;
					padding-right: 0 !important;
				}
				.columns {
					width: 100% !important;
				}
				.column {
					display: block !important;
					width: 100% !important;
					padding-left: 0 !important;
					padding-right: 0 !important;
					margin-left: 0 !important;
					margin-right: 0 !important;
				}
				.social-icon-column {
					display: inline-block !important;
				}
			}
		</style>
		<style>
			@media screen and (max-width: 480px) {
				table\0 {
					width: 480px !important;
				}
			}
		</style>
		<!--user entered Head Start-->
		<!--End Head user entered-->
	</head>
	<body>
		<center
			class="wrapper"
			data-link-color="#1188E6"
			data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#ffffff; background-color:#FFFFFF;"
		>
			<div class="webkit">
				<table
					cellpadding="0"
					cellspacing="0"
					border="0"
					width="100%"
					class="wrapper"
					bgcolor="#FFFFFF"
				>
					<tr>
						<td valign="top" bgcolor="#FFFFFF" width="100%">
							<table
								width="100%"
								role="content-container"
								class="outer"
								align="center"
								cellpadding="0"
								cellspacing="0"
								border="0"
							>
								<tr>
									<td width="100%">
										<table
											width="100%"
											cellpadding="0"
											cellspacing="0"
											border="0"
										>
											<tr>
												<td>
													<!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
													<table
														width="100%"
														cellpadding="0"
														cellspacing="0"
														border="0"
														style="width: 100%; max-width: 600px"
														align="center"
													>
														<tr>
															<td
																role="modules-container"
																style="
																	padding: 0px 0px 0px 0px;
																	color: #ffffff;
																	text-align: left;
																"
																bgcolor="#FFFFFF"
																width="100%"
																align="left"
															>
																<table
																	class="module preheader preheader-hide"
																	role="module"
																	data-type="preheader"
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	width="100%"
																	style="
																		display: none !important;
																		mso-hide: all;
																		visibility: hidden;
																		opacity: 0;
																		color: transparent;
																		height: 0;
																		width: 0;
																	"
																>
																	<tr>
																		<td role="module-content">
																			<p>
																				Chatbot Pendamping Guru baru saja
																				mengirim laporan masalah.
																			</p>
																		</td>
																	</tr>
																</table>
																<table
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	align="center"
																	width="100%"
																	role="module"
																	data-type="columns"
																	style="padding: 0px 0px 0px 0px"
																	bgcolor="#003399"
																	data-distribution="1"
																>
																	<tbody>
																		<tr role="module-content">
																			<td height="100%" valign="top">
																				<table
																					width="580"
																					style="
																						width: 580px;
																						border-spacing: 0;
																						border-collapse: collapse;
																						margin: 0px 10px 0px 10px;
																					"
																					cellpadding="0"
																					cellspacing="0"
																					align="left"
																					border="0"
																					bgcolor=""
																					class="column column-0"
																				>
																					<tbody>
																						<tr>
																							<td
																								style="
																									padding: 0px;
																									margin: 0px;
																									border-spacing: 0;
																								"
																							>
																								<table
																									class="module"
																									role="module"
																									data-type="text"
																									border="0"
																									cellpadding="0"
																									cellspacing="0"
																									width="100%"
																									style="table-layout: fixed"
																									data-muid="706244a7-d485-48f2-81a4-1c5f3e53ea17"
																									data-mc-module-version="2019-10-22"
																								>
																									<tbody>
																										<tr>
																											<td
																												style="
																													padding: 18px 16px
																														18px 16px;
																													line-height: 30px;
																													text-align: inherit;
																												"
																												height="100%"
																												valign="top"
																												bgcolor=""
																												role="module-content"
																											>
																												<div>
																													<h2
																														style="
																															text-align: left;
																														"
																													>
																														Chatbot Pendamping
																														Guru mengirim
																														laporan masalah
																														berikut:
																													</h2>
																													<div></div>
																												</div>
																											</td>
																										</tr>
																									</tbody>
																								</table>
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
																<table
																	class="module"
																	role="module"
																	data-type="spacer"
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	width="100%"
																	style="table-layout: fixed"
																	data-muid="f3671547-ccea-4895-808f-6fa79b2bd494"
																>
																	<tbody>
																		<tr>
																			<td
																				style="padding: 0px 0px 20px 0px"
																				role="module-content"
																				bgcolor="#C8940F"
																			></td>
																		</tr>
																	</tbody>
																</table>
																<table
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	align="center"
																	width="100%"
																	role="module"
																	data-type="columns"
																	style="padding: 0px 0px 0px 0px"
																	bgcolor="#003399"
																	data-distribution="1"
																>
																	<tbody>
																		<tr role="module-content">
																			<td height="100%" valign="top">
																				<table
																					width="568"
																					style="
																						width: 568px;
																						border-spacing: 0;
																						border-collapse: collapse;
																						margin: 0px 16px 0px 16px;
																					"
																					cellpadding="0"
																					cellspacing="0"
																					align="left"
																					border="0"
																					bgcolor=""
																					class="column column-0"
																				>
																					<tbody>
																						<tr>
																							<td
																								style="
																									padding: 0px;
																									margin: 0px;
																									border-spacing: 0;
																								"
																							>
																								<table
																									class="module"
																									role="module"
																									data-type="text"
																									border="0"
																									cellpadding="0"
																									cellspacing="0"
																									width="100%"
																									style="table-layout: fixed"
																									data-muid="0fab2b2a-fc91-4a0c-9e17-becd981ff443"
																									data-mc-module-version="2019-10-22"
																								>
																									<tbody>
																										<tr>
																											<td
																												style="
																													padding: 18px 16px
																														18px 16px;
																													line-height: 22px;
																													text-align: inherit;
																												"
																												height="100%"
																												valign="top"
																												bgcolor=""
																												role="module-content"
																											>
																												<div>
																													<div
																														style="
																															font-family: inherit;
																															text-align: left;
																														"
																													>
																														<span
																															style="
																																font-family: arial,
																																	helvetica,
																																	sans-serif;
																																font-size: 18px;
																															"
																															>&nbsp;</span
																														><span
																															style="
																																overflow-wrap: break-word;
																																font-family: arial,
																																	helvetica,
																																	sans-serif;
																																font-size: 18px;
																															"
																															>${req.body.reportProblem}</span
																														>
																														&nbsp;
																													</div>
																													<div></div>
																												</div>
																											</td>
																										</tr>
																									</tbody>
																								</table>
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
																<table
																	class="module"
																	role="module"
																	data-type="spacer"
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	width="100%"
																	style="table-layout: fixed"
																	data-muid="d751e718-723b-4d52-8d22-bb487f200a79"
																>
																	<tbody>
																		<tr>
																			<td
																				style="padding: 0px 0px 20px 0px"
																				role="module-content"
																				bgcolor="#C8940F"
																			></td>
																		</tr>
																	</tbody>
																</table>
																<div
																	data-role="module-unsubscribe"
																	class="module"
																	role="module"
																	data-type="unsubscribe"
																	style="
																		color: #444444;
																		font-size: 12px;
																		line-height: 20px;
																		padding: 16px 16px 16px 16px;
																		text-align: Center;
																	"
																	data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"
																>
																	<div class="Unsubscribe--addressLine"></div>
																	<p style="font-size: 12px; line-height: 20px">
																		<a
																			target="_blank"
																			class="Unsubscribe--unsubscribeLink zzzzzzz"
																			href="{{{unsubscribe}}}"
																			style=""
																			>Unsubscribe</a
																		>
																		-
																		<a
																			href="{{{unsubscribe_preferences}}}"
																			target="_blank"
																			class="Unsubscribe--unsubscribePreferences"
																			style=""
																			>Unsubscribe Preferences</a
																		>
																	</p>
																</div>
															</td>
														</tr>
													</table>
													<!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
		</center>
	</body>
</html>
`,
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
	return res
		.status(200)
		.json({ error: "tidak ada error, email berhasil dikirim!" });
}
