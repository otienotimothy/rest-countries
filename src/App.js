import { useState } from "react";
import { useQuery } from "react-query";
import { fetchAllCountries } from "./api-layer/countriesApi";

// Components Import
import { Navbar, Search, DisplayCountries } from "./components";

function App() {
	const { isError, isLoading, error, data } = useQuery(
		"countries",
		fetchAllCountries
	);

	const [searchTerm, setSearchTerm] = useState("");

	const onChange = (e) => setSearchTerm(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(searchTerm);
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="min-h-screen bg-slate-700">
			<Navbar />
			<div className="container mx-auto pt-8">
				<Search
					searchTerm={searchTerm}
					onChange={onChange}
					onSubmit={onSubmit}
				/>
				<DisplayCountries countries={data.data} />
			</div>
		</div>
	);
}

export default App;
