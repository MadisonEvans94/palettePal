import React from "react"; // Import useContext
import Input from "../../components/Input/Input";
import ppBackground from "../../assets/ppbackground.jpeg";

const Landing = () => {
	return (
		<>
			<div className="w-full h-full fixed bg-[#0f0f0f]">
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: "-1",
						background:
							"linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%)",
					}}
				/>

				<div
					style={{
						backgroundImage: `url(${ppBackground})`,
						backgroundSize: "cover",
					}}
					className="text-black relative text-center z-10 flex flex-col items-center justify-center h-full px-10 w-full">
					<h1 className="mb-16 main-header">Palette Pal</h1>
					<p className="main-description mb-8 text-xs">
						Welcome to Palette Pal, an interactive color picker! Simply upload
						an image and receive a color palette suggestion based on that image!
					</p>
					<Input
						className="input-area"
						styleProp="rounded border border-white cursor-pointer p-2 text-white hover:text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition"
						buttonText="Select Image"
					/>
				</div>
			</div>
		</>
	);
};

export default Landing;
