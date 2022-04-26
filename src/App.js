import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Example } from './components/Example';

function App() {

  let queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient} >
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
          <Example />
				</header>
			</div>
		</QueryClientProvider>
	);
}

export default App;
