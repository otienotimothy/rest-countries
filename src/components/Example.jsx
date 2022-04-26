import { useCountries } from "../hooks/useCountries";

export function Example() {
	const { isLoading, isError, data, error } = useCountries();
	console.log(isLoading);
	if (isError) {
		console.log(error);
	} else {
		console.log(data);
	}

    return <h1>Hello World</h1>
}
