import axios from "axios"

const AUTH_REST_API_BASE_URL = 'http://localhost:3000/api/auth'


axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
}, function (error) {
    return Promise.reject(error);
});


export const registerAPICall = (registerObj) => {

    return axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);
}

export const loginAPICall = (email, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', (email, password));

export const storeTokn = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");