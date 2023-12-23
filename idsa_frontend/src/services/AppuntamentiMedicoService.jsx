import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/appuntamentiMedico';

export const listAppuntamentiMedico = () => axios.get(REST_API_BASE_URL);

export const createAppuntamentoMedico = (appuntamentoMedico) => axios.post(REST_API_BASE_URL, appuntamentoMedico);

export const getAppuntamentoMedico = (id_appuntamentoMedico) => axios.get(REST_API_BASE_URL + '/' + id_appuntamentoMedico);

export const updateAppuntamentoMedico = (id_appuntamentoMedico, appuntamnetoMedico) => axios.put(REST_API_BASE_URL + '/' + id_appuntamentoMedico, appuntamnetoMedico);

export const deleteAppuntamentoMedico = (id_appuntamentoMedico) => axios.delete(REST_API_BASE_URL + '/' + id_appuntamentoMedico);