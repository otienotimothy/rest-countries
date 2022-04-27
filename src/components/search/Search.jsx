export function Search({ searchTerm, onChange, onSubmit }) {
	return (
		<form
			onSubmit={onSubmit}
			className="rounded-lg bg-slate-800 w-4/5 mx-auto md:w-1/3 md:mx-0"
		>
			<div className="flex items-center">
				<label htmlFor="search" className="mx-4">
					<i className="fa-solid fa-magnifying-glass text-2xl text-gray-50"></i>
				</label>
				<input
					type="search"
					name="search"
					className="w-4/5 h-12 bg-slate-800 border-none outline-none focus:ring-0 text-gray-50"
					placeholder="Search for a country..."
					value={searchTerm}
					onChange={onChange}
				/>
			</div>
		</form>
	);
}
