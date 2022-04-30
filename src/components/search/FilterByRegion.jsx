export function FilterByRegion({ region, changeRegion }) {
	return (
		<select
			className="rounded-lg bg-slate-800 text-gray-50 self-start ml-12 mt-5 md:ml-0 md:mt-0 focus:border-none"
			value={region}
			onChange={changeRegion}
		>
			<option value="">Filter by Region</option>
			<option value="">All</option>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	);
}
