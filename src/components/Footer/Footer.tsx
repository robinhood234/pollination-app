import Image from "next/image";
import Link from "next/link";

const pageLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/product", label: "Products" },
	{ href: "/gallery", label: "Gallery" },
	{ href: "/contact", label: "Contact" },
];

const socialLinks = [
	{ name: "YouTube", href: "https://www.youtube.com/", icon: "/youtube-line-icon.svg" },
	{ name: "TikTok", href: "https://www.tiktok.com/", icon: "/tiktok-line-icon.svg" },
	{ name: "WhatsApp", href: "https://wa.me/254740478418", icon: "/whatsapp-line-icon.svg" },
	{ name: "X", href: "https://x.com/", icon: "/x-icon.svg" },
	{ name: "Instagram", href: "https://www.instagram.com/", icon: "/instagram-line-icon.svg" },
];

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="page-shell">
				<div className="footer-sections">
					<section className="footer-business" aria-labelledby="footer-business-title">
						<h2 id="footer-business-title">Pollination Propagators</h2>
						<p>We believe a healthy environment begins with the smallest wings. Our plants are selected to support pollinators and help gardens give more back.</p>
					</section>

					<nav className="footer-navigation" aria-label="Footer navigation">
						<h2>Explore</h2>
						<ul>
							{pageLinks.map((link) => (
								<li key={link.href}><Link href={link.href}>{link.label}</Link></li>
							))}
						</ul>
					</nav>

					<section className="footer-contact" aria-labelledby="footer-contact-title">
						<h2 id="footer-contact-title">Contact</h2>
						<address>
							<a href="tel:+254740478418">+254 740 478 418</a>
							<a href="mailto:pollination@propagator.com">info@pollination.co.ke</a>
							<span>Nyandarua County</span>
						</address>
					</section>
				</div>

				<div className="footer-bottom">
					<p className="footer-copyright">© {new Date().getFullYear()} Pollination Propagators. All rights reserved.</p>
					<nav className="footer-socials" aria-label="Social media">
						{socialLinks.map((social) => (
							<a key={social.name} href={social.href} aria-label={social.name} title={social.name} target="_blank" rel="noopener noreferrer">
								<Image src={social.icon} alt="" width={24} height={24} />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}
