import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from './components/navbar/Navbar';
import {Search} from './components/search/Search'

function App() {

  let queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-slate-700">
				<Navbar />
				<div className="container mx-auto pt-8">
					<Search />
				</div>
				
			</div>	
		</QueryClientProvider>
	);
}

export default App;
