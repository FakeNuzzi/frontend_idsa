import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/medici';

export const listAppuntamenti = () => axios.get(REST_API_BASE_URL);

export const createAppuntamento = (appuntamento) => axios.post(REST_API_BASE_URL, appuntamento);

export const getAppuntamento = (id_appuntamento) => axios.get(REST_API_BASE_URL + '/' + id_appuntamento);

export const updateAppuntamento = (id_appuntamento, appuntamento) => axios.put(REST_API_BASE_URL + '/' + id_appuntamento, appuntamento);

export const deleteAppuntamento = (id_appuntamento) => axios.delete(REST_API_BASE_URL + '/' + id_appuntamento);