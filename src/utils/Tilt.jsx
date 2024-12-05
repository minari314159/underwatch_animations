import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
const Tilt = ({ children, className = " ", tiltStrength = 5 }) => {
	const [transformStyle, setTranformStyle] = useState("");
	const itemRef = useRef();
	const handleMouseMove = (e) => {
		if (!itemRef.current) return;
		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();
		const relativeX = (e.clientX - left) / width;
		const relativeY = (e.clientY - top) / height;
		const tiltX = (relativeY - 0.5) * tiltStrength;
		const tiltY = (relativeX - 0.5) * tiltStrength;
		const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99,0.99,0.99)`;
		setTranformStyle(newTransform);
	};
	const handleMouseLeave = () => {
		setTranformStyle("");
	};
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
