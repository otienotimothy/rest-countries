import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCountryByName } from "../api-layer/countriesApi";

export function CountryDetails() {
	let params = useParams();
	let { country } = params;
    let countryObj;

	let { isError, isLoading, error, data } = useQuery("country", () =>
		fetchCountryByName(country)
	);

	if (!isLoading) {
		countryObj = data.data[0]
        console.log(countryObj)
	}

	return <h1> Hello World, {country} </h1>;
}
