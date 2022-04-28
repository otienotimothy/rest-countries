import axios from 'axios';

export const api = {
    get: (url, config = {}) => axios.get(url, config)    
}
