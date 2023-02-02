import React from "react";
import "./Palette.css";

/**
 * Palette component that displays a list of colors
 * @param {Object} props - The component properties
 * @param {Array} props.paletteArray - An array of color strings
 */
const Palette = ({ paletteArray }) => {
	const colorList = paletteArray.map((color) => (
		<li key={color.toString()} className="colorBlock">
			<div
				style={{
					backgroundColor: `${color}`,
					borderColor: "#000",
					borderStyle: "solid",
					height: "100%",
					width: "100%",
					textAlign: "center",
				}}>
				{color}
			</div>
		</li>
	));
	return (
		<>
			<div className="palette">
				<ul>{colorList}</ul>
			</div>
		</>
	);
};

export default Palette;
