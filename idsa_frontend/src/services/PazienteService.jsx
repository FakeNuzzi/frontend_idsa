import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/pazienti';

export const listPazienti = () => axios.get(REST_API_BASE_URL);

export const createPaziente = (paziente) => axios.post(REST_API_BASE_URL, paziente)
