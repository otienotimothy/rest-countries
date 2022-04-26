import { useQuery } from "react-query";
import { fetchCountries } from "../api-layer/getCountries";

export function useCountries() {
	const { isLoading, isError, data, error } = useQuery(
		"countries",
		fetchCountries
	);

    return {
        isError,
        isLoading,
        data,
        error
    }
}
