import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/visite';

export const listVisite = () => axios.get(REST_API_BASE_URL);

export const getVisita = (tipo_visita) => axios.get(REST_API_BASE_URL + '/' + tipo_visita);

export const createVisita = (visita) => axios.post(REST_API_BASE_URL, visita);

export const updateVisita = (tipo_visita, visita) => axios.put(REST_API_BASE_URL + '/' + tipo_visita, visita);

export const deleteVisita = (tipo_visita) => axios.delete(REST_API_BASE_URL + '/' + tipo_visita);
