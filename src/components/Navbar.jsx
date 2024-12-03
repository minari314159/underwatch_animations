import { useEffect, useRef, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineSound } from "react-icons/ai";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
const navItems = ["Esports", "Season", "About", "Contact"];

const Navbar = () => {
	const navRef = useRef(null);
	const audioElementRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isIndicatorActive, setIsInidicatorActive] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);

	const { y: currentScollY } = useWindowScroll();

	//music playing function
	const toggleAudio = () => {
		setIsPlaying((prev) => !prev);
		setIsInidicatorActive((prev) => !prev);
	};

	useEffect(() => {
		if (isPlaying) {
			audioElementRef.current.play();
		} else {
			audioElementRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		if (currentScollY === 0) {
			setIsNavVisible(true);
			navRef.current.classList.remove("floating-nav"); //remove specific class based on position of scroll
		} else if (currentScollY > lastScrollY) {
			setIsNavVisible(false);
			navRef.current.classList.add("floating-nav");
		} else if (currentScollY < lastScrollY) {
			setIsNavVisible(true);
			navRef.current.classList.add("floating-nav");
		}
		setLastScrollY(currentScollY);
	}, [currentScollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: "0.2s",
		});
	}, [isNavVisible]);

	return (
		<div
			ref={navRef}
			className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex  size-full items-center justify-between p-4">
					<div className="flex items-center gap-7">
						<img src="/img/logo.png" alt="logo" className="w-10" />
					</div>
					<div className="flex h-full items-center">
						<div className="hidden md:block">
							{navItems.map((item) => (
								<a
									key={item}
									href={`#${item.toLocaleLowerCase()}`}
									className="nav-hover-btn">
									{item}
								</a>
							))}
						</div>
						<div className="flex justify-center items-center gap-3">
							<button
								onClick={toggleAudio}
								className={`md:ml-10 flex items-end justify-center space-x-[0.2rem]  size-[2rem] ${
									isPlaying ? "md:items-center items-end" : "items-center"
								}`}>
								<audio
									ref={audioElementRef}
									className="hidden"
									src="/audio/loop.mp3"
									loop
								/>
								{isPlaying ? (
									[1, 2, 3, 4].map((bar) => (
										<div
											key={bar}
											className={`indicator-line ${
												isIndicatorActive ? "active" : " "
											}`}
											style={{ animationDelay: `${bar * 0.1}s` }}
										/>
									))
								) : (
									<AiOutlineSound className="text-white size-[1.5rem]" />
								)}
							</button>
							<button
								onClick={() => setIsOpen((prev) => !prev)}
								className="md:hidden z-2   flex justify-center items-center  size-[2.2rem]">
								{isOpen ? (
									<IoCloseOutline className="text-white size-[1.5rem]" />
								) : (
									<CgMenuRight className="text-white size-[1.5rem]" />
								)}
							</button>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
