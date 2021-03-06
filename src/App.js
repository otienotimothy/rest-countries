import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components Import
import { Navbar } from "./components";
import { Home, CountryDetails } from "./routes"

function App() {
	return (
		<div className="min-h-screen bg-slate-700">
			<Navbar />
			<div className="container mx-auto pt-8">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/country/:country" element={<CountryDetails />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
