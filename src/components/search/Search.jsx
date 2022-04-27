
function Search({searchTerm, onChange, onSubmit }){
    return (
			<form onSubmit={onSubmit}>
				<label htmlFor="search">
					<i class="fa-solid fa-magnifying-glass"></i>
				</label>
				<input
					type="search"
					name="search"
					value={searchTerm}
					onChange={onChange}
				/>
			</form>
		);
}