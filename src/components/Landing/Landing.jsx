import React from "react";
import videoUrl from "../../assets/paint.mp4";
import Input from "../Input/Input";

const Landing = ({ setColorsNeedUpdate, setPixelData }) => {
	return (
		<>
			<div>
				<video
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
						objectFit: "cover",
					}}
					autoPlay
					loop
					muted>
					<source src={videoUrl} type="video/mp4" />
				</video>
				{/* overlay */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						background:
							"linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)",
					}}
				/>

				<div>
					<h1>Palette Pal</h1>
					<p>
						Welcome to Palette Pal, an interactive color picker! Simply upload
						an image and receive a color palette suggestion based on that image!
					</p>
					<Input
						setPixelDataForParent={setPixelData}
						setColorsNeedUpdate={setColorsNeedUpdate}
					/>
				</div>
			</div>
		</>
	);
};

export default Landing;