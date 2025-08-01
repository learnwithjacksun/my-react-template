import axios from "axios";
// import { useAuthStore } from "@/store";

const API_URL = import.meta.env.VITE_BASE_URL;

const api =  axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})

api.interceptors.request.use((config) => {
    // const token = useAuthStore.getState().token;
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
})

export default api;