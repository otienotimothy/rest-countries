import { api } from './api';

export async function fetchAllCountries(){
    let result = await api.get("https://restcountries.com/v3.1/all");
    return result;
}

export async function fetchCountryByName(country){
    let result = await api.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    return result
}

