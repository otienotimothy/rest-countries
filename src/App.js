import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from './components/navbar/Navbar';

function App() {

  let queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-slate-700">
				<Navbar />
			</div>	
		</QueryClientProvider>
	);
}

export default App;
