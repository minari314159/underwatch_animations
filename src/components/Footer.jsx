import { FaDiscord, FaGithub, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
	{ href: "https://discord.com", icon: <FaDiscord /> },
	{ href: "https://twitter.com", icon: <FaXTwitter /> },
	{ href: "https://github.com", icon: <FaGithub /> },
	{ href: "https://twitch.com", icon: <FaTwitch /> },
];

const Footer = () => {
	return (
		<footer className="w-screen bg-[#1e2130] py-8 text-violet-50">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
				<p className="text-center text-sm md:text-left">
					&copy;2024 Blizzard Entertainment, Inc.
				</p>
				<div className="flex justify0center gap-4 md:justify-start">
					{links.map((link) => (
						<a
							key={link}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-violet-50 transition-colors duration-500 ease-in-out hover:text-neon">
							{link.icon}
						</a>
					))}
				</div>
				<a
					href="#privacy-policy"
					className="text-center text-sm hover:underline md:text-right">
					Privacy Policy
				</a>
			</div>
		</footer>
	);
};
export default Footer;
