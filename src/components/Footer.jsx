import { FaArrowUp, FaEnvelope } from "react-icons/fa6";
import { personalInfo, socialIcons } from "../data/portfolioData";

function Footer() {
	return (
		<footer className="border-t border-[var(--border)] bg-[var(--surface-strong)]/80 px-4 py-8 backdrop-blur-2xl sm:px-6 lg:px-8">
			<div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
				<div>
					<p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Portfolio</p>
					<h2 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">{personalInfo.name}</h2>
					<p className="mt-2 text-sm text-[var(--text-muted)]">Software Development, Machine Learning, Full-Stack Development, and Cloud Technologies.</p>
				</div>

				<div className="flex flex-wrap items-center gap-3">
					{socialIcons.map((item) => {
						const Icon = item.icon;
						return (
							<a key={item.label} href={item.href || "#contact"} target={item.href?.startsWith("http") ? "_blank" : undefined} rel={item.href?.startsWith("http") ? "noreferrer" : undefined} className="social-chip">
								<Icon />
								<span>{item.label}</span>
							</a>
						);
					})}

					<a href="#home" className="icon-button">
						<FaArrowUp />
					</a>
				</div>
			</div>

			<div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 border-t border-white/5 pt-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
				<p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
				<p className="flex items-center gap-2">
					<FaEnvelope className="text-cyan-300" />
					{personalInfo.email}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
