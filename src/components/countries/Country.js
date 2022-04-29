export function Country({country}){
    return (
			<div className="w-80 bg-slate-800 mr-2 my-6 rounded-md shadow-2xl cursor-pointer">
				<div className="w-full h-1/2 rounded-t-md">
					<img src={country.flags.png} className="w-full h-full rounded-t-md" />
				</div>
				<div className="px-4">
					<h3 className="text-2xl my-4 text-gray-50">
						{" "}
						{country.name.common}{" "}
					</h3>
					<p className="text-gray-50">
						<strong>Population</strong> : {country.population}{" "}
					</p>
					<p className="text-gray-50">
						<strong>Region</strong> : {country.region}{" "}
					</p>
					<p className="text-gray-50">
						<strong>Capital</strong> : {country.capital}{" "}
					</p>
				</div>
			</div>
		);
}