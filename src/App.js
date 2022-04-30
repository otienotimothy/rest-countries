
import { BrowserRouter } from 'react-router-dom';

// Components Import
import { Navbar } from "./components";
import { Home } from './routes/Home';

function App() {

	return (
		<div className="min-h-screen bg-slate-700">
			<Navbar />
			<div className="container mx-auto pt-8">
				<Home />
			</div>
		</div>
	);
}

export default App;
