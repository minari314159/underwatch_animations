import { useRef } from "react";
import { AnimateTitle, Button, RoundedCorners, Tilt } from "../utils/index";

const Story = () => {
	const frameRef = useRef();
	return (
		<section id="story" className="min-h-dvh w-screen bg-black text-violet-50">
			<div className="flex size-full flex-col items-center py-10 pb-24">
				<p className="font-general text-sm uppercase">
					{" "}
					the multiversal ip world
				</p>
				<div className="relative size-full">
					<AnimateTitle
						title="The st<b>o</b>ry of <br/> a hidden realm"
						sectionId="#story"
						containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
					/>
					<div className="story-img-container">
						{" "}
						<div className="story-img-mask">
							<Tilt className="story-img-content" tiltStrength={15}>
								<img
									ref={frameRef}
									src="/img/entrance.webp"
									alt="entrance"
									className="object-contain"
								/>
							</Tilt>
						</div>
					</div>
					<RoundedCorners />
				</div>
			</div>
			<div className="-mt-80 flex w-full justify-center md:mt-64 md:me-44 md:justify-end">
				<div className="flex h-full w-fit flex-col items-center md:items-start">
					{" "}
					<p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
						Where realms converge, lies Underwatch and the boundless pilar.
						Discover its secrets and shape your fate admist inite opportunities.
					</p>
					<Button id="realm-button" title="dicover prologue" containerClass="mt-5"/>
				</div>
			</div>
		</section>
	);
};
export default Story;
