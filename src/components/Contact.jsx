import { Button } from "../utils/index";
/* eslint-disable react/prop-types */
const ImageClipBox = ({ src, clipClass }) => (
	<div className={clipClass}>
		<img src={src} />
	</div>
);

const Contact = () => {
	return (
		<section id="contact" className="my-20 min-h-96 w-screen px-10">
			<div className="relative rounded-lg bg-black py-24 text-violet-50 sm:overflow-hidden">
				<div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
					<ImageClipBox
						clipClass="contact-clip-path-1"
						src="img/contact-1.webp"
					/>
					<ImageClipBox
						clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
						src="img/contact-2.webp"
					/>
				</div>
				<div className="absolute left-20 -top-40  w-60   sm:top-10 md:left-auto md:right-10 md:top-20 lg:top-20 lg:w-80 z-0">
					<ImageClipBox
						clipClass="absolute md:scale-125 "
						src="img/swordman-partial.webp"
					/>
					<ImageClipBox
						clipClass="sword-man-clip-path md:scale-125"
						src="img/swordman.webp"
					/>
				</div>
				<div className="relative z-5 flex flex-col items-center text-center">
					<p className="font-general text-[10px] uppercase"> Join Underwatch</p>
					<p className="special-font mt-10 w-full font-zentry text-5xl leading-0.9 md:text-[6rem]">
						Let&apos;s B<b>u</b>ilt the <br /> New <b>e</b>ra of <br />G<b>a</b>
						ming T<b>o</b>gether
					</p>
					<Button title="Contact Us" containerClass="mt-10 cursor-pointer" />
				</div>
			</div>
		</section>
	);
};
export default Contact;
