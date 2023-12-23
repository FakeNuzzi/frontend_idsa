import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/pazienti';

export const listPazienti = () => axios.get(REST_API_BASE_URL);

export const createPaziente = (paziente) => axios.post(REST_API_BASE_URL, paziente);

export const getPaziente = (id_paziente) => axios.get(REST_API_BASE_URL + '/' + id_paziente);

export const updatePaziente = (id_paziente, paziente) => axios.put(REST_API_BASE_URL + '/' + id_paziente, paziente);

export const deletePaziente = (id_paziente) => axios.delete(REST_API_BASE_URL + '/' + id_paziente);