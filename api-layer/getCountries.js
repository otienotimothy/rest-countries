import axios from "axios";

export async function fetchCountries(){
    let result = await axios.get("https://restcountries.com/v3.1/all");
    return result;
}

