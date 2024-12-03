import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
const Tilt = ({ children, className = " " }) => {
	const [transformStyle, setTranformStyle] = useState("");
	const itemRef = useRef();
	const handleMouseMove = (e) => {
		if (!itemRef.current) return;
		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();
		const relativeX = (e.clientX - left) / width;
		const relativeY = (e.clientY - top) / height;
		const tiltX = (relativeY - 0.5) * 10;
		const tiltY = (relativeX - 0.5) * 10;
		const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;
		setTranformStyle(newTransform);
	};
	const handleMouseLeave = () => {};
	return (
		<div
			className={className}
			ref={itemRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transform: transformStyle }}>
			{children}
		</div>
	);
};
export default Tilt;
