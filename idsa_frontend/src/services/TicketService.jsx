import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/ticket';

export const listTicket = () => axios.get(REST_API_BASE_URL);

export const createTicket = (ticket) => axios.post(REST_API_BASE_URL, ticket);

export const getTicket = (id_ticket) => axios.get(REST_API_BASE_URL + '/' + id_ticket);

export const pagaTicket = (id_ticket, ticket) => axios.put(REST_API_BASE_URL + '/' + id_ticket, ticket);
