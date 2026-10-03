import axios from "axios";

const http = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    withCredentials : true
});

export default http;