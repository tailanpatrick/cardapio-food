import axios from "axios";

const URL_SERVER = "http://18.230.187.156:3001/";

const api = axios.create({
    baseURL: URL_SERVER
});

export default api;
