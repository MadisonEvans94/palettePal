import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Contexts/AppContext";
import { ActionButton, ImageUploadForm, WidgetPane } from "../../components";
import { ImagePaneProps, Palette } from "../../types";
import usePaletteSubmission from "../../hooks/usePaletteSubmission";
// import localforage from "localforage";
// TODO: Remove persistence
// TODO: have an error case
const PaletteView: React.FC = () => {
	const [colorCount, setColorCount] = useState<number>(2);
	const { handlePaletteSubmission } = usePaletteSubmission();
	const {
		activeImageUrl,
		activePalette,
		setShowModal,
		setModalContent,
		imageProcessorEndpoint,
	} = useAppContext();
	const handleShowSubmissionForm = () => {
		setModalContent(() => (
			<ImageUploadForm
				url={imageProcessorEndpoint}
				onSubmit={handlePaletteSubmission}
				onClose={() => console.log("closing modal")}
				onSuccess={() => setShowModal(false)}
			/>
		));
		setShowModal(true);
	};
	// useEffect(() => {
	// 	async function readFromCache() {
	// 		const cachedImage = await localforage.getItem("cachedImage");
	// 		const activePalette = (await localforage.getItem(
	// 			"activePalette"
	// 		)) as Palette;
	// 		if (cachedImage) {
	// 			const urlCreator = window.URL || window.webkitURL;
	// 			const imageUrl = urlCreator.createObjectURL(
	// 				cachedImage as Blob
	// 			);
	// 			setActiveImageUrl(imageUrl);
	// 		}
	// 		if (activePalette) setActivePalette(activePalette);
	// 	}
	// 	readFromCache();
	// }, [setActiveImageUrl, setActivePalette]);

	return (
		<>
			<div className="w-full h-full flex flex-col bg-white">
				<div className="w-full grid grid-cols-2 flex-grow">
					<ImagePane uploadedImage={activeImageUrl} />
					{activePalette?.clusterData && (
						<WidgetPane
							clusterData={activePalette.clusterData}
							colorCount={colorCount}
							setColorCount={setColorCount}
						/>
					)}
				</div>
				<div className="flex items-center gap-2 bg-dark justify-center h-48">
					<ActionButton
						label="copy palette"
						className="p-2 hover:bg-theme1 border border-white hover:border-theme1 transition rounded text-white"
						onClick={() => {
							if (activePalette?.clusterData?.clusters) {
								const textToCopy =
									activePalette.clusterData.clusters[
										colorCount
									].toString();
								navigator.clipboard
									.writeText(textToCopy)
									.then(() => {})
									.catch((err) => {
										console.error(
											"Failed to copy palette:",
											err
										);
									});
							}
						}}
					/>

					<ActionButton
						label="upload new image"
						className="p-2 hover:bg-theme1 border border-white hover:border-theme1 transition rounded text-white"
						onClick={handleShowSubmissionForm}
					/>
				</div>
			</div>
		</>
	);
};

export default PaletteView;

const ImagePane: React.FC<ImagePaneProps> = ({ uploadedImage }) => {
	return (
		<div className="text-white h-full flex items-center p-12">
			<div className="overflow-hidden relative w-full h-full ">
				{uploadedImage && (
					<img
						src={uploadedImage}
						alt="Uploaded"
						className="absolute w-full h-full object-contain"
					/>
				)}
			</div>
		</div>
	);
};
