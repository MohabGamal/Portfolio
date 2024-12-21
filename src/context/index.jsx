import { createContext, useContext, useState, useEffect } from "react"

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
	const [isAppLoaded, setIsAppLoaded] = useState(false)
	const [isCvOpen, setIsCvOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 768px)")
		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches)
		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches)
		}
		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange)
		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange)
		}
	}, [])

	return (
		<StateContext.Provider
			value={{ isAppLoaded, setIsAppLoaded, isCvOpen, setIsCvOpen, isMobile }}
		>
			{children}
		</StateContext.Provider>
	)
}
export const useStateContext = () => useContext(StateContext)
