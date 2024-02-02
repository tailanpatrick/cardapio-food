import axios from "axios";

const URL_SERVER = "http://18.231.163.22:3001/";

const api = axios.create({
    baseURL: URL_SERVER
});

export default api;
