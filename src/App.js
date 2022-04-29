import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar, Search } from './components'

function App() {

	const [searchTerm, setSearchTerm] = useState('');

	const onChange = (e) => setSearchTerm(e.target.value)

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(searchTerm)
	}

	let queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-slate-700">
				<Navbar />
				<div className="container mx-auto pt-8">
					<div>
						<Search searchTerm={searchTerm} onChange={onChange} onSubmit={onSubmit} />
					</div>
					<div>
					</div>
				</div>
				
			</div>	
		</QueryClientProvider>
	);
}

export default App;
