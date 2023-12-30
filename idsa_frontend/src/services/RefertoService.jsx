import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/risultati';

export const listReferti = () => axios.get(REST_API_BASE_URL);

export const createReferto = (referto) => axios.post(REST_API_BASE_URL, referto);

export const getReferto = (id_referto) => axios.get(REST_API_BASE_URL + '/' + id_referto);

export const updatePaziente = (id_referto, referto) => axios.put(REST_API_BASE_URL + '/' + id_referto, referto);

export const deletePaziente = (id_referto) => axios.delete(REST_API_BASE_URL + '/' + id_referto);
