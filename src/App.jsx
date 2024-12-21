import { BrowserRouter } from "react-router-dom"
import {
	About,
	Contact,
	Experience,
	Certificates,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
	LoadingScreen,
	Cursor,
} from "./components"
import CvModal from "./components/CvModal"

const App = () => {
	return (
		<>
			<LoadingScreen />
			<CvModal />
			<BrowserRouter>
				<div className="relative z-0 overflow-hidden explosion-bg scrollbar-thin scrollbar-thumb-pinkish scrollbar-track-gray-900">
					<div className="explosion-bg">
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
					<Works />
					<Certificates />
					<div className="relative z-0">
						<Contact />
						<StarsCanvas />
					</div>
				</div>
			</BrowserRouter>
			<Cursor />
		</>
	)
}

export default App
