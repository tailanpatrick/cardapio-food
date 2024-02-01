import axios from "axios";

const URL_SERVER = "http://192.168.100.175:3001";

const api = axios.create({
    baseURL: URL_SERVER
});

export default api;
