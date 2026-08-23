import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolioData";
import { FaCertificate, FaMedal, FaAward } from "react-icons/fa6";

const certificateIcons = [FaCertificate, FaMedal, FaAward];

function Certifications() {
	return (
		<section id="certifications" className="section-shell">
			<div className="mx-auto max-w-7xl">
				<SectionHeading
					eyebrow="Certifications"
					title="Modern certification cards"
					description="Every certification shown here comes directly from the resume."
				/>

				<div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{certifications.map((certification, index) => {
						const Icon = certificateIcons[index % certificateIcons.length];

						return (
							<motion.article
								key={certification.title}
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ duration: 0.45, delay: index * 0.04 }}
								whileHover={{ y: -5 }}
								className="glass-card group p-6"
							>
								<div className="flex items-start gap-4">
									<div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300 transition group-hover:scale-105">
										<Icon className="text-xl" />
									</div>

									<div>
										<h3 className="text-lg font-semibold text-[var(--text-primary)]">{certification.title}</h3>
										<p className="mt-2 text-sm text-[var(--text-muted)]">{certification.issuer}</p>
										{certification.date ? <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">Issued {certification.date}</p> : null}
										{certification.note ? (
											<span className="mt-3 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
												{certification.note}
											</span>
										) : null}
									</div>
								</div>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Certifications;

