import { Country } from "./Country";

export function DisplayCountries({ countries }) {
	console.log(countries);
	return (
		<div className="flex flex-wrap justify-evenly mt-5">
			{countries.map((country) => (
				<Country country={country} />
			))}
		</div>
	);
}
