import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/medici';

export const listMedici = () => axios.get(REST_API_BASE_URL);

export const createMedico = (medico) => axios.post(REST_API_BASE_URL, medico);

export const getMedico = (id_medico) => axios.get(REST_API_BASE_URL + '/' + id_medico);

export const updateMedico = (id_medico, medico) => axios.put(REST_API_BASE_URL + '/' + id_medico, medico);

export const deleteMedico = (id_medico) => axios.delete(REST_API_BASE_URL + '/' + id_medico);