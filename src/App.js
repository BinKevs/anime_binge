import "./index.css";
import Nav from "./Components/Nav";
import LandingBody from "./Components/LandingBody";
import LowerBody from "./Components/LowerBody";

function App() {
	return (
		<div className="bg-black">
			<div className="bg-[url('/src/Static/LandingBG.png')] h-screen bg-center bg-no-repeat">
				<Nav />
				<LandingBody />
				<LowerBody />
			</div>
		</div>
	);
}

export default App;
