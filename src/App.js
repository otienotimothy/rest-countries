import { useState } from "react";
import { useQuery } from "react-query";
import { fetchAllCountries } from "./api-layer/countriesApi";

// Components Import
import { Navbar, Search, FilterByRegion, DisplayCountries } from "./components";

function App() {
	const { isError, isLoading, error, data } = useQuery(
		"countries",
		fetchAllCountries
	);

	const [searchTerm, setSearchTerm] = useState("");

	const [region, setRegion] = useState('')

	const onChange = (e) => setSearchTerm(e.target.value);

	const changeRegion = e => setRegion(e.target.value)

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
				/>
				<FilterByRegion region={region} changeRegion={changeRegion} />
				<DisplayCountries countries={data.data} searchTerm={searchTerm} region={region} />
			</div>
		</div>
	);
}

export default App;
