import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCountryByName } from "../api-layer/countriesApi";
import { Link } from "react-router-dom";

export function CountryDetails() {
	let params = useParams();
	let { country } = params;
	let countryObj;

	let { isError, isLoading, error, data } = useQuery("country", () =>
		fetchCountryByName(country)
	);

	if (isLoading) {
		return <p>Loading...</p>;
	} else {
		countryObj = data.data[0];
		console.log(countryObj);
	}

	return (
		<div className="px-8 md:px-0">
			<Link
				className="bg-slate-800 py-2 px-4 rounded-md text-gray-50 shadow-lg mb-10 inline-block"
				to="/"
			>
				<i className="fa-solid fa-arrow-left-long"></i>{" "}
				<span className="ml-2">Back</span>
			</Link>
			<div className="md:px-10">
				<div className="md:flex mx-auto">
					<div className="md:w-2/5 md:h-96 ">
						<img className="w-full h-full" src={countryObj.flags.png} alt="" />
					</div>
					<div className="md:w-1/2 md:ml-10 py-5 px-5">
						<h2 className="text-3xl font-bold py-3 text-gray-50">
							{" "}
							{countryObj.name.common}{" "}
						</h2>
						<div className="my-5 md:flex">
							<div>
								<p className="text-gray-200 mb-3">
									<strong>Official Name</strong> : {countryObj.name.official}{" "}
								</p>
								<p className="text-gray-200 mb-3">
									<strong>Population</strong> : {countryObj.population}{" "}
								</p>
								<p className="text-gray-200 mb-3">
									<strong>Region</strong> : {countryObj.region}{" "}
								</p>
								<p className="text-gray-200 mb-3">
									<strong>Sub-Region</strong> : {countryObj.subregion}{" "}
								</p>
								<p className="text-gray-200 mb-3">
									<strong>Capital</strong> : {countryObj.capital}{" "}
								</p>
							</div>
							<div className="md:ml-8 mt-5 md:mt-0">
								<p className="text-gray-200 mb-3">
									<strong>Top Level Domain</strong> : {countryObj.tld}{" "}
								</p>
							</div>
						</div>
						<div>
							{countryObj.borders && (<p className="text-gray-200">
								<strong>Borders</strong> :{" "}
								{countryObj.borders.map((country) => (
									<span className="px-4 inline-block mx-2 mb-2 rounded-sm shadow-md bg-slate-800 text-gray-200">
										{" "}
										{country}{" "}
									</span>
								))}
							</p>)}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
