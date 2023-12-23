import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/medici';

export const listCartelle = () => axios.get(REST_API_BASE_URL);

export const createCartella = (cartella) => axios.post(REST_API_BASE_URL, cartella);

export const getCartella = (id_cartella) => axios.get(REST_API_BASE_URL + '/' + id_cartella);

export const updateCartella = (id_cartella, cartella) => axios.put(REST_API_BASE_URL + '/' + id_cartella, cartella);

export const deleteCartella = (id_cartella) => axios.delete(REST_API_BASE_URL + '/' + id_cartella);