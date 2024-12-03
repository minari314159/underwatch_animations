import ModalVideo from "react-modal-video";
import { useState } from "react";
/* eslint-disable react/prop-types */
const Button = ({ title, id, rightIcon, leftIcon, containerClass, url }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			{url && (
				<ModalVideo
					channel="youtube"
					youtube={{ mute: 0, autoplay: 0 }}
					isOpen={isOpen}
					videoId={url}
					onClose={() => setOpen(false)}
				/>
			)}
			<button
				id={id}
				className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50  px-7 py-3 text-black ${containerClass}`}
				onClick={() => setOpen(true)}>
				{leftIcon}
				<span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
					{title}
				</span>
				{rightIcon}
			</button>
		</>
	);
};

export default Button;
