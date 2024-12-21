import React, { useEffect, useState } from "react"
import { useStateContext } from "../context"
import { CV_FILE } from "../constants"

export default function CvModal() {
	const { isCvOpen, setIsCvOpen } = useStateContext()
	useEffect(() => {
		if (isCvOpen) {
			document.body.classList.add("no-scroll")
		} else {
			document.body.classList.remove("no-scroll")
		}
		return () => {
			document.body.classList.remove("no-scroll")
		}
	}, [isCvOpen])

	return (
		<>
			{isCvOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
					onClick={() => setIsCvOpen(false)}
				>
					<div
						className="relative bg-white w-[90%] h-[90%] overflow-hidden rounded-lg shadow-lg"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Embed PDF */}
						<iframe
							src= {CV_FILE}
							title="CV PDF Viewer"
							className="w-full h-full"
						></iframe>

						{/* Close Button */}
						<button
							onClick={() => setIsCvOpen(false)}
							className="absolute top-2 right-5 bg-pinkish text-white px-2 py-1 rounded-xl hover:bg-[#d34570]"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	)
}
