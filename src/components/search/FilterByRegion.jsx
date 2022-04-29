export function FilterByRegion({region, changeRegion}) {
	return (
		<select value={region} onChange={changeRegion}>
			<option value="">Filter by Region</option>
			<option value="">All</option>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Ocenia">Ocenia</option>
		</select>
	);
}
