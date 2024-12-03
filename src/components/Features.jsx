import { TiLocationArrow } from "react-icons/ti";
import { BentoCard, Tilt } from "../utils/index";

const Features = () => {
	return (
		<section id="esports" className="bg-black pb-52">
			<div className="container mx-auto md:px-10">
				<div className="px-5 py-32">
					<p className="font-circular-web text-lg text-violet-50">
						Into the Underwatch MetaLayer
					</p>
					<p className="max-w-md font-circular-web text-lg text-violet-50 opacity-50">
						Immerse yourself in a rich and ever-expanding universe where a
						vibrant array of characters converge into battle through an
						interconnected overlay experience transforming your world.
					</p>
				</div>
				<Tilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
					<BentoCard
						src="videos/feature-1.mp4"
						title={
							<>
								radia<b>n</b>t
							</>
						}
						description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into an adventure"
					/>
				</Tilt>
				<div className="grid h-[135vh] grid-col-2 grid-rows-3 gap-7">
					<Tilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
						<BentoCard
							src="videos/feature-2.mp4"
							title={
								<>
									<b>E</b>spor<b>t</b>s
								</>
							}
							description="Watch our video update and head to our blog to learn more about what is next for Overwatch Esports in 2024"
						/>
					</Tilt>
					<Tilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
						<BentoCard
							src="videos/feature-3.mp4"
							title={
								<>
									N<b>e</b>xus
								</>
							}
							isComingSoon
							description="A social hub, adding new dimensions of play to social interactions for Web3 communities"
						/>
					</Tilt>
					<Tilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
						<BentoCard
							src="videos/feature-4.mp4"
							title={
								<>
									St<b>a</b>nd with your h<b>e</b>roes
								</>
							}
							isComingSoon
							description="More extraordinary heroes will join the current roster. Whether you like to lead the charge, ambush enemies, or aid your allies, there’s a new hero for you."
						/>
					</Tilt>
					<div className="bento-tilt_2 ">
						<div className="flex size-full flex-col justify-between bg-violet-300 p-5">
							<h1 className="bento-title special-font max-w-64">
								M<b>o</b>re Co<b>m</b>ing S<b>o</b>on
							</h1>
							<TiLocationArrow className="m-5 scale-[5] self-end" />
						</div>
					</div>
					<Tilt className="bento-tilt_2 ">
						<video
							src="videos/feature-5.mp4"
							loop
							muted
							autoPlay
							className="size-full object-cover object-center"
						/>
					</Tilt>
				</div>
			</div>
		</section>
	);
};
export default Features;
