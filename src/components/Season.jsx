import { useRef } from "react";
import { AnimateTitle, Button, RoundedCorners } from "../utils/index";
import gsap from "gsap";

const Season = () => {
	const frameRef = useRef(null);
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const element = frameRef.current;

		if (!element) return;

		const rect = element.getBoundingClientRect();
		const xPos = clientX - rect.left;
		const yPos = clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((yPos - centerY) / centerY) * -10;
		const rotateY = ((xPos - centerX) / centerX) * 10;

		gsap.to(element, {
			duration: 0.3,
			rotateX,
			rotateY,
			transformPerspective: 500,
			ease: "power1.inOut",
		});
	};

	const handleMouseLeave = () => {
		const element = frameRef.current;

		if (element) {
			gsap.to(element, {
				duration: 0.3,
				rotateX: 0,
				rotateY: 0,
				ease: "power1.inOut",
			});
		}
	};
	return (
		<section
			id="season"
			className="min-h-dvh w-screen bg-black  text-violet-50">
			<div className="flex size-full flex-col items-center py-10 pb-24">
				<p className="font-general text-sm uppercase md:text-[10px]">
					{" "}
					the multiversal ip world
				</p>
				<div className="relative size-full">
					<AnimateTitle
						title="Be<b>w</b>itch t<b>h</b>e ba<b>tt</b>le<b>f</b>ield"
						sectionId="#season"
						containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 "
					/>
					<div className="story-img-container">
						{" "}
						<div className="story-img-mask">
							<div className="story-img-content">
								<img
									ref={frameRef}
									onMouseMove={handleMouseMove}
									onMouseLeave={handleMouseLeave}
									onMouseUp={handleMouseLeave}
									onMouseEnter={handleMouseLeave}
									src="/img/entrance.png"
									alt="entrance"
									className="object-contain"
								/>
							</div>
						</div>
						<RoundedCorners />
					</div>
				</div>

				<div className="-mt-[30rem] md:-mt-[35rem] xl:-mt-[20rem] flex w-full justify-center md:me-44 md:justify-end">
					<div className="flex h-full w-fit flex-col items-center md:items-start">
						{" "}
						<p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
							Haunt your foes with the power of Mythic Spellbinder Widowmaker, a
							master of witchcraft with enchanting effects to die for. Then,
							relive the thrilling origins of Overwatch as you battle on iconic
							maps, play with the original hero roster featuring classic
							abilities, and experience the chaotic fun of 6v6 without team
							composition limits in the Overwatch: Classic event!
						</p>
						<Button
							id="realm-button"
							title="dicover this season"
							containerClass="mt-5"
							url="dBIWoBpWnvQ"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Season;
