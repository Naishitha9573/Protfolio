import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { contactLinks, personalInfo } from "../data/portfolioData";

function Contact() {
	const formRef = useRef(null);
	const [status, setStatus] = useState({ type: "idle", message: "" });
	const [formErrors, setFormErrors] = useState({});
	const [isSending, setIsSending] = useState(false);

	const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
	const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`;

	const validateForm = (formData) => {
		const nextErrors = {};

		if (!formData.get("name")?.trim()) {
			nextErrors.name = "Please enter your name.";
		}

		const email = formData.get("email")?.trim();
		if (!email) {
			nextErrors.email = "Please enter your email.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			nextErrors.email = "Please enter a valid email.";
		}

		if (!formData.get("message")?.trim()) {
			nextErrors.message = "Please enter a message.";
		}

		return nextErrors;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(formRef.current);
		const nextErrors = validateForm(formData);
		setFormErrors(nextErrors);

		if (Object.keys(nextErrors).length > 0) {
			setStatus({ type: "error", message: "Please complete the form before sending." });
			return;
		}

		try {
			setIsSending(true);
			setStatus({ type: "loading", message: "Sending message..." });

			if (serviceId && templateId && publicKey) {
				await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
				setStatus({ type: "success", message: "Message sent successfully." });
			} else {
				window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
				setStatus({ type: "success", message: "Gmail compose opened with your message details." });
			}

			formRef.current.reset();
			setFormErrors({});
		} catch (error) {
			setStatus({ type: "error", message: "Message could not be sent. Please try again." });
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section id="contact" className="section-shell">
			<div className="mx-auto max-w-7xl">
				<SectionHeading
					eyebrow="Contact"
					title="Professional contact section"
					description="The form is wired for EmailJS, with a Gmail compose fallback if environment variables are not set."
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.55 }}
						className="space-y-4"
					>
						{contactLinks.map((item) => {
							const Icon = item.icon;
							const content = (
								<>
									<div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
										<Icon />
									</div>
									<div>
										<p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">{item.label}</p>
										<p className="mt-2 text-base font-medium text-[var(--text-primary)]">{item.value}</p>
									</div>
								</>
							);

							return (
									item.href ? (
										<a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="glass-card flex items-start gap-4 p-5">
											{content}
										</a>
									) : (
										<div key={item.label} className="glass-card flex items-start gap-4 p-5">
											{content}
										</div>
									)
							);
						})}

						<div className="glass-card p-5 text-sm leading-7 text-[var(--text-muted)]">
							<p className="font-medium text-[var(--text-primary)]">Resume contact details</p>
							<p className="mt-3">{personalInfo.location}</p>
							<p>
								<a className="text-cyan-200" href={`tel:${personalInfo.phone}`}>
									{personalInfo.phone}
								</a>
							</p>
							<p>
								<a className="text-cyan-200" href={gmailComposeUrl} target="_blank" rel="noreferrer">
									{personalInfo.email}
								</a>
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.55 }}
						className="glass-card-strong p-6 sm:p-8"
					>
						<form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
							<div className="grid gap-5 sm:grid-cols-2">
								<label className="space-y-2 text-sm font-medium text-[var(--text-primary)]">
									Name
									<input name="name" required className="input-field" type="text" aria-invalid={Boolean(formErrors.name)} />
									{formErrors.name ? <span className="text-xs text-rose-200">{formErrors.name}</span> : null}
								</label>
								<label className="space-y-2 text-sm font-medium text-[var(--text-primary)]">
									Email
									<input name="email" required className="input-field" type="email" aria-invalid={Boolean(formErrors.email)} />
									{formErrors.email ? <span className="text-xs text-rose-200">{formErrors.email}</span> : null}
								</label>
							</div>

							<label className="space-y-2 text-sm font-medium text-[var(--text-primary)]">
								Message
								<textarea name="message" required rows="7" className="input-field resize-none" aria-invalid={Boolean(formErrors.message)} />
								{formErrors.message ? <span className="text-xs text-rose-200">{formErrors.message}</span> : null}
							</label>

							<button type="submit" className="btn-primary w-full justify-center" disabled={isSending}>
								<FaPaperPlane />
								{isSending ? "Sending..." : "Send Message"}
							</button>

							{status.message ? (
								<p className={`text-sm ${status.type === "error" ? "text-rose-200" : status.type === "success" ? "text-emerald-200" : "text-[var(--text-muted)]"}`}>
									{status.message}
								</p>
							) : null}
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
