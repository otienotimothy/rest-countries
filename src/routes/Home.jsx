import { useState } from "react";
import { useQuery } from "react-query";
import { fetchAllCountries } from "../api-layer/countriesApi";

// Components
import { Search, FilterByRegion, DisplayCountries } from "../components";

export function Home() {
	const { isError, isLoading, error, data } = useQuery(
		"countries",
		fetchAllCountries
	);

	const [searchTerm, setSearchTerm] = useState("");

	const [region, setRegion] = useState("");

	const onChange = (e) => setSearchTerm(e.target.value);

	const changeRegion = (e) => setRegion(e.target.value);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<div className="flex flex-col md:flex-row md:justify-between">
				<Search searchTerm={searchTerm} onChange={onChange} />
				<FilterByRegion region={region} changeRegion={changeRegion} />
			</div>
			<DisplayCountries
				countries={data.data}
				searchTerm={searchTerm}
				region={region}
			/>
		</>
	);
}
