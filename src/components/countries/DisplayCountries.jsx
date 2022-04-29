import { Country } from "./Country";

export function DisplayCountries({ countries, searchTerm, region }) {

	if(region){
		countries = countries.filter(country => country.region === region)
	}

	if(searchTerm){
		countries = countries.filter(country => country.name.common.includes(searchTerm))
	}

	console.log(countries);
	return (
		<div className="flex flex-wrap justify-evenly mt-5">
			{countries.map((country) => (
				<Country country={country} />
			))}
		</div>
	);
}
