import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Example } from './components/Example';

function App() {

  let queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<Example />
		</QueryClientProvider>
	);
}

export default App;
